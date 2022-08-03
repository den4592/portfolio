import React, { useState } from "react";
import profile from "../img/profile-img.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <Fade top>
          <div className="about-main-text">
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "500",
                textAlign: "center",
                color: "white",
                paddingBottom: "3rem",
              }}
            >
              About
              <hr
                style={{
                  width: "5rem",
                  margin: "0 auto",
                  border: "1px solid #74FC3B",
                }}
              />
            </h1>
          </div>
        </Fade>
        <div className="about-personal-details">
          <div className="about">
            <Fade top>
              <div className="about-me">
                <img src={profile} alt="profile_img" />
                <span></span>
              </div>
              <div className="about-me-text">
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                    paddingTop: "1rem",
                  }}
                >
                  안녕하세요!
                </h1>
                <p style={{ color: "white", lineHeight: "1.8rem" }}>
                  <i
                    className="fas fa-chevron-right"
                    style={{ color: "#E52885", marginTop: "1.5rem" }}
                  ></i>{" "}
                  저는 Junior 웹 개발자 일리야입니다. React를 기반으로 Front-End
                  웹 개발을 하고 있습니다. 컴퓨터공학 전공이며, 개인 프로젝트
                  뿐만 아닌 팀원들과의 협동 프로젝트에 대한 커뮤니케이션 능력
                  또한 좋습니다.
                </p>
              </div>
            </Fade>
          </div>
          <Fade top>
            <div className="personal-details">
              <h1
                style={{
                  color: "white",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
              >
                Personal Details
              </h1>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span>Junior Web Developer</span> Status
              </p>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span>중앙대학교(컴퓨터공학부)</span> Education
              </p>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span> 1997.11.02</span> Date of Birth
              </p>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span>den4592@naver.com </span> Email
              </p>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span> 010-8561-1536</span> Phone-Num
              </p>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span>서울시 마포구 상암동 거주</span> Address
              </p>
              <p>
                <i className="fas fa-chevron-right"></i>
                <span>정보처리기사</span> Certifications
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
