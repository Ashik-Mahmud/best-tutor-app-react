import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    await axios.get("/data.json").then((res) => {
      setServices(res.data);
    });
  };

  useEffect(() => {
    getServices();
  }, []);

  return [services];
};

export default useServices;
