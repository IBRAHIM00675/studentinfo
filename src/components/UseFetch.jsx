import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // To prevent memory leaks

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        if (isMounted) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to avoid setting state after unmount
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
