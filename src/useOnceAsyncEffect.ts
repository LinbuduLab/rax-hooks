import { useEffect, EffectCallback } from "rax";

type DestroyFunc = (arg: unknown) => void;

export function useOnceAsyncEffect(
  effect: EffectCallback,
  destroy?: DestroyFunc
) {
  const hasDestory = destroy && typeof destroy === "function";

  useEffect(() => {
    let effectReturnVal: unknown;

    const effectReturnPromise = effect();

    Promise.resolve(effectReturnPromise).then((value) => {
      effectReturnVal = value;
    });

    return () => {
      hasDestory ? destroy(effectReturnVal) : void 0;
    };
  }, []);
}
