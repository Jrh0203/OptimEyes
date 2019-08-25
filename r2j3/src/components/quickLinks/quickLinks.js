import React, { Component } from 'react';

const Link = (color) => {
  return <div style={{backgroundColor: color, height: '50px', width: '50px'}}></div>
}

class QuickLinks extends Component {
    render() {
      return <div style={{width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(32, 32, 32)'}}>
        <p style={{color: 'rgb(232, 25, 139)'}}>Powered by Yuuvis</p>
      </div>
    }
}

export default QuickLinks