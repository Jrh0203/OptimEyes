import React, {Component} from 'react';
import './Navigation.css'
import { Form } from "react-bootstrap";
import {Pagehome} from '../../pages/homepage/homepage'

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
        clearInterval(intervalId)
        this.props.toggleMovement()
        this.props.resetCountdown();
        this.props.showTheCountdown(false)
    }


    handleTimer = () => {
        if(!this.props.stopThis) {
            this.props.toggleMovement();
            return
        }
        this.props.showTheCountdown(true)
        if(this.state.count === 0) {
          this.endCountdown();
        } else {
            intervalId = setInterval(() => {
                if(this.props.countdown !== 1){
                    this.props.decreaseCountdown()
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
        const { toggleMovement, stopThis, changeWPM } = this.props;
        let icon;
        if (stopThis) {
            icon = "fas fa-play"
        } else {
            icon = "fas fa-pause"
        }
        return (
            <div className="wrapperNav">
                <i className="fas fa-undo-alt"></i>
                <i onClick={() => this.handleTimer()} className={icon}></i>
                <i className="fas fa-redo-alt"></i>
                <Form style={{paddingLeft: '25px'}}>
                    <Form.Control onChange={(e) => changeWPM(e)} className="wpmSelect" as="select" style={{backgroundColor:'rgb(44, 48, 58)', color: 'white'}}>
                        <option style={{backgroundColor:'rgb(44, 48, 58)'}}>wpm</option>
                        <option selected="selected" data-val="300">200wpm</option>
                        <option data-val="240">250wpm</option>
                        <option data-val="200">300wpm</option>
                        <option data-val="172">350wpm</option>
                        <option data-val="150">400wpm</option>
                        <option data-val="133">450wpm</option>
                        <option data-val="120">500wpm</option>
                        <option data-val="110">550wpm</option>
                        <option data-val="100">600wpm</option>
                        <option data-val="92">650wpm</option>
                        <option data-val="86">700wpm</option>
                        <option data-val="80">750wpm</option>
                    </Form.Control>
                </Form>
                {/* <Pagehome faceToggleMovement={this.faceToggleMovement} handleTimer={this.handleTimer}/> */}
            </div>
        )
    }

}

export default Navigation;