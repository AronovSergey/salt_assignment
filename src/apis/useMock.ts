import { useCallback, useState } from 'react';

interface MockedDataResponse<T> {
  result?: T;
  loading: boolean;
  error?: string;
  executeRequest: () => void;
}

const useMock = <T>(mockedData: T, delay = 1000): MockedDataResponse<T> => {
  const [result, setResult] = useState<T | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const executeRequest = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setResult(mockedData);
      setLoading(false);
      setError(undefined);
    }, delay);
  }, [mockedData, delay]);

  return {
    result,
    loading,
    error,
    executeRequest,
  };
};

export default useMock;
