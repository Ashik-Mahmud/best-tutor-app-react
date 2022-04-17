import React from "react";
import styled from "styled-components";
import Blog from "./Blog/Blog";

const Blogs = () => {
  return (
    <BlogsContainer>
      <div className="container">
        <div className="title">
          <h1>BLogs</h1>
          <p>read blog and make your knowledge wider.</p>
        </div>
        <div className="blogs-content">
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </BlogsContainer>
  );
};
const BlogsContainer = styled.section`
  position: relative;
  padding: 2rem 0rem;
  .blogs-content {
    margin: 2rem 0rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;
  }
`;
export default Blogs;
