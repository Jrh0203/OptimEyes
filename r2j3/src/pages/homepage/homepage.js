import React, { Component } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import WordPresenter from "../../components/wordPresenter/wordPresenter";
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
            <Container fluid>
                <Row style={{height: '100vh'}}>
                    <Col md={2} style={{backgroundColor: '#2C303A'}} className="custom_sidebar">
                        <Row className="row_padding">
                        <Col className="column_right"><i class="fas fa-folder-plus"></i></Col>
                        </Row>
                        <Row className="folder_wrapper">
                            <Col md={1}>
                                <i class="fas fa-folder"></i>
                            </Col>
                            <Col>
                                <p>MY FOLDER</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <i class="fas fa-folder-open"></i>
                            </Col>
                            <Col>
                                <p>RECENTS</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <i class="fas fa-envelope"></i>
                            </Col>
                            <Col>
                                <p id='yuuvis'>NO REPLY AT YUUVIS</p>
                            </Col>
                        </Row>
                        <hr></hr>
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
                                            {book.contentStreams[0].fileName.substring(0, book.contentStreams[0].fileName.length - 4).toUpperCase()}
                                        </p>
                                        </Col>
                                    </Row>
                                ))}
                            </div>
                        ) : null}
                    </Col>
                    <Col md={9}>
                        {this.state.text.length ? (
                            <WordPresenter content={this.state.text} />
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