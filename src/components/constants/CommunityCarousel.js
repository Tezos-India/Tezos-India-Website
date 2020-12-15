import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import previousIcon from "../../assets/prev.svg";
import nextIcon from "../../assets/next.svg";
import "../../styles/Community.css";

export default class CarouselComponent extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    let sliderLength = this.props.slides.length;

    const prevSlide = () => {
      let currentSliderIndex = this.state.value;
      if (currentSliderIndex - 1 >= 0) {
        this.setState({ value: currentSliderIndex - 1 });
      }
    };
    const nextSlide = () => {
      let currentSliderIndex = this.state.value;
      if (currentSliderIndex + 1 <= sliderLength) {
        this.setState({ value: currentSliderIndex + 1 });
      }
    };
    return (
      <div>
        <Carousel
          value={this.state.value}
          onChange={this.onChange}
          slidesPerPage={1}
          slidesPerScroll={1}
          // offset={10}
          // minDraggableOffset={10}
          clickToChange
          draggable={false}
          keepDirectionWhenDragging={true}
        >
          {this.props.slides}
        </Carousel>
        <div className="carousel-control">
          <span onClick={prevSlide}>
            <img style={{ width: "55px" }} src={previousIcon} alt="Prev" />
          </span>

          <span onClick={nextSlide}>
            <img style={{ width: "55px" }} src={nextIcon} alt="next" />
          </span>
        </div>
      </div>
    );
  }
}
