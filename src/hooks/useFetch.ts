import { useState, useEffect } from "react";

function useFetch(url: string) {
  const [data, setData] = useState(null); // state for data
  const [loading, setLoading] = useState(true); // state for loading
  const [error, setError] = useState(null); // state for error

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // dependency array with url

  return { data, loading, error };
}

export default useFetch;
