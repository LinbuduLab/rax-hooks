import { useEffect, useRef } from "rax";
import { FunctionType } from "./types";

function clearTimer(id: number | null | undefined) {
  if (id != null) clearTimeout(id);
}

export function useTimeout(fn: FunctionType, delay: number) {
  const ref = useRef<{ handler: FunctionType; timer: number | null }>();

  // Update to the latest function.
  useEffect(() => {
    ref.current!.handler = fn;
  }, [fn]);

  useEffect(() => {
    // Clear before timer if delay time updated
    clearTimer(ref.current?.timer);
    if (typeof delay === "number") {
      // @ts-ignore
      ref.current.timer = setTimeout(() => ref.current.handler(), delay);
      return () => clearTimer(ref.current?.timer);
    }
  }, [delay]);
}
