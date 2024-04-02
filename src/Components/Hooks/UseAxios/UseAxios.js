import React, { useState, useEffect } from "react";
import axios from "axios";
const UseAxios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com",
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  let controller = new AbortController();

  useEffect(() => {
    return () => controller?.abort();
  }, []);

  const fetchData = async ({ url = "", method, data = {}, params = {} }) => {
    controller.abort();
    controller = new AbortController();
    setLoading(true);
    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        signal: controller.signal,
      });
      setData(result.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.error("Request cancelled", error.message);
      } else {
        setError(error.response ? error.response.data : error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData };
};
export default UseAxios;
