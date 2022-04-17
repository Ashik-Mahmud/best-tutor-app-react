import { useEffect, useState } from "react";
import useServices from "./useServices";

const useServiceDetail = (serviceId) => {
  const [serviceDetail, setServiceDetail] = useState({});
  const [services, loading] = useServices();
  useEffect(() => {
    const findService = services?.find(
      (service) => service.id === Number(serviceId)
    );
    setServiceDetail(findService);
  }, [services, serviceId]);

  return [serviceDetail, loading];
};

export default useServiceDetail;
