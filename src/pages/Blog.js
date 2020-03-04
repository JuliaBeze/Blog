import React from "react";
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";

 class Blog extends React.Component{
    render() {
        return <div>
            <Container>
                <Row>
                    <Col md="9">
                        <Media className = "m-5">
                            <img
                            width={190}
                            height={150}
                            className="mr-3 mt-5"
                            src={"https://s3.amazonaws.com/geekbrains-uploads/geekbrains/public/ckeditor_assets/pictures/3955/content_reactreduxintroduction-151124165017-lva1-app6891-thumbnail-4_jpg-cb_1448383914.jpg"}/>
                       <Media.Body>
                           <h5  className="mt-5">Blog post</h5>
                           <p  className="mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </Media.Body>
                        </Media>
                        <Media className = "m-5">
                            <img
                                width={190}
                                height={150}
                                className="mr-3"
                                src={"https://s3.amazonaws.com/geekbrains-uploads/geekbrains/public/ckeditor_assets/pictures/3955/content_reactreduxintroduction-151124165017-lva1-app6891-thumbnail-4_jpg-cb_1448383914.jpg"}/>
                            <Media.Body>
                                <p  className="mt-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush" >
                                <ListGroup.Item> HTML/CSS </ListGroup.Item>
                                <ListGroup.Item> JavaScript </ListGroup.Item>
                                <ListGroup.Item> React/Redux </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className = "mt-3 bg-light">
                            <Card.Body>
                                <Card.Title> Side widget </Card.Title>
                                <Card.Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    }

}

export default Blog;