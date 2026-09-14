import { i18nLanguage, Language } from '@rolster/i18n';

import {
  alphabetic,
  alphanumber,
  checked,
  decimal,
  defined,
  email,
  greaterOrEqualsThanValue,
  greaterThanValue,
  hexColor,
  lessOrEqualsThanValue,
  lessThanValue,
  maxValue,
  minValue,
  nickname,
  onlyNumber,
  password,
  required,
  strMaxlength,
  strMinlength,
  strReqlength,
  textonly
} from './helpers';

afterEach(() => {
  i18nLanguage(Language.Spanish);
});

describe('defined', () => {
  it('should pass for any defined value including falsy ones', () => {
    expect(defined('Daniel')).toBeUndefined();
    expect(defined(0)).toBeUndefined();
    expect(defined('')).toBeUndefined();
    expect(defined(false)).toBeUndefined();
  });

  it('should fail for undefined and null', () => {
    expect(defined(undefined)).toEqual({
      id: 'defined',
      data: { value: 'undefined' },
      message: 'Campo debe estar definido'
    });
    expect(defined(null)).toEqual({
      id: 'defined',
      data: { value: 'null' },
      message: 'Campo debe estar definido'
    });
    expect(defined()).toBeDefined();
  });
});

describe('required', () => {
  it('should pass for truthy values', () => {
    expect(required('Daniel')).toBeUndefined();
    expect(required(1)).toBeUndefined();
    expect(required(true)).toBeUndefined();
    expect(required([])).toBeUndefined();
  });

  it('should fail for falsy values', () => {
    expect(required('')).toEqual({
      id: 'required',
      data: { value: '' },
      message: 'Campo es requerido'
    });
    expect(required(0)?.id).toBe('required');
    expect(required(false)?.id).toBe('required');
    expect(required(null)?.id).toBe('required');
    expect(required(undefined)?.id).toBe('required');
  });
});

describe('checked', () => {
  it('should pass when value is true', () => {
    expect(checked(true)).toBeUndefined();
  });

  it('should fail when value is false, null or undefined', () => {
    expect(checked(false)).toEqual({
      id: 'checked',
      data: { value: 'false' },
      message: 'Campo debe ser seleccionado'
    });
    expect(checked(null)?.id).toBe('checked');
    expect(checked()?.id).toBe('checked');
  });
});

describe('textonly', () => {
  it('should pass for letters without spaces', () => {
    expect(textonly('Daniel')).toBeUndefined();
    expect(textonly('Peña')).toBeUndefined();
  });

  it('should skip validation for empty, null or undefined', () => {
    expect(textonly('')).toBeUndefined();
    expect(textonly(null)).toBeUndefined();
    expect(textonly()).toBeUndefined();
  });

  it('should fail for spaces, digits or symbols', () => {
    expect(textonly('Daniel Castillo')).toEqual({
      id: 'textonly',
      data: { value: 'Daniel Castillo' },
      message: 'Campo solo permite caracteres (sin espacio)'
    });
    expect(textonly('Daniel1')?.id).toBe('textonly');
  });
});

describe('alphabetic', () => {
  it('should pass for letters and spaces', () => {
    expect(alphabetic('Daniel Castillo')).toBeUndefined();
    expect(alphabetic('')).toBeUndefined();
  });

  it('should fail for digits or symbols', () => {
    expect(alphabetic('Daniel 1')).toEqual({
      id: 'alphabetic',
      data: { value: 'Daniel 1' },
      message: 'Campo solo permite caracteres'
    });
  });
});

describe('alphanumber', () => {
  it('should pass for letters and digits', () => {
    expect(alphanumber('Daniel123')).toBeUndefined();
    expect(alphanumber('')).toBeUndefined();
  });

  it('should fail for spaces or symbols', () => {
    expect(alphanumber('Daniel 123')).toEqual({
      id: 'alphanumber',
      data: { value: 'Daniel 123' },
      message: 'Campo solo permite caracteres y número'
    });
  });
});

describe('onlyNumber', () => {
  it('should pass for digit strings and integer numbers', () => {
    expect(onlyNumber('123')).toBeUndefined();
    expect(onlyNumber(123)).toBeUndefined();
  });

  it('should skip validation for empty, zero, null or undefined', () => {
    expect(onlyNumber('')).toBeUndefined();
    expect(onlyNumber(0)).toBeUndefined();
    expect(onlyNumber(null)).toBeUndefined();
    expect(onlyNumber()).toBeUndefined();
  });

  it('should fail for decimals or letters', () => {
    expect(onlyNumber('12a')).toEqual({
      id: 'onlyNumber',
      data: { value: '12a' },
      message: 'Campo debe ser númerico'
    });
    expect(onlyNumber(12.5)?.data).toEqual({ value: '12.5' });
  });
});

