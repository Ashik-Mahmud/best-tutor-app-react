import React from "react";
import styled from "styled-components";

const Review = () => {
  return (
    <ReviewContainer className="review">
      <p>
        Sir, I am really happy to stay of with you. you are the best teacher I
        ever seen my life. so Thanks sir Your understandable knowledge is
        awesome and awesome.
      </p>
      <div className="reviewer">
        <img
          width={80}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfF6nBhidhIzL330CYtg70I8tpDBGJ2YjBPnE9D9gY0iLmGu563WBIab4KBexSDv7kG8&usqp=CAU"
          alt="reviewer"
        />
        <div className="details">
          <h4>Ashik Mahmud</h4>
          <small>Student, BUET University.</small>
        </div>
      </div>
    </ReviewContainer>
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
  }
`;
export default Review;
