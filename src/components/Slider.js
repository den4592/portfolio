import React from "react";
import Slider from "react-slick";
import clink_img from "../img/clink.png";
import weather_app_img from "../img/weather-app.png";
import portfolio_img from "../img/portfolio.png";
import todo_app_img from "../img/todo-app.png";
import secondway_studio_img from "../img/secondway_studio.png";
import ProjectsButton from "./styled/ProjectsButton";
import Fade from "react-reveal/Fade";

export default function SimpleSlider() {
  const settings = {
    slide: "div",
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Fade>
        <Slider {...settings}>
          <div>
            <h1>CLNK - Marketing Platform for Influencers</h1>
            <img src={clink_img} alt="clink_img" />
            <div className="project">
              <h3>(주)버즈비터즈</h3>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span> 클링크 웹 페이지</span>
              </p>
              <p>
                <i className="fas fa-chevron-right"></i> 개발 스택:
                <span> HTML, CSS, JavaScript</span>
              </p>
              <a href="https://c-lnk.com/">
                <ProjectsButton>Take a look</ProjectsButton>
              </a>
            </div>
          </div>
          <div>
            <h1>SECONDWAY STUDIO - Lifestyle Multi-Channel Network</h1>
            <img src={secondway_studio_img} alt="secondway_studio_img" />
            <div className="project">
              <h3>(주)버즈비터즈</h3>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span> 세컨드웨이 스튜디오 웹 페이지</span>
              </p>
              <p>
                <i className="fas fa-chevron-right"></i> 개발 스택:
                <span> HTML, CSS, JavaScript</span>
              </p>
              <a href="https://www.secondway.studio/">
                <ProjectsButton>Take a look</ProjectsButton>
              </a>
            </div>
          </div>
          <div>
            <h1>Weather App using OpenWeatherMap Api</h1>
            <img src={weather_app_img} alt="weather_app_img" />
            <div className="project">
              <h3>Toy Project</h3>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span> Weather App</span>
              </p>
              <p>
                <i className="fas fa-chevron-right"></i> 개발 스택:
                <span> React, Material UI, Weather Api</span>
              </p>
              <a href="https://github.com/den4592/react-weather-app">
                <ProjectsButton>Take a look</ProjectsButton>
              </a>
            </div>
          </div>
          <div>
            <h1>TODO App using Json Server with CRUD Method</h1>
            <img src={todo_app_img} alt="todo_app_img" />
            <div className="project">
              <h3>Toy Project</h3>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span> Todo List</span>
              </p>
              <p>
                <i className="fas fa-chevron-right"></i> 개발 스택:
                <span> React, Material UI, JSON Server</span>
              </p>
              <a href="https://github.com/den4592/material-ui-todo">
                <ProjectsButton>Take a look</ProjectsButton>
              </a>
            </div>
          </div>
          <div>
            <h1>Portfolio Web Site</h1>
            <img src={portfolio_img} alt="portfolio_img" />
            <div className="project">
              <h3>Personal Web Site</h3>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span> Portfolio</span>
              </p>
              <p>
                <i className="fas fa-chevron-right"></i> 개발 스택:
                <span> React, styled-components</span>
              </p>
              <a href="https://denill-port.netlify.app/">
                <ProjectsButton>Take a look</ProjectsButton>
              </a>
            </div>
          </div>
        </Slider>
      </Fade>
    </div>
  );
}
