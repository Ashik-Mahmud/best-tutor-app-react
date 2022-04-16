import React from "react";
import {
  BsArrowDownRight,
  BsDiscord,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";
import styled from "styled-components";
const Hero = () => {
  return (
    <section id="hero">
      <HeroContainer>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span>Get you best teacher from here</span>
              <h2>
                Build Your <span className="colorize">better result</span>
              </h2>
              <p>
                We will share you a very secret tips to make of your result
                better than others from my 8 years of experiences
              </p>
              <button className="btn">
                Enrolled Now <BsArrowDownRight />
              </button>
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
            <div className="hero-image">
              <img
                src="https://favtutor.com/resources/images/banner_front.png"
                alt="heroImage"
              />
            </div>
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
        top: 50%;
        flex-direction: column;
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
