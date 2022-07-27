import React, { Component } from "react";
import Slider from "react-slick";
import SchemaCard from "./SchemaCard";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <div>
        <h2> Single Item</h2>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <Slider {...settings}>
        <div className='card_total'>
          <img  src={this.props.img} alt="logo"/>
        <div className='card_compon'>
            <h2 className='title_compon'>{this.props.title}</h2>
            <hr/>
        <div className='item.compon'>
            <p>ItemCollection:<br></br>{this.props.itemCollection}</p>
            <p>Category:<br></br>{this.props.category}</p>
        </div>
        <div className='btn.compon'>
           <a href={this.props.link}>Explore</a>
        </div>
        </div>
        </div>
        </Slider>
      </div>
    );
  }
}