import React, { Component } from 'react';
import DisplayText from './displayText'

const LETTER_WIDTH = 24.422
const NUMBER_RANGE = 15;

class WordPresenter extends Component {
  constructor(props) {
    super(props)
    const { content } = props;
    this.state = {
      wordArray: content.split(' '),
      wordArraySnippet: content.split(' ').slice(0, 1000),
      currentWord: [''],
      withoutPunctuation: [''],
      currentIndex: 0,
      scarletLetter: 0,
      interval: null,
      stop: false,
      snippet: null,
      position: 0,
      selectedWordIndex: null,
      speed: 100
    }
    this.changeWord = this.changeWord.bind(this)
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
    console.log('start')
    const snippet = wordArray.slice(start, end)
    this.setState({ snippet, selectedWordIndex })
  }

  componentDidMount() {
    const { speed, currentIndex, wordArray, stop } = this.state;
    setTimeout(() => { delay(); }, speed);
    const delay = () => {
      const parameters = this.changeWord()
      this.constructSentence()
      const { speed, currentIndex } = parameters
      if (parameters.currentIndex < wordArray.length - 1 || !stop) {
        setTimeout(() => { delay(); }, speed);
      }
    }
  }

  changeWord = () => {
    const { currentIndex, wordArray, speed } = this.state;
    const currentWordSplit = wordArray[currentIndex].split('')
    if(currentIndex > 50){
      this.setState({stop: true})
    }
    let scarletLetter;
    if (currentWordSplit.length <= 1) {
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

  render() {
    const { currentWord, scarletLetter, snippet, selectedWordIndex } = this.state
    const left = LETTER_WIDTH * ( scarletLetter + 1 )

    return(
      <div style={{ display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'}}>
        <div style={{width: '309px', border: '1px solid red'}}>
          <div style={{position: 'relative', left: '65px', height: '123px'}}>
            <div style={{display: 'flex', flexDirection: 'row', position: 'absolute', left: -left+'px'}}>
              {currentWord.map((item , i)=> {
                if(scarletLetter === i) {
                  return <h2 key={item+i} style={{position: 'relative', color: '#e8198b'}}>{item}</h2>
                }
                return <h2 key={item+i} style={{color: 'white'}}>{item}</h2>
              })}
            </div>
          </div>
        </div>
        { snippet && <DisplayText snippet={snippet} wordArraySnippet={this.state.wordArraySnippet} LETTER_WIDTH={LETTER_WIDTH} selectedWordIndex={selectedWordIndex} cutRow={this.cutRow} position={this.state.position}/> }
      </div>
    )
  }
}

export default WordPresenter