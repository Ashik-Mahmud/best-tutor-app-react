import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination"; // import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import useReviews from "../../../Hooks/useReviews";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <ReviewsContainer>
      <div className="container">
        <Fade bottom distance="30px">
          <div className="title">
            <h2>What's students says?</h2>
            <span>feedback about of teacher which one teach them.</span>
          </div>
        </Fade>
        <div className="reviews-content">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <Review {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </ReviewsContainer>
  );
};

const ReviewsContainer = styled.section`
  position: relative;
  .reviews-content {
    margin: 2rem 0rem;
  }
`;

export default Reviews;
