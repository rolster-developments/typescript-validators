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
import { ValidatorFn } from './types';

export const required: ValidatorFn<any> = (value) => {
  return value
    ? undefined
    : {
        id: 'required',
        message: validatorsI18n('required')
      };
};

export const textonly: ValidatorFn<any> = (value) => {
  return value && !regOnlyText.test(value)
    ? {
        id: 'textonly',
        message: validatorsI18n('textonly')
      }
    : undefined;
};

export const alphabetic: ValidatorFn<any> = (value) => {
  return value && !regAlphabetic.test(value)
    ? {
        id: 'alphabetic',
        message: validatorsI18n('alphabetic')
      }
    : undefined;
};

export const alphanumber: ValidatorFn<any> = (value) => {
  return value && !regAlphanumber.test(value)
    ? {
        id: 'alphanumber',
        message: validatorsI18n('alphanumber')
      }
    : undefined;
};

export const onlyNumber: ValidatorFn<any> = (value) => {
  return value && !regOnlyNumber.test(value)
    ? {
        id: 'onlyNumber',
        message: validatorsI18n('onlynumber')
      }
    : undefined;
};

export const decimal: ValidatorFn<any> = (value) => {
  return value && !regDecimal.test(value)
    ? {
        id: 'decimal',
        message: validatorsI18n('decimal')
      }
    : undefined;
};

export const email: ValidatorFn<any> = (value) => {
  return value && !regEmail.test(value)
    ? {
        id: 'email',
        message: validatorsI18n('email')
      }
    : undefined;
};

export const password: ValidatorFn<any> = (value) => {
  return value && !regPassword.test(value)
    ? {
        id: 'password',
        message: validatorsI18n('password')
      }
    : undefined;
};

export const strReqlength = (length: number): ValidatorFn<string> => {
  return (value) => {
    return !!value && value.length !== length
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
    return !!value && value.length < length
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
    return !!value && value.length < length
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
