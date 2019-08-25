import React, { Component } from 'react';
import DisplayText from './displayText';
import Navigation from './Navigation'
import {Pagehome} from '../../pages/homepage/homepage'
import "./wordPresenter.css";
import QuickLinks from '../quickLinks/quickLinks';

const LETTER_WIDTH = 24.422
const NUMBER_RANGE = 15;
let stopThis = true;

class WordPresenter extends Component {
  constructor(props) {
    stopThis = true;
    super(props)
    const { content } = props;
    this.state = {
      wordArray: content,
      wordArraySnippet: content.slice(0, 10000),
      currentWord: [''],
      withoutPunctuation: [''],
      currentIndex: 0,
      countdown: 3,
      scarletLetter: 0,
      interval: null,
      stop: true,
      showCountdown: false,
      snippet: null,
      position: 0,
      selectedWordIndex: null,
      wpm: 200,
      speed: 100
    }
    this.changeWord = this.changeWord.bind(this)
  }

  changeWPM = (e) => {
    const { value } = e.target;
    const noLetters = value.replace(/\D/g,'')
    this.setState({wpm: Number(noLetters)})

  }

  componentWillReceiveProps(nextProps) {
    console.log('here!')
    if(nextProps.content !== this.props.wordArray) {
      stopThis =true;
    }
  }

  showTheCountdown = (value) => {
    this.setState({showCountdown: value})
  }

  decreaseCountdown = () => {
    this.setState({countdown: this.state.countdown - 1})
  }

  resetCountdown = () => {
    this.setState({countdown: 3})
  }

  cutRow = (position) => {
    this.setState({position})
  }

  constructSentence() {
    const { currentIndex, wordArray, position } = this.state;
    let start;
    let end
    let selectedWordIndex
    if (currentIndex - NUMBER_RANGE < 0) {
      start = position
      selectedWordIndex = currentIndex -1
    } else {
      start = position
      selectedWordIndex = currentIndex-1
    }
    if (currentIndex + NUMBER_RANGE > wordArray.length - 1 ) {
      end = wordArray.length
    } else {
      // console.log('here!', currentIndex, R)
      end = currentIndex + NUMBER_RANGE
    }
    // console.log('start')
    const snippet = wordArray.slice(start, end)
    this.setState({ snippet, selectedWordIndex })
  }

  delay = () => {
    const { wordArray, stop } = this.state;
    const parameters = this.changeWord()
    this.constructSentence()
    const { speed } = parameters
    console.log('wordsperminute', this.state.wpm)
    if (parameters.currentIndex < wordArray.length - 1 && !stopThis) {
      setTimeout(() => { this.delay(); }, 10);
    }
  }

  componentDidMount() {
    const { speed, currentIndex, wordArray, stop } = this.state;
    setTimeout(() => { this.delay(); }, speed);
  }

  changeWord = () => {
    const { currentIndex, wordArray, speed } = this.state;
    const currentWordSplit = wordArray[currentIndex].split('')
    if(currentIndex > 50){
      this.setState({stop: true})
    }
    let scarletLetter;
    if (currentWordSplit.length <= 2) {
      scarletLetter = 0
    } else if (currentWordSplit.length < 8) {
      scarletLetter = 1
    } else {
      scarletLetter = 2
    }
    const newIndex = currentIndex + 1

    this.setState({
      currentWord: currentWordSplit,
      currentIndex: newIndex,
      scarletLetter
    });
    if(currentWordSplit.length > 7) {
      return {speed: speed + 50, currentIndex};
    }
    return {speed: speed, currentIndex};
  }

  speedUp = () => {
    const { speed, interval } = this.state;
    if (speed > 50) {
      clearInterval(interval)
      const newSpeed = speed-50
      this.setState({speed: newSpeed})
      this.setInterval(newSpeed)
    }
  }

  toggleMovement = () => {
    if(!stopThis) {
      stopThis = !stopThis;
      return
    } else {
      stopThis = !stopThis;
      this.delay();
    }
    // this.setState({currentIndex: this.state.currentI})
  }

  faceToggleMovement = (stop) => {
    if(stop) {
      stopThis = !stopThis;
      return
    } else {
      stopThis = !stopThis;
      this.delay();
    }
  }

  render() {
    const { currentWord, scarletLetter, snippet, selectedWordIndex, element } = this.state
    let left
    if(scarletLetter === 0) {
      left = LETTER_WIDTH+5 * ( scarletLetter + 1 )
    } else if (scarletLetter ===1) {
      left = LETTER_WIDTH * ( scarletLetter + 1 )
    } else if (scarletLetter ===2) {
      left = LETTER_WIDTH+15 * ( scarletLetter + 1 )
    }
    
    return(
      <div
        className="wordPresent" 
        style={{ display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'}}>
        <div className="rounded_corners" style={{width: '100%', backgroundColor: 'rgb(32,32,32)', height: '200px' }}>
          <div className="selectedWerd" style={{position: 'relative', left: '120px', height: '123px', top: '27%'}}>
              <div className="line"></div>
              <div className="horizontal_line_top"></div>
            <div style={{display: 'flex', flexDirection: 'row', position: 'absolute', left: this.state.showCountdown ? 0 : -left+'px'}}>
              {this.state.showCountdown && <h2 className="monospaced" style={{position: 'relative', color: '#e8198b', left: '-31px'}}>{this.state.countdown}</h2>}
              {currentWord.map((item , i)=> {
                if(!this.state.showCountdown) {
                if(scarletLetter === i) {
                  return <h2 className="monospaced" key={item+i} style={{position: 'relative', color: '#e8198b'}}>{item}</h2>
                }
                return <h2 className="monospaced" key={item+i} style={{color: 'white'}}>{item}</h2>
              }
              })}
            </div>
            <div className="horizontal_line_bottom"></div>
            <div className="line_bottom"></div>
          </div>
          <Navigation changeWPM={this.changeWPM} faceToggleMovement={this.faceToggleMovement} countdown={this.state.countdown} toggleMovement={this.toggleMovement} stopThis={stopThis} decreaseCountdown={this.decreaseCountdown} resetCountdown={this.resetCountdown} showTheCountdown={this.showTheCountdown}/>
        </div>
        { snippet && <DisplayText snippet={snippet} wordArraySnippet={this.state.wordArraySnippet} LETTER_WIDTH={LETTER_WIDTH} selectedWordIndex={selectedWordIndex} cutRow={this.cutRow} position={this.state.position} stop={this.state.stop}/> }
      </div>
    )
  }
}

export default WordPresenter;