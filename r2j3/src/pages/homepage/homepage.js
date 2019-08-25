import React, { Component } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import API from "../../utils/API";
import "./styles.css";

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            yBody: {
                "query": {
                "statement": "SELECT * FROM enaio:object",
                "skipCount": 0,
                "maxItems": 50
                }
            },
            objects: [],
            text: ""
        }
    }

    componentDidMount(){
        API.GetBooksList(this.state.yBody).then(books => {
            this.setState({
                objects: books.data.objects
            })
        })
    }

    render(){
        
        return(
            <Container>
                <Row>
                    <Col md={3}>
                        <Row>
                            <Col md={1}>
                                <i class="fas fa-folder"></i>
                            </Col>
                            <Col>
                                <p>My Folder</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <i class="fas fa-folder-open"></i>
                            </Col>
                            <Col>
                                <p>Recents</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <i class="fas fa-envelope"></i>
                            </Col>
                            <Col>
                                <p>No reply at Yuuvis</p>
                            </Col>
                        </Row>
                        {this.state.objects.length ? (
                            <div>
                                {this.state.objects.map(book => (
                                    <Row>
                                        <Col md={1}>
                                            <i class="fas fa-book-open"></i>
                                        </Col>
                                        <Col>   
                                        <p onClick={() => {
                                            let oId = book["properties"]["enaio:objectId"].value;
                                            this.setState({ text: "" });
                                            API.GetBooksContent(oId).then(text => {
                                                this.setState({ text: text.data });
                                            })
                                        }}>
                                            {book.contentStreams[0].fileName.substring(0, book.contentStreams[0].fileName.length - 4)}
                                        </p>
                                        </Col>
                                    </Row>
                                ))}
                            </div>
                        ) : null}
                    </Col>
                    <Col>
                        {this.state.text.length ? (
                            <p>{this.state.text}</p>
                        ): 
                        <div className="spinnerRow">
                            <Row>
                                <Col>
                                    <Spinner animation="border" variant="secondary" />
                                    <p>OptimEyes is grabbing your content</p>
                                </Col>
                            </Row>
                        </div>}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Homepage;