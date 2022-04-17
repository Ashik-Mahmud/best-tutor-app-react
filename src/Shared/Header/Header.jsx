import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {
  AiOutlineCloseCircle,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { BsGrid, BsGrid1X2 } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../App";
import { auth } from "../../Firebase/Firebase.config";
const Header = () => {
  const { isAuth, user, setIsAuth } = useContext(AuthContext);
  const [isNav, setIsNav] = useState(false);
  const navigate = useNavigate();

  /* log out user */
  const LogOut = () => {
    signOut(auth).then(() => {
      toast.success("Log out successfully done.");
      setIsAuth(false);
      navigate("/sign-in");
    });
  };

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
            {isAuth ? (
              <>
                <div className="profile">
                  <img
                    width={50}
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                    }
                    alt={user?.displayName}
                  />
                  <div className="profile-content d-flex gap">
                    <div>
                      <span className="">
                        {user?.displayName ? (
                          <>
                            <span className="d-flex">
                              {user?.displayName}{" "}
                              {user?.emailVerified ? (
                                <small
                                  className="verify-status"
                                  title="Verified"
                                >
                                  <FiCheckCircle />
                                </small>
                              ) : (
                                <small
                                  className="notVerify-status"
                                  title="Not Verified"
                                >
                                  <AiOutlineCloseCircle />
                                </small>
                              )}
                            </span>
                          </>
                        ) : (
                          <small className="d-flex gap not-name">
                            Not Available
                            <span
                              title="Reload"
                              className="colorize cursor-pointer "
                              onClick={() => window.location.reload()}
                            >
                              <BiRefresh />
                            </span>
                          </small>
                        )}
                      </span>
                      <small title={user?.email}>
                        {user?.email
                          ? user?.email.slice(0, 10) + "..."
                          : "not available"}
                      </small>
                    </div>
                    <button className="btn logOut d-flex" onClick={LogOut}>
                      <AiOutlineLogout /> Log out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <button
                className="btn d-flex"
                onClick={() => navigate("/sign-in")}
              >
                <AiOutlineLogin /> Login
              </button>
            )}
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
  .logOut {
    background: var(--primary-color-alt);
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
  .btn-group {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .profile {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    .not-name {
      display: flex;
      align-items: center;
      span {
        font-size: 1rem;
      }
    }
    .verify-status,
    .notVerify-status {
      font-size: 0.8rem;
      display: inline;
      color: var(--primary-color);
      cursor: pointer;
    }
    .notVerify-status {
      color: var(--primary-color-alt);
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 3px solid #ccc;
      overflow: hidden;
    }
    span {
      display: block;
    }
    small {
      display: block;
    }

    .profile-content {
      position: relative;
      gap: 1rem;
    }
    @media (max-width: 530px) {
      img {
        cursor: pointer;
      }
      .profile-content {
        position: absolute;
        width: 200px;
        padding: 1rem 0.5rem;
        text-align: center;
        background-color: #f9f9f9;
        flex-direction: column;
        z-index: 4;
        border-radius: 10px;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(10px);
        opacity: 0;
        pointer-events: none;
        transition: all 0.4s ease;
      }
    }
    &:hover .profile-content {
      opacity: 1;
      transform: translateX(-50%) translateY(0px);
      pointer-events: all;
    }
  }
`;
export default Header;
