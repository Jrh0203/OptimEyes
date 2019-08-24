import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Homepage extends Component {

    state = {

    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>Hello world</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Homepage;