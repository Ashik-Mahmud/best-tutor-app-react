import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsCreditCard2Back } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";
import useServiceDetail from "../../Hooks/useServiceDetail";
import Service from "../Home/Services/Service/Service";
import { auth } from "./../../Firebase/Firebase.config";
const CheckOut = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const [serviceDetail] = useServiceDetail(serviceId);

  /* handle form check out data  */
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [address, setAddress] = useState("");

  const formRef = useRef(null);
  const handleCheckOutForm = () => {
    if (!auth?.currentUser?.email) {
      if (!email) return toast.error("Email field is required.");
    }
    if (!phoneNumber) return toast.error("Phone number is required.");
    if (!address) return toast.error("Address field is required.");
    if (!transactionId) return toast.error("Transaction Id Must Required");
    if (transactionId.length < 11)
      return toast.error("Transaction Id must need 11 chars");

    swal(
      `Purchase Confirmed! ${auth?.currentUser?.displayName}`,
      `We get your Transaction ${transactionId} and all the information you will touch you soon by your ${
        email || auth?.currentUser?.email
      } `,
      "success"
    ).then(() => {
      formRef.current.reset();
      navigate("/blogs");
    });
  };

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
            <form action="/" className="form-wrapper" ref={formRef}>
              <div className="group">
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    readOnly={auth?.currentUser?.displayName ? true : false}
                    value={auth?.currentUser?.displayName || ""}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="name">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    readOnly={auth?.currentUser?.email ? true : false}
                    value={
                      auth?.currentUser?.email
                        ? auth?.currentUser?.email
                        : email
                    }
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="group">
                <div className="input-group">
                  <label htmlFor="name">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    readOnly={auth?.currentUser?.phoneNumber ? true : false}
                    value={
                      auth?.currentUser?.phoneNumber
                        ? auth?.currentUser?.phoneNumber
                        : phoneNumber
                    }
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="Division">Guardian Number (optional)</label>
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
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
              <div className="input-group">
                <label htmlFor="Division">Transaction ID</label>
                <input
                  type="text"
                  placeholder="Transaction ID"
                  onChange={(e) => setTransactionId(e.target.value)}
                />
                <small>
                  Put your transaction Id which one you get after payment.
                </small>
              </div>
            </form>
          </div>
          <div className="col">
            <p>You chosen -</p>
            <Service {...serviceDetail} purchase />
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
            <button className="btn d-flex" onClick={handleCheckOutForm}>
              Confirm Purchase <BsCreditCard2Back />
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
  input[readonly] {
    background-color: #eee;
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
      @media (max-width: 400px) {
        flex-direction: column;
      }
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
    @media (max-width: 800px) {
      flex-direction: column;
      .col,
      .col:first-child {
        width: 100%;
      }
    }
  }
`;
export default CheckOut;
