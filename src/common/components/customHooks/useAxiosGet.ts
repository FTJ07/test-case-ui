import axios from "axios";
import { message as Message } from "antd";
import { useState, useEffect } from "react";

const useAxiosGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) => setData(data))
      .catch(({ message }) => Message.error(message))
      .finally(() => setLoading(false));
  }, [url]);

  return [loading, data, setData];
};

export default useAxiosGet;
