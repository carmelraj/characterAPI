import { useState, useEffect } from "react";
import axios from "axios";
const UseAxios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // custom hookes for axios
  // This URL is the base url which will be use on all the request
  const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com",
  });

  //  interceptor for request
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // interceptor for response
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //  abort controller is created
  let controller = new AbortController();

  useEffect(() => {
    return () => controller?.abort(); // removing existing abort contrller or during unmount will abort it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async ({ url = "", method, data = {}, params = {} }) => {
    controller.abort();
    controller = new AbortController();
    setLoading(true);
    try {
      const result = await axiosInstance({
        url, // url of the reuest
        method, // method of the request
        data, // data which will get finaly
        params, // params for the page
        signal: controller.signal, // attaching a signal in all request
      });
      setData(result.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        // if any error in request cancelation will throw in this console
        console.error("Request cancelled", error.message);
      } else {
        // if any error in fetching will show in this console
        setError(error.response ? error.response.data : error.message);
      }
    } finally {
      setLoading(false); // hide the loader
    }
  };

  // reurning all the data,error,loading etc
  return { data, error, loading, fetchData };
};
export default UseAxios;
