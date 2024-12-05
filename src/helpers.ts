import {
  regAlphabetic,
  regAlphanumber,
  regDecimal,
  regEmail,
  regOnlyNumber,
  regOnlyText,
  regPassword
} from './expressions';
import validatorsI18n from './i18n';
import { ValidatorFn, ValidatorResult, ValueState } from './types';

export function defined<T = any>(value?: ValueState<T>): ValidatorResult {
  return !!value
    ? undefined
    : {
        id: 'defined',
        message: validatorsI18n('defined')
      };
}

export function required<T = any>(value?: ValueState<T>): ValidatorResult {
  return value
    ? undefined
    : {
        id: 'required',
        message: validatorsI18n('required')
      };
}

export function textonly(value?: ValueState<string>): ValidatorResult {
  return value && !regOnlyText.test(value)
    ? {
        id: 'textonly',
        message: validatorsI18n('textonly')
      }
    : undefined;
}

export function alphabetic(value?: ValueState<string>): ValidatorResult {
  return value && !regAlphabetic.test(value)
    ? {
        id: 'alphabetic',
        message: validatorsI18n('alphabetic')
      }
    : undefined;
}

export function alphanumber(value?: ValueState<string>): ValidatorResult {
  return value && !regAlphanumber.test(value)
    ? {
        id: 'alphanumber',
        message: validatorsI18n('alphanumber')
      }
    : undefined;
}

export function onlyNumber(
  value?: ValueState<string | number>
): ValidatorResult {
  return value && !regOnlyNumber.test(String(value))
    ? {
        id: 'onlyNumber',
        message: validatorsI18n('onlynumber')
      }
    : undefined;
}

export function decimal(value?: ValueState<number>): ValidatorResult {
  return value && !regDecimal.test(String(value))
    ? {
        id: 'decimal',
        message: validatorsI18n('decimal')
      }
    : undefined;
}

export function email(value?: ValueState<string>): ValidatorResult {
  return value && !regEmail.test(value)
    ? {
        id: 'email',
        message: validatorsI18n('email')
      }
    : undefined;
}

export function password(value?: ValueState<string>): ValidatorResult {
  return value && !regPassword.test(value)
    ? {
        id: 'password',
        message: validatorsI18n('password')
      }
    : undefined;
}

export const strReqlength = (length: number): ValidatorFn<string> => {
  return (value) => {
    return value && value.length !== length
      ? {
          id: 'reqlength',
          message: validatorsI18n('reqlength', {
            interpolators: {
              length: String(length)
            }
          })
        }
      : undefined;
  };
};

export const strMinlength = (length: number): ValidatorFn<string> => {
  return (value) => {
    return value && value.length < length
      ? {
          id: 'strMinlength',
          message: validatorsI18n('strMinlength', {
            interpolators: {
              length: String(length)
            }
          })
        }
      : undefined;
  };
};

export const strMaxlength = (length: number): ValidatorFn<string> => {
  return (value) => {
    return value && value.length > length
      ? {
          id: 'strMaxlength',
          message: validatorsI18n('strMaxlength', {
            interpolators: {
              length: String(length)
            }
          })
        }
      : undefined;
  };
};

export const minValue = (minValue: number): ValidatorFn<number> => {
  return (value) => {
    return value && value < minValue
      ? {
          id: 'minValue',
          message: validatorsI18n('minValue', {
            interpolators: {
              value: String(minValue)
            }
          })
        }
      : undefined;
  };
};

export const maxValue = (maxValue: number): ValidatorFn<number> => {
  return (value) => {
    return value && value > maxValue
      ? {
          id: 'maxValue',
          message: validatorsI18n('maxValue', {
            interpolators: {
              value: String(maxValue)
            }
          })
        }
      : undefined;
  };
};
