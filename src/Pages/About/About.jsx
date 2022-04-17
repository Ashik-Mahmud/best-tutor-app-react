import React from "react";
import {
  BsBoxArrowInDownRight,
  BsCloudDownload,
  BsDiscord,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";
import { Fade, Zoom } from "react-reveal";
import styled from "styled-components";
const About = () => {
  return (
    <AboutContainer>
      <div className="container">
        <div className="about-content">
          <Fade left distance="40px">
            <div className="about-text">
              <h2>Who am I?</h2>
              <h3>
                I am <span className="colorize">Ashik Mahmud</span> from Rangpur
                Bangladesh
              </h3>
              <p>
                Hey Guys! It's long day just I spent to make me the professional
                developer. Now I am learning web developing from
                <strong>Programming Hero Community</strong> and I think If I do
                hard work here consistently one day I can see of mine as a
                Confident Developer. Now this is the time to hard working and
                take challenge and make me the professional for future and make
                my goal comes true.
              </p>
              <div className="btn-group d-flex gap">
                <button className="btn d-flex">
                  Download Cv <BsCloudDownload />
                </button>
                <a
                  href="https://dev-ashikmahmud.netlify.app/#portfolios"
                  target="_blank"
                  className="btn d-flex"
                  rel="noreferrer"
                >
                  Portfolio <BsBoxArrowInDownRight />
                </a>
              </div>
              <div className="socials">
                <a title="Facebook" target="_blank" href="/">
                  <BsFacebook />
                </a>
                <a title="Twitter" target="_blank" href="/">
                  <BsTwitter />
                </a>
                <a title="Join Our Discord Group" target="_blank" href="/">
                  <BsDiscord />
                </a>
              </div>
            </div>
          </Fade>
          <Zoom right>
            <div className="about-image">
              <img
                src="https://www.iwebsoftsolutions.com/images/about/about-image.png"
                alt="best about"
              />
              {/* https://i.ibb.co/sRVs8RW/Snapchat-332267317.jpg */}
            </div>
          </Zoom>
        </div>
      </div>
    </AboutContainer>
  );
};
const AboutContainer = styled.section`
  position: relative;
  padding: 4rem 0rem;
  .socials {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0rem;

    a {
      width: 40px;
      height: 40px;
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
      background-color: var(--accent-color);
      border-radius: 50% !important;
      display: grid;
      place-items: center;
      transition: all 0.4s ease;
      &:hover {
        transform: scale(0.95);
        background-color: var(--primary-color);
        color: var(--accent-color);
      }
    }
  }
  .about-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .about-text {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h2 {
        font-size: 2rem;
      }
      p {
        line-height: 1.7;
        color: #555;
      }
      button,
      a {
        border-radius: 5px;
      }
    }
    .about-image {
      position: relative;
      width: 40%;
      height: 600px;

      overflow: hidden;
      padding: 0.4rem;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        object-position: center;
        border-radius: 5px;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .about-text {
        order: 2;
        width: 100%;
        text-align: center;
        .btn-group {
          text-align: center;
          margin: auto;
          flex-wrap: wrap;
        }
        p {
          text-align: justify;
        }
      }
      .about-image {
        order: 1;
        width: 100%;
        height: auto;
      }
    }
  }
`;

export default About;
