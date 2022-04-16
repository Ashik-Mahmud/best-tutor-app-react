import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BsGrid, BsGrid1X2 } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  const [isNav, setIsNav] = useState(false);
  return (
    <NavBar>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <GiTeacher /> Best <span className="colorize">Tutor</span>
          </Link>
          <div className={`primary-menu ${isNav && "active"}`}>
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
          <div className="menu-icon" onClick={() => setIsNav((prev) => !prev)}>
            {isNav ? <BsGrid1X2 /> : <BsGrid />}
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

    /* for responsive  */
    @media (max-width: 768px) {
      position: fixed;
      left: -100%;
      top: 0%;
      width: 50%;
      background-color: #ffffffc9;
      height: 100%;
      z-index: 2;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
      backdrop-filter: blur(4px);
      padding: 3rem;
      transition: all 0.5s ease;
      &.active {
        left: 0%;
      }
      ul {
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
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
