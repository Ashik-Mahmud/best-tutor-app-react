import React from "react";
import { BsCreditCard2Back } from "react-icons/bs";
import styled from "styled-components";
import Service from "../Home/Services/Service/Service";
const CheckOut = () => {
  return (
    <CheckOutContainer>
      <div className="container">
        <div className="title">
          <h1>Check out for </h1>
          <p>get check out to starting your new journey with this tutor.</p>
        </div>
        <div className="row">
          <div className="col">
            <h4>Edit You details</h4>
            <form action="/" className="form-wrapper">
              <div className="group">
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder="Name" />
                </div>{" "}
                <div className="input-group">
                  <label htmlFor="name">Email</label>
                  <input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="group">
                <div className="input-group">
                  <label htmlFor="name">Phone</label>
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="input-group">
                  <label htmlFor="Division">Guardian Number</label>
                  <input type="text" placeholder="Guardian Number" />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="4"
                  placeholder="Address"
                ></textarea>
              </div>
              <div className="input-group">
                <label htmlFor="Division">Transaction ID</label>
                <input type="text" placeholder="Transaction ID" />
                <small>
                  Put your transaction Id which one you get after payment.
                </small>
              </div>
            </form>
          </div>
          <div className="col">
            <p>You chosen -</p>
            <Service />
            <div className="checkout-info">
              <ul>
                <li>
                  <span>Bkash Personal</span>
                  <strong>0178452145</strong>
                </li>
                <li>
                  <span>Bkash Agent</span>
                  <strong>0178452145</strong>
                </li>
                <li>
                  <span>Nagad Account</span>
                  <strong>0178452145</strong>
                </li>
                <li>
                  <span>Dutch Bangla Bank</span>
                  <strong> 1234567891231</strong>
                </li>
              </ul>
            </div>
            <button className="btn d-flex">
              Send Purchase Request <BsCreditCard2Back />
            </button>
          </div>
        </div>
      </div>
    </CheckOutContainer>
  );
};
const CheckOutContainer = styled.section`
  position: relative;
  padding: 2rem 0rem;
  .title {
    padding: 0.4rem;
    background-color: #f8f8f8;
  }
  .row {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 1rem 0rem;

    .group {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      .input-group {
        width: 100%;
      }
    }
    .col {
      padding: 2rem;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
      border-radius: 5px;
      position: relative;
      width: 35%;
      p {
        margin: 0.6rem 0rem;
      }
      .btn {
        width: 100%;
        text-align: center;
        justify-content: center;
        border-radius: 5px;
      }
      .checkout-info {
        margin: 1rem 0rem;
        margin-bottom: 2rem;
        ul {
          position: relative;

          li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
    .col:first-child {
      width: 60%;
      position: relative;
      padding: 2rem;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
      border-radius: 5px;
      .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        position: relative;
        margin-bottom: 0.5rem;
        input,
        textarea {
          padding: 0.7rem;
          border: 1px solid #ccc;
          outline: none;
          font-size: 1rem;
          font-family: var(--poppins);
          border-radius: 5px;
          width: 100%;
        }
      }
    }
  }
`;
export default CheckOut;
