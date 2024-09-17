import { useEffect, useState } from 'react';

interface ApiDTO<T> {
  data: T | undefined;
  isLoading: boolean;
  error: Error | undefined;
};

export const useFetch = <T>(url: URL): ApiDTO<T | undefined> => {
  const [state, setState] = useState<ApiDTO<T | undefined>>({ 
    data: undefined,
    isLoading: true,
    error: undefined
  });

  const fetchData = async (abortController: AbortController) => {
    try {
      setState(prevState => ({
        ...prevState,
        isLoading: true
      }));

      const res = await fetch(url.toString(), {
        signal: abortController.signal
      });

      const { results: data } = await res.json();

      setState(prevState => ({
        ...prevState,
        data: data,
        isLoading: false
      }));

    } catch (e: unknown) {
      setState(prevState => ({
        ...prevState,
        isLoading: false,
        error: e instanceof Error
          ? e.name !== 'AbortError'
            ? (e as Error)
            : undefined
          : new Error('Unknown error'), 
      }));
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    fetchData(abortController);

    return () => abortController.abort();
  }, [url.toString()]);


  return state;
};