import React, {Component} from 'react';
import './Navigation.css'
import { Container, Row, Col, Spinner } from "react-bootstrap";

class Navigation extends Component {
    render() {
        return (
            <div className="wrapper">
                <i className="fas fa-step-backward"></i>
                <i className="fas fa-undo-alt"></i>
                <i className="fas fa-play"></i>
                <i className="fas fa-redo-alt"></i>
                <i className="fas fa-step-forward"></i>
            </div>
        )
    }

}

export default Navigation;