import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      console.log(e.request.status);
      setError(e.request.status);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
