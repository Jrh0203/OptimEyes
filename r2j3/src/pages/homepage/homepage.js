import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import API from "../../utils/API";

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
            objects: []
        }
    }

    componentDidMount(){
        API.GetBooksList(this.state.yBody).then(books => {
            console.log(books.data.objects);
            console.log(books.data.objects[0]["properties"]["enaio:objectId"].value);
            this.setState({
                objects: books.data.objects
            })
        })
    }

    render(){
        
        return(
            <Container>
                <Row>
                    <Col>
                        {this.state.objects.length ? (
                            <div>
                                {this.state.objects.map(book => (
                                    <h1 onClick={() => {
                                        let oId = book["properties"]["enaio:objectId"].value;
                                        API.GetBooksContent(oId).then(text => {
                                            console.log(text.data);
                                        })
                                    }}>
                                    {book.contentStreams[0].fileName.substring(0, book.contentStreams[0].fileName.length - 4)}
                                    </h1>
                                ))}
                            </div>
                        ) : null}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Homepage;