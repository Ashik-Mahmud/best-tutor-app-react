import React from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../Components/Loading/Loading";
import useServiceDetail from "../../Hooks/useServiceDetail";
const ServiceDetails = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();

  const [serviceDetail, loading] = useServiceDetail(serviceId);

  return (
    <ServiceDetailsContainer>
      <div className="container">
        <div className="card">
          {loading ? (
            <>
              {" "}
              <div className="card-header">
                <span className="cursor-pointer" onClick={() => navigate(-1)}>
                  <BsChevronDoubleLeft />
                </span>
                <h3>{serviceDetail?.name}</h3>
              </div>
              <div className="card-body">
                <div className="image">
                  <img src={serviceDetail?.image} alt={serviceDetail?.name} />
                </div>
                <div className="details">
                  <div className="inner-details">
                    <p className="colorize">
                      {serviceDetail?.price} taka per month
                    </p>
                    <p className="batch">Batch {serviceDetail?.batch}</p>
                    <div className="subject">
                      <span>Subject</span>
                      <ul>
                        {serviceDetail?.subject?.map((sub, ind) => (
                          <li key={sub + ind}>{sub}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="desc">{serviceDetail?.desc}</p>
                  <div className="checkout-btn">
                    <button
                      onClick={() => navigate(`/checkout/${serviceDetail?.id}`)}
                      className="btn"
                    >
                      Check Out Now
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </ServiceDetailsContainer>
  );
};

const ServiceDetailsContainer = styled.section`
  position: relative;
  .checkout-btn button {
    margin: 1rem 0rem;
    border-radius: 5px;
  }
  .card {
    padding: 1rem;
    position: relative;
    margin: 1rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    .card-header {
      display: flex;
      background-color: #f8f8f8;
      padding: 1rem;
      border-radius: 5px;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .card-body {
      position: relative;
      .image {
        height: 350px;
        width: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .details {
        margin: 1rem 0rem;
        position: relative;
        .inner-details {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          .batch {
            position: relative;
            border-radius: 4px;
            background-color: #f8f8f8;
            padding: 0.3rem;
          }
          .subject {
            display: flex;
            align-items: center;
            gap: 2rem;
            ul {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
              align-items: center;
              li {
                cursor: pointer;
                background: var(--primary-color);
                padding: 0.3rem 1rem;
                border-radius: 5px;
                color: var(--accent-color);
                font-size: 0.9rem;
              }
            }
          }
        }
        p.desc {
          line-height: 1.7;
          margin-top: 1.6rem;
          color: #777;
        }
      }
    }
  }
`;

export default ServiceDetails;
