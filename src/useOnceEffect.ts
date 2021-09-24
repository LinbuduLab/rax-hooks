import { useEffect, EffectCallback } from "rax";

export function useOnceEffect(effect: EffectCallback) {
  useEffect(effect, []);
}
