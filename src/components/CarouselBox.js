import React from "react";
import Carousel from "react-bootstrap/Carousel";
import mountains from "../assets/mountains.jpeg";
import lake from "../assets/lake.jpeg";
import mountain from "../assets/mountain.jpeg";


class CarouselBox extends React.Component {
    render() {
        return <div>
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100 h-auto"
                    src = {mountain}
                    alt="Mountains"
                />
                <Carousel.Caption>
                    <h3> Mountains </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </Carousel.Caption>
            </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src = {lake}
                        alt="Mountains"
                    />
                    <Carousel.Caption>
                        <h3> Lake </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src = {mountains}
                        alt="Mountains"
                    />
                    <Carousel.Caption>
                        <h3> Mountains </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    }
}

export default CarouselBox;