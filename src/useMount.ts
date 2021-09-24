import { useEffect, EffectCallback } from "rax";

export function useMount(mountedFn: EffectCallback) {
  useEffect(mountedFn, []);
}
