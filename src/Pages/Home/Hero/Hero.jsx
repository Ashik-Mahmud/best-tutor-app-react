import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
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
  padding: 5rem 0rem;
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
      }
      .btn {
        margin-top: 1rem;
      }
    }
    .hero-image {
      width: 50%;
    }
  }
`;

export default Hero;
