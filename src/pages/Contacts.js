import React from "react";
import {Button, Container, Form} from "react-bootstrap";

class Contacts extends React.Component{
    render() {
        return <div>
            <Container style ={{width:'500px', marginTop:'60px'}}>
                <h1 className="text-center"> Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type=" email" placeholder="Enter your email"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea </Form.Label>
                        <Form.Control as ="textarea" rows={3}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                       <Form.Check type = "checkbox" label = "Check me out">

                       </Form.Check>
                        <Form.Control as ="textarea" rows={3}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>

        </div>
    }

}

export default Contacts;