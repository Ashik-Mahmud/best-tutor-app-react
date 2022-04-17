import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";

const Blog = () => {
  return (
    <Fade bottom distance="30px">
      <BlogContainer>
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknCStbMFbCfZ4MGisC7Lz-Ypa1dAH833sqXPWMnOAU8Iwhl3PchZFN5sZ6Mgz9zWwYRk&usqp=CAU"
            alt="auth"
          />
        </div>
        <div className="detail">
          <h3>What's Authentication?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            soluta natus quas aut magnam necessitatibus doloremque eum. Minima
            doloremque corrupti eligendi odit numquam quia exercitationem
            deleniti blanditiis perspiciatis, maxime dicta.
          </p>{" "}
          <span className="colorize cursor-pointer">Read more</span>
        </div>
      </BlogContainer>
    </Fade>
  );
};

const BlogContainer = styled.div`
  position: relative;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  border-radius: 5px;
  .image {
    height: 200px;
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export default Blog;
