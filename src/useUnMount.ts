import { useEffect, useRef, EffectCallback } from "rax";

export function useUnmount(unmountFn: EffectCallback) {
  const unmountFnRef = useRef(unmountFn);
  unmountFnRef.current = unmountFn;
  useEffect(() => {
    return () => {
      typeof unmountFnRef.current === "function"
        ? unmountFnRef.current()
        : void 0;
    };
  }, []);
}