describe('email', () => {
  it('should pass for valid emails', () => {
    expect(email('daniel@rolster.com')).toBeUndefined();
    expect(email('')).toBeUndefined();
  });

  it('should fail for invalid emails', () => {
    expect(email('daniel@rolster')).toEqual({
      id: 'email',
      data: { value: 'daniel@rolster' },
      message: 'Campo debe ser correo electrónico'
    });
  });
});

describe('hexColor', () => {
  it('should pass for valid hexadecimal colors', () => {
    expect(hexColor('#FFFFFF')).toBeUndefined();
    expect(hexColor('#A1B2C3D4')).toBeUndefined();
    expect(hexColor('')).toBeUndefined();
  });

  it('should fail for invalid hexadecimal colors', () => {
    expect(hexColor('#FFF')).toEqual({
      id: 'hexColor',
      data: { value: '#FFF' },
      message: 'Campo debe ser color hexadecimal'
    });
  });
});

describe('nickname', () => {
  it('should pass for valid nicknames', () => {
    expect(nickname('daniel.castillo_99')).toBeUndefined();
    expect(nickname('')).toBeUndefined();
  });

  it('should fail for nicknames with spaces', () => {
    expect(nickname('daniel castillo')).toEqual({
      id: 'nickname',
      data: { value: 'daniel castillo' },
      message: 'Campo inválido para nombre de usuario'
    });
  });
});

describe('password', () => {
  it('should pass for allowed characters', () => {
    expect(password('P@ssw0rd!')).toBeUndefined();
    expect(password('')).toBeUndefined();
  });

  it('should fail for disallowed characters', () => {
    expect(password('Pass word')).toEqual({
      id: 'password',
      data: { value: 'Pass word' },
      message: 'Campo no permitido para password'
    });
  });
});

describe('strReqlength', () => {
  const validator = strReqlength(4);

  it('should pass when length matches exactly', () => {
    expect(validator('1234')).toBeUndefined();
  });

  it('should skip validation for empty, null or undefined', () => {
    expect(validator('')).toBeUndefined();
    expect(validator(null)).toBeUndefined();
    expect(validator()).toBeUndefined();
  });

  it('should fail when length differs', () => {
    expect(validator('123')).toEqual({
      id: 'strReqLength',
      data: { length: '4', value: '123' },
      message: 'Campo debe tener 4 caracter(es)'
    });
    expect(validator('12345')?.id).toBe('strReqLength');
  });
});

describe('strMinlength', () => {
  const validator = strMinlength(3);

  it('should pass when length is greater or equal', () => {
    expect(validator('abc')).toBeUndefined();
    expect(validator('abcd')).toBeUndefined();
  });

  it('should skip validation for empty, null or undefined', () => {
    expect(validator('')).toBeUndefined();
    expect(validator(null)).toBeUndefined();
    expect(validator()).toBeUndefined();
  });

  it('should fail when length is lower', () => {
    expect(validator('ab')).toEqual({
      id: 'strMinlength',
      data: { length: '3', value: 'ab' },
      message: 'Campo debe tener mínimo 3 caracter(es)'
    });
  });
});

describe('strMaxlength', () => {
  const validator = strMaxlength(3);

  it('should pass when length is lower or equal', () => {
    expect(validator('abc')).toBeUndefined();
    expect(validator('ab')).toBeUndefined();
    expect(validator('')).toBeUndefined();
  });

  it('should fail when length is greater', () => {
    expect(validator('abcd')).toEqual({
      id: 'strMaxlength',
      data: { length: '3', value: 'abcd' },
      message: 'Campo debe tener máximo 3 caracter(es)'
    });
  });
});

describe('decimal', () => {
  it('should pass for numbers', () => {
    expect(decimal(10)).toBeUndefined();
    expect(decimal(10.5)).toBeUndefined();
    expect(decimal(-3.14)).toBeUndefined();
  });

  it('should skip validation for zero, null or undefined', () => {
    expect(decimal(0)).toBeUndefined();
    expect(decimal(null)).toBeUndefined();
    expect(decimal()).toBeUndefined();
  });

  it('should fail for non numeric strings', () => {
    expect(decimal('10a' as unknown as number)).toEqual({
      id: 'decimal',
      data: { value: '10a' },
      message: 'Campo debe ser número decimal'
    });
  });
});

describe('minValue', () => {
  const validator = minValue(5);

  it('should pass when value is greater or equal', () => {
    expect(validator(5)).toBeUndefined();
    expect(validator(10)).toBeUndefined();
  });

  it('should skip validation for zero, null or undefined', () => {
    expect(validator(0)).toBeUndefined();
    expect(validator(null)).toBeUndefined();
    expect(validator()).toBeUndefined();
  });

  it('should fail when value is lower', () => {
    expect(validator(3)).toEqual({
      id: 'minValue',
      data: { minValue: '5', value: '3' },
      message: 'Campo debe tener un valor mínimo de 5'
    });
  });
});

