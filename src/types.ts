export type FunctionType<
  Arg = unknown,
  Return = unknown,
  PromiseType = false
> = (...arg: Arg[]) => PromiseType extends true ? Promise<Return> : Return;
