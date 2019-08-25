import React, { Component,Fragment } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import WordPresenter from "../../components/wordPresenter/wordPresenter";
import API from "../../utils/API";
import QuickLinks from '../../components/quickLinks/quickLinks'
import "./styles.css";
import Webcam from "react-webcam";
import * as faceapi from 'face-api.js';
import "./styles.css"
//import WebCamPicture from './WebCamPicture.js';
// import * as handTrack from 'handtrackjs';
import {Helmet} from "react-helmet";


class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            yBody: {
                "query": {
                "statement": "SELECT * FROM enaio:object",
                "skipCount": 0,
                "maxItems": 50
                }
            },
            objects: [],
            text: `"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            
            `
        }
    }

    componentDidMount(){
        API.GetBooksList(this.state.yBody).then(books => {
            this.setState({
                objects: books.data.objects
            })
        })
    }

    render(){
        
        return(
          <Fragment>
            <Container fluid>
                <Row className="custom_row_height">
                    <Col md={2} style={{backgroundColor: '#2C303A'}} className="custom_sidebar rounded_corners">
                        <Row className="row_padding">
                        <Col className="column_right"><i className="fas fa-folder-plus"></i></Col>
                        </Row>
                        <Row className="folder_wrapper">
                            <Col md={1}>
                                <i className="fas fa-folder"></i>
                            </Col>
                            <Col>
                                <p>MY FOLDER</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <i className="fas fa-folder-open"></i>
                            </Col>
                            <Col>
                                <p>RECENTS</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <i className="fas fa-envelope"></i>
                            </Col>
                            <Col>
                                <p id='yuuvis'>NO REPLY AT YUUVIS</p>
                            </Col>
                        </Row>
                        <hr></hr>
                        {this.state.objects.length ? (
                            <div>
                                {this.state.objects.map(book => (
                                    <Row>
                                        <Col md={1}>
                                            <i className="fas fa-book-open"></i>
                                        </Col>
                                        <Col>   
                                        <p onClick={() => {
                                            let oId = book["properties"]["enaio:objectId"].value;
                                            this.setState({ text: "" });
                                            API.GetBooksContent(oId).then(text => {
                                                this.setState({ text: text.data });
                                            })
                                        }}>
                                            {book.contentStreams[0].fileName.substring(0, book.contentStreams[0].fileName.length - 4).toUpperCase()}
                                        </p>
                                        </Col>
                                    </Row>
                                ))}
                            </div>
                        ) : null}
                    </Col>
                    <Col md={9}>
                        {this.state.text.length ? (
                            <WordPresenter content={this.state.text} element={<i className="fas fa-envelope"></i>} />
                        ): 
                        <div className="spinnerRow">
                            <Row>
                                <Col>
                                    <Spinner animation="border" variant="secondary" />
                                    <p>OptimEyes is grabbing your content</p>
                                </Col>
                            </Row>
                        </div>}
                    </Col>
                </Row>
            </Container>
            <div><QuickLinks/></div>
          </Fragment>
        )
    }
}


const minConfidence = 0.6

const videoConstraints = {
  width: 350,
  height: 350,
  facingMode: 'user',
};


class Pagehome extends Component {

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
    this.videoReady()
    // this.handReady();
    
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
          // console.log(ratio)
          if (ratio<this.sideThreshold && this.lastRatio>this.sideThreshold && this.buffer == 0){
            this.props.handleTimer()
          }
          if (ratio>this.sideThreshold && this.lastRatio<this.sideThreshold && this.buffer == 0){
            this.props.handleTimer()
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

  // handReady() {
  //   handTrack.load().then(model => { 
  //       model.detect(this.webcap.current.video).then(predictions => {
  //         console.log('Predictions: ', predictions) // bbox predictions
  //       });
  //   });
  // }

  async loadModels () {
    await faceapi.nets.tinyFaceDetector.loadFromUri("http://127.0.0.1:9000/")
    await faceapi.nets.faceLandmark68Net.loadFromUri("http://127.0.0.1:9000/")
    await faceapi.nets.faceRecognitionNet.loadFromUri("http://127.0.0.1:9000/")
    await faceapi.nets.faceExpressionNet.loadFromUri("http://127.0.0.1:9000/")
  }

  render() {
    return (
      <div className="Homepage" style={{position: 'absolute', left: '341px', top: '-102px'}} >
        <Webcam
          audio={false}
          height={100}
          ref={this.webcam}
          screenshotFormat="image/jpeg"
          width={100}
          videoConstraints={videoConstraints}
        />
      </div>
    );
  }
}


export {Homepage, Pagehome}