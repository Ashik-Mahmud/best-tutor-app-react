import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const getServices = async () => {
    await axios.get("/data.json").then((res) => {
      setServices(res.data);
      setLoading(true);
    });
  };

  useEffect(() => {
    getServices();
  }, []);

  return [services, loading];
};

export default useServices;
