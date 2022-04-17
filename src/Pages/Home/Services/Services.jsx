import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import useServices from "../../../Hooks/useServices";
import Service from "./Service/Service";

const Services = () => {
  const [services] = useServices();
  return (
    <section id="services">
      <ServicesContainer>
        <div className="container">
          <Fade bottom distance="20px">
            <div className="title">
              <h2>What will you get? {services.length}</h2>
              <span>get your suitable packages and enrolled.</span>
            </div>
          </Fade>
          <div className="services-content">
            {services.map((service) => (
              <Service key={service.id} {...service} />
            ))}
          </div>
        </div>
      </ServicesContainer>
    </section>
  );
};
const ServicesContainer = styled.section`
  position: relative;
  padding: 3rem 0rem;
  .title {
    margin: 2rem 0rem;
    span {
      font-size: 1rem;
      color: #555;
    }
  }
  .services-content {
    margin: 2rem 0rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 2rem;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 590px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default Services;
