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
      speed: 150
    }
    this.changeWord = this.changeWord.bind(this)
  }

  componentDidMount() {
    const { speed } = this.state;
    setTimeout(function() { delay(); }, speed);

    const delay = () => {
      const time = this.changeWord()
      setTimeout(function() { delay(); }, time);
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

    this.setState({
      currentWord: currentWordSplit,
      currentIndex: currentIndex + 1,
      scarletLetter
    });
    
    if(currentWordSplit.length > 7) {
      return speed + 100;
    }
    return speed;
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
      <div style={{position: 'absolute', paddingLeft: '100'}}>
        <div style={{display: 'flex', flexDirection: 'row', position: 'absolute', left: -left+'px'}}>
          {currentWord.map((item , i)=> {
            if(scarletLetter === i) {
              return <h3 key={item+i} style={{position: 'relative', color: '#e8198b'}}>{item}</h3>
            }
            return <h3 key={item+i} style={{color: 'white'}}>{item}</h3>
          })}
        </div>
      </div>
    )
  }
}

export default WordPresenter