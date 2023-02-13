import { useEffect, useState } from "react";

export default function useFetch<T = unknown>() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T>();
  useEffect(() => {
    fetch("https://shopapi.taherifard.ir/sliders")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res?.data);
        } else {
          setIsError(true);
        }
      })
      .catch((err) => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  });
  return {
    isLoading,
    isError,
    data,
  };
}
