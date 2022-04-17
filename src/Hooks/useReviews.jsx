import axios from "axios";
import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    await axios.get("/Reviews.json").then((res) => {
      setReviews(res.data);
    });
  };

  useEffect(() => {
    getReviews();
  }, []);

  return [reviews];
};

export default useReviews;
