import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Homepage extends Component {

    state = {
        yBody: {
            "query": {
              "statement": "SELECT * FROM enaio:object",
              "skipCount": 0,
              "maxItems": 50
            }
        },

    }

    // function API.GetBookList(this.state.yBody).then(res => console.log(res))

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