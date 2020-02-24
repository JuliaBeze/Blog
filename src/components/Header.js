import React from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "../pages/Home";
import Digest from "../pages/Digest";
import Contacts from "../pages/Contacts";


class Header extends React.Component {

    render() {

        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src="https://store.donanimhaber.com/90/db/71/90db717ee65c1ddde7125960bf749651.png"
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle area-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/digest"> Digest</Nav.Link>
                                <Nav.Link href="/contacts"> Contacts</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text"
                                             placeholder="Search"
                                             className="mr-sm-2"/>
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>

                    </Container>

                </Navbar>




            </>

        )

    }

}

export default Header;
