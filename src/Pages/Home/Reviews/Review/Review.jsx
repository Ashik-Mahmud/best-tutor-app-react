import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";

const Review = ({ text, image, name, school }) => {
  return (
    <Fade bottom distance="20px">
      <ReviewContainer className="review">
        <p>{text}</p>
        <div className="reviewer">
          <img width={80} src={image} alt={name} />
          <div className="details">
            <h4>{name}</h4>
            <small>Student, {school}.</small>
          </div>
        </div>
      </ReviewContainer>
    </Fade>
  );
};
const ReviewContainer = styled.div`
  position: relative;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  p {
    font-size: 0.9rem;
    line-height: 1.7;
    margin: 0.4rem 0rem;
  }
  .reviewer {
    margin: 1rem 0rem;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #ccc;
  }
`;
export default Review;
