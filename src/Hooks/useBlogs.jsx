import axios from "axios";
import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("/blogs.json").then((res) => {
      setBlogs(res.data);
      setLoading(true);
    });
  }, []);
  return [blogs, loading];
};

export default useBlogs;
