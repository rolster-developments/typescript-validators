import {
  REGEX_ALPHABETIC,
  REGEX_ALPHANUMBER,
  REGEX_DECIMAL,
  REGEX_EMAIL,
  REGEX_NICKNAME,
  REGEX_ONLY_NUMBER,
  REGEX_ONLY_TEXT,
  REGEX_PASSWORD
} from './expressions';
import { validatorsI18n } from './i18n';
import { ValidatorFn, ValidatorResult, ValueState } from './types';

export function defined<T = any>(value?: ValueState<T>): ValidatorResult {
  return value != undefined && value != null
    ? undefined
    : {
        id: 'defined',
        data: {
          value: String(value)
        },
        message: validatorsI18n('defined')
      };
}

export function required<T = any>(value?: ValueState<T>): ValidatorResult {
  return value
    ? undefined
    : {
        id: 'required',
        data: {
          value: String(value)
        },
        message: validatorsI18n('required')
      };
}

export function checked(value?: ValueState<boolean>): ValidatorResult {
  return value
    ? undefined
    : {
        id: 'checked',
        data: {
          value: String(value)
        },
        message: validatorsI18n('checked')
      };
}

export function textonly(value?: ValueState<string>): ValidatorResult {
  return value && !REGEX_ONLY_TEXT.test(value)
    ? {
        id: 'textonly',
        data: {
          value: String(value)
        },
        message: validatorsI18n('textonly')
      }
    : undefined;
}

export function alphabetic(value?: ValueState<string>): ValidatorResult {
  return value && !REGEX_ALPHABETIC.test(value)
    ? {
        id: 'alphabetic',
        data: {
          value: String(value)
        },
        message: validatorsI18n('alphabetic')
      }
    : undefined;
}

export function alphanumber(value?: ValueState<string>): ValidatorResult {
  return value && !REGEX_ALPHANUMBER.test(value)
    ? {
        id: 'alphanumber',
        data: {
          value: String(value)
        },
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
        data: {
          value: String(value)
        },
        message: validatorsI18n('onlyNumber')
      }
    : undefined;
}

export function email(value?: ValueState<string>): ValidatorResult {
  return value && !REGEX_EMAIL.test(value)
    ? {
        id: 'email',
        data: {
          value: String(value)
        },
        message: validatorsI18n('email')
      }
    : undefined;
}

export function nickname(value?: ValueState<string>): ValidatorResult {
  return value && !REGEX_NICKNAME.test(value)
    ? {
        id: 'nickname',
        data: {
          value: String(value)
        },
        message: validatorsI18n('nickname')
      }
    : undefined;
}

export function password(value?: ValueState<string>): ValidatorResult {
  return value && !REGEX_PASSWORD.test(value)
    ? {
        id: 'password',
        data: {
          value: String(value)
        },
        message: validatorsI18n('password')
      }
    : undefined;
}

export const strReqlength = (length: number): ValidatorFn<string> => {
  return (value) => {
    return value && value.length !== length
      ? {
          id: 'reqlength',
          data: {
            length: String(length),
            value
          },
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
          data: {
            length: String(length),
            value
          },
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
          data: {
            length: String(length),
            value
          },
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
        data: {
          value: String(value)
        },
        message: validatorsI18n('decimal')
      }
    : undefined;
}

export const minValue = (minValue: number): ValidatorFn<number> => {
  return (value) => {
    return value && value < minValue
      ? {
          id: 'minValue',
          data: {
            minValue: String(minValue),
            value: String(value)
          },
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
          data: {
            maxValue: String(maxValue),
            value: String(value)
          },
          message: validatorsI18n('maxValue', {
            interpolators: { value: String(maxValue) }
          })
        }
      : undefined;
  };
};

export const greaterThanValue = (value: number): ValidatorFn<number> => {
  return (_value) => {
    return _value && _value <= value
      ? {
          id: 'greaterThanValue',
          data: {
            thanValue: String(value),
            value: String(_value)
          },
          message: validatorsI18n('greaterThanValue', {
            interpolators: { thanValue: String(value) }
          })
        }
      : undefined;
  };
};

export const greaterOrEqualsThanValue = (
  value: number
): ValidatorFn<number> => {
  return (_value) => {
    return _value && _value < value
      ? {
          id: 'greaterOrEqualsThanValue',
          data: {
            thanValue: String(value),
            value: String(_value)
          },
          message: validatorsI18n('greaterOrEqualsThanValue', {
            interpolators: { thanValue: String(value) }
          })
        }
      : undefined;
  };
};

export const lessThanValue = (value: number): ValidatorFn<number> => {
  return (_value) => {
    return _value && _value >= value
      ? {
          id: 'lessThanValue',
          data: {
            thanValue: String(value),
            value: String(_value)
          },
          message: validatorsI18n('lessThanValue', {
            interpolators: { thanValue: String(value) }
          })
        }
      : undefined;
  };
};

export const lessOrEqualsThanValue = (value: number): ValidatorFn<number> => {
  return (_value) => {
    return _value && _value > value
      ? {
          id: 'lessOrEqualsThanValue',
          data: {
            thanValue: String(value),
            value: String(_value)
          },
          message: validatorsI18n('lessOrEqualsThanValue', {
            interpolators: { thanValue: String(value) }
          })
        }
      : undefined;
  };
};
