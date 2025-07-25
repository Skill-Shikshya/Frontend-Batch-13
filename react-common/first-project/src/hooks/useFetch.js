import { useEffect, useState } from "react";
import { API_BASE_URL } from "../assets/constants/appConstants";

export function useFetch({
  url,
  initialData,
  runOnInit = true,
  method = "GET",
  headers = { "content-type": "Application/JSON" },
  body,
  onSuccess,
  onError,
}) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  async function getData(optionalBody) {
    try {
      setLoading(true);
      const res = await fetch(API_BASE_URL + url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body || optionalBody),
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      const data = await res.json();
      setData(data);
      onSuccess();
    } catch (error) {
      console.log(error);
      setError(error.message);
      onError();
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (runOnInit && method === "GET") {
      getData();
    }
  }, []);

  return [data, loading, error, getData];
}
