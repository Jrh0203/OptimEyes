import React, { Component } from 'react';

const LETTER_WIDTH = 18.563

class WordPresenter extends Component {
  constructor(props) {
    super(props)
    const { content } = props;
    this.state = {
      wordArray: content.split(' '),
      currentWord: [''],
      withoutPunctuation: [''],
      currentIndex: 0,
      scarletLetter: 0,
      interval: null,
      stop: false,
      speed: 150
    }
    this.changeWord = this.changeWord.bind(this)
  }

  componentDidMount() {
    const { speed, currentIndex, wordArray, stop } = this.state;
    setTimeout(() => { delay(); }, speed);
    const delay = () => {
      const parameters = this.changeWord()
      const { speed, currentIndex } = parameters
      if (parameters.currentIndex < wordArray.length - 1 && !stop) {
        setTimeout(() => { delay(); }, speed);
      }
    }
  }

  changeWord = () => {
    const { currentIndex, wordArray, speed } = this.state;
    const currentWordSplit = wordArray[currentIndex].split('')

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



    const { currentWord, scarletLetter } = this.state
    const left = LETTER_WIDTH * (scarletLetter+1)

    return(
      <div style={{width: '309px', border: '1px solid red'}}>
        <div style={{position: 'relative', left: '65px', height: '97px'}}>
          <div style={{display: 'flex', flexDirection: 'row', position: 'absolute', left: -left+'px'}}>
            {currentWord.map((item , i)=> {
              if(scarletLetter === i) {
                return <h3 key={item+i} style={{position: 'relative', color: '#e8198b'}}>{item}</h3>
              }
              return <h3 key={item+i} style={{color: 'white'}}>{item}</h3>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default WordPresenter