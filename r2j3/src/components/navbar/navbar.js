import React, { Component } from "react";
import { Navbar, Form, FormControl, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

class Nav extends Component {
    state = {
        navExpanded: false
    }

    setNavExpanded(expanded) {
        this.setState({ navExpanded: expanded });
    }

    closeNav() {
        this.setState({ navExpanded: false });
    }

    render(){
        return (
            <div className="wrapper">
                <Navbar 
                    className="custom_navbar"
                    bg="dark"
                    onToggle={this.setNavExpanded}
                    expanded={this.state.navExpanded}>
                    <Container fluid>
                        <Navbar.Brand><Link to="/">OptimEyes</Link></Navbar.Brand>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Nav;