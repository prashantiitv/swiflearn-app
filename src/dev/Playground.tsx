import React, { Component } from "react";
import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";
import Selector from "../components/Selector";
import uuidv4 from "uuid";
import { config } from "react-spring";

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 3,
    showNavigation: true,
    config: config.gentle,
    goToSlideDelay: 200,
  };

  slides: Slide[] = [
      {
        key: uuidv4(),
        content: (
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        ),
      },
      {
        key: uuidv4(),
        content: (
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/25QyCxVkXwQ"
          ></iframe>
        ),
      },
      {
        key: uuidv4(),
        content: (
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/GibiNy4d4gc"
          ></iframe>
        ),
      },
      {
        key: uuidv4(),
        content: (
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/L0MK7qz13bU"
          ></iframe>
        ),
      },
      {
        key: uuidv4(),
        content: (
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/UFatVn1hP3o"
          ></iframe>
        ),
      },
      {
        key: uuidv4(),
        content: (
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/nLGBEETtEPc"
          ></iframe>
        ),
      },
      {
        key: uuidv4(),
        content: (
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/moSFlvxnbgk"
          ></iframe>
        ),
      },
      {
        key: uuidv4(),
        content: (
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/iEKLFS-aKcw"
          ></iframe>
        ),
      },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
    <>
      <NavBar/>
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>        
        <div style={{ marginTop: 100 }}>
          <h2>Concept Videos</h2>
          <h6>Select a number</h6>
        </div>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          goToSlideDelay={this.state.goToSlideDelay}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div style={{ marginTop: 50}}>
          <h2>Live Classes</h2>
          <h6>Select a number</h6>
        </div>
        <div style={{ borderStyle: "groove", borderRadius: "15px", marginTop: 50, marginBottom: 100, padding: 15 }}>
          <Selector/>
        </div>
      </div>
    </>
    );
  }
}
