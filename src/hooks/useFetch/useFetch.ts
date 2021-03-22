import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

interface UseFetchProps {
  url: string;
}

export default function useFetch({url}: UseFetchProps) {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const clear = () => setResponse([]);

  const fetch = useCallback(async () => {
    setLoading(true);
    const {data} = await axios.get(url);
    setResponse(data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {response, loading, clear, refetch: fetch};
}