describe('maxValue', () => {
  const validator = maxValue(5);

  it('should pass when value is lower or equal', () => {
    expect(validator(5)).toBeUndefined();
    expect(validator(1)).toBeUndefined();
  });

  it('should skip validation for zero, null or undefined', () => {
    expect(validator(0)).toBeUndefined();
    expect(validator(null)).toBeUndefined();
    expect(validator()).toBeUndefined();
  });

  it('should fail when value is greater', () => {
    expect(validator(8)).toEqual({
      id: 'maxValue',
      data: { maxValue: '5', value: '8' },
      message: 'Campo debe tener un valor máximo de 5'
    });
  });
});

describe('greaterThanValue', () => {
  const validator = greaterThanValue(5);

  it('should pass when value is strictly greater', () => {
    expect(validator(6)).toBeUndefined();
  });

  it('should skip validation for zero, null or undefined', () => {
    expect(validator(0)).toBeUndefined();
    expect(validator(null)).toBeUndefined();
    expect(validator()).toBeUndefined();
  });

  it('should fail when value is equal or lower', () => {
    expect(validator(5)).toEqual({
      id: 'greaterThanValue',
      data: { thanValue: '5', value: '5' },
      message: 'Campo debe tener un valor mayor a 5'
    });
    expect(validator(4)?.id).toBe('greaterThanValue');
  });
});

describe('greaterOrEqualsThanValue', () => {
  const validator = greaterOrEqualsThanValue(5);

  it('should pass when value is greater or equal', () => {
    expect(validator(5)).toBeUndefined();
    expect(validator(6)).toBeUndefined();
  });

  it('should skip validation for zero, null or undefined', () => {
    expect(validator(0)).toBeUndefined();
    expect(validator(null)).toBeUndefined();
    expect(validator()).toBeUndefined();
  });

  it('should fail when value is lower', () => {
    expect(validator(4)).toEqual({
      id: 'greaterOrEqualsThanValue',
      data: { thanValue: '5', value: '4' },
      message: 'Campo debe tener un valor mayor o igual a 5'
    });
  });
});

describe('lessThanValue', () => {
  const validator = lessThanValue(5);

  it('should pass when value is strictly lower', () => {
    expect(validator(4)).toBeUndefined();
  });

  it('should skip validation for zero, null or undefined', () => {
    expect(validator(0)).toBeUndefined();
    expect(validator(null)).toBeUndefined();
    expect(validator()).toBeUndefined();
  });

  it('should fail when value is equal or greater', () => {
    expect(validator(5)).toEqual({
      id: 'lessThanValue',
      data: { thanValue: '5', value: '5' },
      message: 'Campo debe tener un valor menor a 5'
    });
    expect(validator(6)?.id).toBe('lessThanValue');
  });
});

describe('lessOrEqualsThanValue', () => {
  const validator = lessOrEqualsThanValue(5);

  it('should pass when value is lower or equal', () => {
    expect(validator(5)).toBeUndefined();
    expect(validator(4)).toBeUndefined();
  });

  it('should skip validation for zero, null or undefined', () => {
    expect(validator(0)).toBeUndefined();
    expect(validator(null)).toBeUndefined();
    expect(validator()).toBeUndefined();
  });

  it('should fail when value is greater', () => {
    expect(validator(6)).toEqual({
      id: 'lessOrEqualsThanValue',
      data: { thanValue: '5', value: '6' },
      message: 'Campo debe tener un valor menor o igual a 5'
    });
  });
});

describe('i18n messages', () => {
  it('should use spanish messages by default', () => {
    expect(required('')?.message).toBe('Campo es requerido');
    expect(strMinlength(3)('ab')?.message).toBe(
      'Campo debe tener mínimo 3 caracter(es)'
    );
  });

  it('should switch messages to english when language changes', () => {
    i18nLanguage(Language.English);

    expect(required('')?.message).toBe('Field is required');
    expect(defined(null)?.message).toBe('Field must be defined');
    expect(checked(false)?.message).toBe('Field must be selected');
    expect(email('bad')?.message).toBe('Field must be email');
    expect(strMinlength(3)('ab')?.message).toBe(
      'Field must have minimum 3 characters'
    );
    expect(strMaxlength(3)('abcd')?.message).toBe(
      'Field must have maximum 3 characters'
    );
    expect(strReqlength(3)('ab')?.message).toBe('Field must be 3 characters');
    expect(minValue(5)(3)?.message).toBe(
      'Field must have a minimum value of 5'
    );
    expect(maxValue(5)(8)?.message).toBe(
      'Field must have a maximum value of 5'
    );
    expect(greaterThanValue(5)(5)?.message).toBe(
      'Field must have a value greater than 5'
    );
    expect(greaterOrEqualsThanValue(5)(4)?.message).toBe(
      'Field must have a value greater than or equal to 5'
    );
    expect(lessThanValue(5)(5)?.message).toBe(
      'Field must have a value less than 5'
    );
    expect(lessOrEqualsThanValue(5)(6)?.message).toBe(
      'Field must have a value less than or equal to 5'
    );
  });
});
