import {
  REGEX_ALPHABETIC,
  REGEX_ALPHANUMBER,
  REGEX_DECIMAL,
  REGEX_EMAIL,
  REGEX_ONLY_NUMBER,
  REGEX_ONLY_TEXT,
  REGEX_PASSWORD
} from './expressions';
import { validatorsI18n } from './i18n';
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
  return value && !REGEX_ONLY_TEXT.test(value)
    ? {
        id: 'textonly',
        message: validatorsI18n('textonly')
      }
    : undefined;
}

export function alphabetic(value?: ValueState<string>): ValidatorResult {
  return value && !REGEX_ALPHABETIC.test(value)
    ? {
        id: 'alphabetic',
        message: validatorsI18n('alphabetic')
      }
    : undefined;
}

export function alphanumber(value?: ValueState<string>): ValidatorResult {
  return value && !REGEX_ALPHANUMBER.test(value)
    ? {
        id: 'alphanumber',
        message: validatorsI18n('alphanumber')
      }
    : undefined;
}

export function onlyNumber(
  value?: ValueState<string | number>
): ValidatorResult {
  return value && !REGEX_ONLY_NUMBER.test(String(value))
    ? {
        id: 'onlyNumber',
        message: validatorsI18n('onlynumber')
      }
    : undefined;
}

export function email(value?: ValueState<string>): ValidatorResult {
  return value && !REGEX_EMAIL.test(value)
    ? {
        id: 'email',
        message: validatorsI18n('email')
      }
    : undefined;
}

export function password(value?: ValueState<string>): ValidatorResult {
  return value && !REGEX_PASSWORD.test(value)
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
            interpolators: { length: String(length) }
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
            interpolators: { length: String(length) }
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
            interpolators: { length: String(length) }
          })
        }
      : undefined;
  };
};

export function decimal(value?: ValueState<number>): ValidatorResult {
  return value && !REGEX_DECIMAL.test(String(value))
    ? {
        id: 'decimal',
        message: validatorsI18n('decimal')
      }
    : undefined;
}

export const minValue = (minValue: number): ValidatorFn<number> => {
  return (value) => {
    return value && value < minValue
      ? {
          id: 'minValue',
          message: validatorsI18n('minValue', {
            interpolators: { value: String(minValue) }
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
            interpolators: { value: String(maxValue) }
          })
        }
      : undefined;
  };
};

export const greaterThanValue = (baseValue: number): ValidatorFn<number> => {
  return (value) => {
    return value && value <= baseValue
      ? {
          id: 'greaterThanValue',
          message: validatorsI18n('greaterThanValue', {
            interpolators: { value: String(baseValue) }
          })
        }
      : undefined;
  };
};

export const greaterOrEqualsThanValue = (
  baseValue: number
): ValidatorFn<number> => {
  return (value) => {
    return value && value < baseValue
      ? {
          id: 'greaterOrEqualsThanValue',
          message: validatorsI18n('greaterOrEqualsThanValue', {
            interpolators: { value: String(baseValue) }
          })
        }
      : undefined;
  };
};

export const lessThanValue = (baseValue: number): ValidatorFn<number> => {
  return (value) => {
    return value && value >= baseValue
      ? {
          id: 'lessThanValue',
          message: validatorsI18n('lessThanValue', {
            interpolators: { value: String(baseValue) }
          })
        }
      : undefined;
  };
};

export const lessOrEqualsThanValue = (
  baseValue: number
): ValidatorFn<number> => {
  return (value) => {
    return value && value > baseValue
      ? {
          id: 'lessOrEqualsThanValue',
          message: validatorsI18n('lessOrEqualsThanValue', {
            interpolators: { value: String(baseValue) }
          })
        }
      : undefined;
  };
};
