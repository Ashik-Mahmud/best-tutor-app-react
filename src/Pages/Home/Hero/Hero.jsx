import React from "react";
import {
  BsArrowDownRight,
  BsDiscord,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";
import { Fade } from "react-reveal";
import styled from "styled-components";
const Hero = () => {
  return (
    <section id="hero">
      <HeroContainer>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <Fade left distance="30px">
                <span>Get you best teacher from here</span>
                <h2>
                  Build Your <span className="colorize">better result</span>
                </h2>
                <p>
                  We will share you a very secret tips to make of your result
                  better than others from my 8 years of experiences
                </p>
                <a href="#services" className="btn">
                  Enrolled Now <BsArrowDownRight />
                </a>
              </Fade>
              <Fade top distance="30px">
                <div className="socials">
                  <a
                    title="Facebook"
                    target="_blank"
                    href="https://web.facebook.com/ashikmahmud187/"
                    rel="noreferrer"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    title="Twitter"
                    target="_blank"
                    href="https://twitter.com/AshikMa36093377"
                    rel="noreferrer"
                  >
                    <BsTwitter />
                  </a>
                  <a title="Join Our Discord Group" target="_blank" href="/">
                    <BsDiscord />
                  </a>
                </div>
              </Fade>
            </div>
            <Fade right distance="30px">
              <div className="hero-image">
                <img
                  src="https://favtutor.com/resources/images/banner_front.png"
                  alt="heroImage"
                />
              </div>
            </Fade>
          </div>
        </div>
      </HeroContainer>
    </section>
  );
};

const HeroContainer = styled.section`
  position: relative;
  background-color: #fffbf0;
  padding: 6rem 0rem;
  .hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .hero-text {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
      h2 {
        font-size: 4rem;
        line-height: 1.3;
        @media (max-width: 1047px) {
          font-size: 2rem;
        }
      }
      .btn {
        margin-top: 1rem;
      }
      .socials {
        position: absolute;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 1rem 0rem;
        right: 0%;
        z-index: 1;
        top: 50%;
        flex-direction: column;
        @media (max-width: 600px) {
          position: relative;
          flex-direction: row;
        }
        a {
          width: 40px;
          height: 40px;
          border: 1px solid var(--primary-color);
          color: var(--accent-color);
          background-color: var(--primary-color);
          border-radius: 50%;
          display: grid;
          place-items: center;
        }
      }
    }
    .hero-image {
      width: 50%;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .hero-text {
        width: 100%;
        margin-bottom: 3rem;
        h2 {
          font-size: 3rem;
        }
      }
      .hero-image {
        width: 100%;
      }
    }
  }
`;

export default Hero;
