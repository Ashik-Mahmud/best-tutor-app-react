import React, { useState } from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";

const Blog = ({ title, image, desc }) => {
  const [bigText, setBigText] = useState(false);
  return (
    <Fade bottom distance="30px">
      <BlogContainer>
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="detail">
          <h3>{title}</h3>
          <p>
            {desc?.length > 300 ? (
              <>
                {bigText ? desc + " " : desc.slice(0, 300)} {"  "}
                <span
                  className="colorize cursor-pointer"
                  onClick={() => setBigText((prev) => !prev)}
                >
                  {bigText ? "See Less" : "See More"}
                </span>
              </>
            ) : (
              desc
            )}
          </p>
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
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    color: #777;
    line-height: 1.7;
    text-align: justify;
  }
`;
export default Blog;
