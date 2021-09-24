import { useEffect, useState } from "rax";

export function usePromise(promise: Promise<unknown>) {
  const [error, setError] = useState<unknown>(null);
  const [result, setResult] = useState<unknown>(null);

  useEffect(() => {
    let canceled = false;

    promise
      .then((resolvedValue) => {
        if (!canceled) {
          setResult(resolvedValue);
        }
      })
      .catch((rejectedError) => {
        if (!canceled) {
          setError(rejectedError);
        }
      });

    return () => {
      canceled = true;
    };
  }, [promise]);

  return [result, error];
}
