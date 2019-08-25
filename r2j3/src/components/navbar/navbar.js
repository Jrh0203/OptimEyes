import React, { Component } from "react";
import { Navbar, Form, FormControl, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from '../../assets/logo.png'

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
                style={{display: 'flex'}} 
                className="custom_navbar"
                bg="dark"
                onToggle={this.setNavExpanded}
                expanded={this.state.navExpanded}>
                    <img style={{height: '72px', width: 'auto', paddingLeft: '40px'}} src={Logo}/>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{backgroundColor: 'rgb(44, 48, 58)'}}/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <Navbar.Brand style={{visibility: 'none'}}><Link to="/">OptimEyes</Link></Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Nav;