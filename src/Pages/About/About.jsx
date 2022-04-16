import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <div className="container">
        <h1>About</h1>
      </div>
    </AboutContainer>
  );
};
const AboutContainer = styled.section`
  position: relative;
  padding: 3rem 0rem;
`;

export default About;
