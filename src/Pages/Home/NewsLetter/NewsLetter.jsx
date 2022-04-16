import React from "react";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <div className="container">
        <div className="newsletter-content">
          <h1>Stay Up to Date</h1>
          <span>Ensure you don't give you span message </span>
          <form action="" className="form-wrapper">
            <div className="input-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email enter"
              />
              <button className="btn">Send</button>
            </div>
          </form>
        </div>
      </div>
    </NewsLetterContainer>
  );
};

const NewsLetterContainer = styled.div`
  position: relative;
  margin-top: 3rem;
  .newsletter-content {
    text-align: center;
    margin: 1rem 5rem;
    background-color: #fafaf9;
    margin-bottom: -13rem;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    z-index: 3;
    padding: 3rem;
    @media (max-width: 768px) {
      margin: 1rem 1rem;
      margin-bottom: -13rem;
      padding: 1rem;
    }
    .input-group {
      display: flex;
      align-items: stretch;
      background-color: #eaebea;
      padding: 0.4rem;
      max-width: 500px;
      margin: 1rem auto;
      border-radius: 50px;
      input {
        width: 100%;
        padding: 0.7rem;
        font-size: 1rem;
        font-family: var(--poppins);
        background: transparent;
        border: none;
        outline: none;
      }
      button {
        padding: 0rem 2rem;
      }
    }
  }
`;
export default NewsLetter;
