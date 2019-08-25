import React, {Component} from 'react';
import './Navigation.css'
import { Form } from "react-bootstrap";

class Navigation extends Component {
    render() {
        return (
            <div className="wrapper">
                <i className="fas fa-undo-alt"></i>
                <i className="fas fa-play"></i>
                <i className="fas fa-redo-alt"></i>
                <Form>
                    <Form.Control className="wpmSelect" as="select">
                        <option>wpm</option>
                        <option data-val="300">200wpm</option>
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
            </div>
        )
    }

}

export default Navigation;