import { useEffect, EffectCallback, DependencyList } from "rax";

type DestroyFunc = (arg: unknown) => void;

export function useAsyncEffect(
  effect: EffectCallback,
  destroy: DestroyFunc | undefined,
  inputs: DependencyList
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
  }, inputs);
}
