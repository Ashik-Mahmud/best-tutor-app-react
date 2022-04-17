import React from "react";
import { BsCheckAll } from "react-icons/bs";
import { Fade } from "react-reveal";
import styled from "styled-components";
const Service = () => {
  return (
    <Fade bottom distance="30px">
      <ServiceCard>
        <div className="image">
          <img
            src="https://empowering-teachers.eu/wp-content/themes/yootheme/cache/home-banner-2-d0161e86.jpeg"
            alt="img"
          />
        </div>
        <div className="details">
          <div className="inner-details">
            <div>
              <h3>Tech HSC student</h3>
              <span className="colorize">400/month</span>
            </div>
            <div className="batch" title="Batch">
              6th Batch
            </div>
          </div>
          <div className="btn-group">
            <button className="btn">View Details</button>
            <button className="d-flex btn">
              Enrolled <BsCheckAll />
            </button>
          </div>
        </div>
      </ServiceCard>
    </Fade>
  );
};

const ServiceCard = styled.div`
  position: relative;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.5s ease;
  &:hover {
    transform: translateY(-5px);
  }
  .image {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 0.5rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .details {
    position: relative;
    .inner-details {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.4rem 0rem;
      span {
        font-size: 0.9rem;
        margin: 0.2rem 0rem;
      }
      .batch {
        background: #fffbf1;
        color: var(--secondary-color);
        display: grid;
        place-items: center;
        border-radius: 10%;
        font-size: 0.8rem;
        padding: 0.2rem 0.4rem;
      }
    }
    .btn-group {
      display: flex;
      gap: 0.5rem;
      margin: 0.3rem 0rem;
      button {
        border-radius: 4px;
        font-size: 0.8rem;
        padding: 0.4rem 1rem;
        &:first-child {
          background-color: transparent;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }
      }
    }
  }
`;
export default Service;
