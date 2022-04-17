import React from "react";
import { GiTeacher } from "react-icons/gi";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import FooterImage from "../../Assets/Images/footer.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer">
      <img
        src={FooterImage}
        style={{ width: "100%", height: "300px", marginBottom: "-1rem" }}
        alt=""
      />
      <Fade bottom distance="20px">
        <FooterContainer>
          <div className="container">
            <div className="footer-content">
              <p>&copy; Copyright by {new Date().getFullYear()}</p>
              <Link to="/" className="d-flex">
                <div className="icon">
                  <GiTeacher />
                </div>
                <p>
                  Best <span className="colorize">Tutor</span>
                </p>
              </Link>
              <ul className="ul">
                <li onClick={() => navigate("/about")}>About</li>
                <li>Terms & Policy</li>
                <li>Success</li>
                <li>Education</li>
              </ul>
            </div>
          </div>
        </FooterContainer>
      </Fade>
    </footer>
  );
};

const FooterContainer = styled.div`
  position: relative;
  background: #fff3d2;
  padding-bottom: 3rem;
  img {
    width: 100%;
    height: 100px;
    margin-bottom: -1rem;
  }
  .footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 600px) {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
      a {
        order: 1;
      }
      p {
        order: 2;
      }
      ul {
        order: 3;
      }
    }
    p {
      color: #888;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon {
        font-size: 3rem;
        color: var(--primary-color);
        margin-bottom: -20px;
      }
      p {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
    ul {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        color: #888;
        transition: all 0.5s ease;
        cursor: pointer;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default Footer;
