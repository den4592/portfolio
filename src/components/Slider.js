import React from "react";
import Slider from "react-slick";
import clink_img from '../img/clink.png';
import secondway_studio_img from '../img/secondway_studio.png';
import ProjectsButton from "./styled/ProjectsButton";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    
};
  return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <h1>CLNK - Influencer Marketing Platform</h1>
            <img src={clink_img} alt="clink_img"/>
            <div className="project">
              <h3>(주)버즈비터즈</h3>
              <p><i className="fas fa-chevron-right"></i> 개발 기간:<span> 2020.01.01.~2020.01.01</span></p>
              <p><i className="fas fa-chevron-right"></i> 개발 스택:<span> HTML, CSS</span></p>
              <a href="https://c-lnk.com/"><ProjectsButton>Take a look</ProjectsButton></a>
            </div>
          </div>
          <div>
            <h1>SECONDWAY STUDIO - Lifestyle Multi-Channel Network</h1>
            <img src={secondway_studio_img} alt="secondway_studio_img"/>
            <div className="project">
              <h3>(주)버즈비터즈</h3>
              <p><i className="fas fa-chevron-right"></i> 개발 기간:<span> 2020.01.01.~2020.01.01</span></p>
              <p><i className="fas fa-chevron-right"></i> 개발 스택:<span> HTML, CSS</span></p>
              <a href="https://www.secondway.studio/"><ProjectsButton>Take a look</ProjectsButton></a>
            </div>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
 
  );
}