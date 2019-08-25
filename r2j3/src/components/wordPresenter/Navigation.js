import React, {Component} from 'react';
import './Navigation.css'
import { Container, Row, Col, Spinner } from "react-bootstrap";

let count = 3;
let intervalId;
class Navigation extends Component {
    constructor(props){
        super(props)
        this.state={
            timer: 3,
            count: 3,
            // something: setInterval(() => { this.handleTimer(count); }, 3000),
        }
    }

    endCountdown = () => {
        const { toggleMovement, stopThis } = this.props;
        console.log("this.props", this.props)
        clearInterval(intervalId)
        this.props.toggleMovement()
        this.props.resetCountdown();
        this.props.showTheCountdown(false)
    }


    handleTimer = () => {
        console.log('state?', this.props.stopThis)
        if(!this.props.stopThis) {
            this.props.toggleMovement();
            return
        }
        this.props.showTheCountdown(true)
        if(this.state.count === 0) {
        console.log('here!!!!', )
          this.endCountdown();
        } else {
            intervalId = setInterval(() => {
                if(this.props.countdown !== 1){
                    this.props.decreaseCountdown()
                    console.log('hereeee')
                } else {
                    this.endCountdown()
                }
            }, 400);
        }
      }
    
    setIntervalYo = () => {
        setInterval(() => { this.handleTimer(count); }, 1000);
    }

    render() {
        const { toggleMovement, stopThis } = this.props;
        let icon;
        if (stopThis) {
            icon = "fas fa-play"
        } else {
            icon = "fas fa-pause"
        }
        return (
            <div className="wrapper">
                <i className="fas fa-step-backward"></i>
                <i className="fas fa-undo-alt"></i>
                <i onClick={() => this.handleTimer()} className={icon}></i>
                <i className="fas fa-redo-alt"></i>
                <i className="fas fa-step-forward"></i>
            </div>
        )
    }

}

export default Navigation;