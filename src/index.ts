import { ValidatorError, ValidatorFn, ValueState } from './types';

type Validates<T extends LiteralObject<ValueState>> = Partial<
  Record<keyof T, ValidatorFn<T>[]>
>;

type ValidateErrors = LiteralObject<ValidatorError[]>;

interface ValidateResult {
  errors: ValidateErrors;
  valid: boolean;
}

export const validate = <T extends LiteralObject<ValueState>>(
  object: T,
  validates: Validates<T>
): ValidateResult => {
  return Object.keys(validates).reduce<ValidateResult>(
    (currentResult, key) => {
      const validators = validates[key];

      const validatorErrors =
        validators?.reduce((errors, validator) => {
          const error = validator(object[key]);

          if (error) {
            errors.push(error);
          }

          return errors;
        }, [] as ValidatorError[]) || [];

      if (validatorErrors.length) {
        const errors: ValidateErrors = { ...currentResult.errors };
        errors[key] = validatorErrors;

        return {
          ...currentResult,
          errors,
          valid: false
        };
      }

      return currentResult;
    },
    { valid: true, errors: {} }
  );
};

export * from './types';
