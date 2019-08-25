import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Webcam from "react-webcam";
import * as faceapi from 'face-api.js';
import "./styles.css"
//import WebCamPicture from './WebCamPicture.js';
import * as handTrack from 'handtrackjs';
import {Helmet} from "react-helmet";

const minConfidence = 0.6

const videoConstraints = {
  width: 350,
  height: 350,
  facingMode: 'user',
};


export default class Homepage extends Component {

  constructor(props){
    super(props);
    this.fullFaceDescriptions = null;
    this.canvas = React.createRef();
    this.canvasPicWebCam = React.createRef();
    this.webcam = React.createRef();

    this.sideThreshold = 2.0
    this.snapshot = null
    this.first = 1
    this.lastRatio = 0
    this.buffer = 0
  }

    distanceApprox(p1,p2){
      // Approximation by using octagons approach
      var x = p2.x-p1.x;
      var y = p2.y-p1.y;
      return 1.426776695*Math.min(0.7071067812*(Math.abs(x)+Math.abs(y)), Math.max (Math.abs(x), Math.abs(y))); 
    }

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

  async componentDidMount() {
    console.log('webcam', this.webcam.current)
    await this.loadModels();
    //await this.getFullFaceDescription(this.canvas.current);
    //this.drawDescription(this.canvas.current);
    await this.sleep(1000)
    //this.videoReady()
    this.handReady();
    
  }

  videoReady() {
    console.log("READY")
    this.canvas = faceapi.createCanvasFromMedia(this.webcam.current.video)
    document.body.append(this.canvas)
    const displaySize = { width: this.webcam.current.video.width, height: this.webcam.current.video.height }
    faceapi.matchDimensions(this.canvas, displaySize)
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(this.webcam.current.video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
        if (detections[0]){
          var leftDist = this.distanceApprox(detections[0].landmarks.positions[3],detections[0].landmarks.positions[48])
          var rightDist = this.distanceApprox(detections[0].landmarks.positions[54],detections[0].landmarks.positions[13])
          var bigDist = -1
          var smallDist = -1
          if (leftDist>rightDist){
            bigDist = leftDist
            smallDist = rightDist
          } else {
            bigDist = rightDist
            smallDist = leftDist
          }
          var ratio = bigDist/smallDist
          console.log(ratio)
          if (ratio<this.sideThreshold && this.lastRatio>this.sideThreshold && this.buffer == 0){
            console.log("RESUME")
          }
          if (ratio>this.sideThreshold && this.lastRatio<this.sideThreshold && this.buffer == 0){
            console.log("PAUSE")
          }
          this.lastRatio = ratio
          if (this.buffer>1)
            this.buffer-=1
          const resizedDetections = faceapi.resizeResults(detections, displaySize)
          this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height)
          faceapi.draw.drawDetections(this.canvas, resizedDetections)
          faceapi.draw.drawFaceLandmarks(this.canvas, resizedDetections)
          if (this.first==1){
            this.first = 0
            this.snapshot = detections
          }
        }
      }, 100)
  }

  handReady() {
    handTrack.load().then(model => { 
        model.detect(this.webcap.current.video).then(predictions => {
          console.log('Predictions: ', predictions) // bbox predictions
        });
    });
  }

  async loadModels () {
    await faceapi.nets.tinyFaceDetector.loadFromUri("http://127.0.0.1:9000/")
    await faceapi.nets.faceLandmark68Net.loadFromUri("http://127.0.0.1:9000/")
    await faceapi.nets.faceRecognitionNet.loadFromUri("http://127.0.0.1:9000/")
    await faceapi.nets.faceExpressionNet.loadFromUri("http://127.0.0.1:9000/")
  }

  render() {
    return (
      <div className="Homepage" >
        <Webcam
          audio={false}
          height={600}
          ref={this.webcam}
          screenshotFormat="image/jpeg"
          width={600}
          videoConstraints={videoConstraints}
        />
      </div>
    );
  }
}

