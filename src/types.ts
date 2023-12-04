export type ValueState<T = any> = T | undefined | null;

export interface ValidatorError<T = unknown> {
  id: string;
  message: string;
  data?: T;
}

export type ValidatorResult<T = any> = ValidatorError<T> | undefined;

export type ValidatorFn<T> = (value?: ValueState<T>) => ValidatorResult;
