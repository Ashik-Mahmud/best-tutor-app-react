import React from "react";
import styled from "styled-components";

const Blogs = () => {
  return (
    <BlogsContainer>
      <div className="container">
        <h1>BLogs</h1>
      </div>
    </BlogsContainer>
  );
};
const BlogsContainer = styled.section`
  position: relative;
  padding: 2rem 0rem;
`;
export default Blogs;
