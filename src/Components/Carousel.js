import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class CarouselComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
          pictNames: props.pictures
        };
      }
    showCarousel(){

    }
  render() {
    let pictures = this.state.pictNames;
   
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="carousel"
                    src= {pictures[0]}
                    alt="First slide"
                    />
                <Carousel.Caption>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel"
                    src= {pictures[1]}
                    alt="First slide"
                    />
                <Carousel.Caption>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel"
                    src= {pictures[2]}
                    alt="First slide"
                    />
                <Carousel.Caption>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel"
                    src= {pictures[3]}
                    alt="First slide"
                    />
                <Carousel.Caption>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel"
                    src= {pictures[4]}
                    alt="First slide"
                    />
                <Carousel.Caption>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
  }
}

export default CarouselComponent;