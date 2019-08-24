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
      interval: null,
      speed: 300
    }
  }

  componentDidMount() {
    // this.setInterval(this.state.speed);
    this.setInterval(150);

  }

  setInterval = (newSpeed) => {
    const { speed } = this.state;
    const { interval } = this.state;
    const intervalID = setInterval(
      () => this.changeWord(),
      newSpeed
    );
    this.setState({interval: intervalID})
  }

  changeWord = () => {
    const { currentIndex, wordArray } = this.state;
    const currentWordSplit = wordArray[currentIndex].split('')
    const withoutPunctuation = wordArray[currentIndex].replace(/[\W_]+/g," ")
    console.log('withoutPunctaiton', withoutPunctuation)
    this.setState({
      currentWord: currentWordSplit,
      withoutPunctuation,
      currentIndex: currentIndex + 1
    });
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
    const { currentWord, withoutPunctuation } = this.state
    const currentWordWithoutPunctuation = currentWord.slice();
    let left
    const even = Number.isInteger(currentWord.length/2)
    let scarletLetter;
    if (currentWord.length <= 1) {
      scarletLetter = 0 
    } else if (currentWord.length < 8) {
      scarletLetter = 1
    } else {
      scarletLetter = 2
    }

    left = LETTER_WIDTH * (scarletLetter+1)
    console.log('left', left)
    
    return(
      <div style={{position: 'absolute', paddingLeft: '100'}}>
        <div style={{display: 'flex', flexDirection: 'row', position: 'absolute', left: -left+'px'}}>
          {currentWord.map((item , i)=> {
            let color;
            let isMiddle
            if (Number.isInteger(currentWord.length/2)) {
              isMiddle = Math.floor(currentWord.length/2-1) === i
            } else {
              isMiddle = Math.floor(currentWord.length/2) === i
            }
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