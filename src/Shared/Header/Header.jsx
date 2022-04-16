import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  return (
    <NavBar>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <GiTeacher /> Best <span className="colorize">Tutor</span>
          </Link>
          <div className="primary-menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
            </ul>
          </div>
          <div className="btn-group">
            <button className="btn d-flex">
              <AiOutlineLogin /> Login
            </button>
          </div>
          <div className="menu-icon">
            <BsGrid />
          </div>
        </nav>
      </div>
    </NavBar>
  );
};

const NavBar = styled.header`
  position: relative;
  padding: 1rem 0rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .logo {
    font-size: 1.3rem;
    font-weight: bold;
    font-variant: small-caps;
    color: var(--secondary-color);
  }
  .primary-menu {
    position: relative;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      a {
        color: var(--secondary-color);
        font-size: 1.1rem;
        &.active {
          color: var(--primary-color);
        }
      }
    }
  }
  .menu-icon {
    cursor: pointer;
    font-size: 1.1rem;
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
export default Header;
