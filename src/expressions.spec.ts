import {
  REGEX_ALPHABETIC,
  REGEX_ALPHANUMBER,
  REGEX_DECIMAL,
  REGEX_EMAIL,
  REGEX_HEX_COLOR,
  REGEX_NICKNAME,
  REGEX_ONLY_NUMBER,
  REGEX_ONLY_TEXT,
  REGEX_PASSWORD
} from './expressions';

describe('REGEX_ALPHABETIC', () => {
  it('should match letters, spaces and spanish characters', () => {
    expect(REGEX_ALPHABETIC.test('Daniel Castillo')).toBe(true);
    expect(REGEX_ALPHABETIC.test('Andrés Peña')).toBe(true);
    expect(REGEX_ALPHABETIC.test('')).toBe(true);
  });

  it('should not match digits or symbols', () => {
    expect(REGEX_ALPHABETIC.test('Daniel1')).toBe(false);
    expect(REGEX_ALPHABETIC.test('Daniel!')).toBe(false);
  });
});

describe('REGEX_ALPHANUMBER', () => {
  it('should match letters and digits without spaces', () => {
    expect(REGEX_ALPHANUMBER.test('Daniel123')).toBe(true);
    expect(REGEX_ALPHANUMBER.test('ñandú7')).toBe(true);
  });

  it('should not match spaces or symbols', () => {
    expect(REGEX_ALPHANUMBER.test('Daniel 123')).toBe(false);
    expect(REGEX_ALPHANUMBER.test('Daniel-123')).toBe(false);
  });
});

describe('REGEX_DECIMAL', () => {
  it('should match numbers with decimal separators and signs', () => {
    expect(REGEX_DECIMAL.test('10')).toBe(true);
    expect(REGEX_DECIMAL.test('10.5')).toBe(true);
    expect(REGEX_DECIMAL.test('1,000.50')).toBe(true);
    expect(REGEX_DECIMAL.test('-3.14')).toBe(true);
    expect(REGEX_DECIMAL.test('+7')).toBe(true);
  });

  it('should not match letters', () => {
    expect(REGEX_DECIMAL.test('10a')).toBe(false);
    expect(REGEX_DECIMAL.test('abc')).toBe(false);
  });
});

describe('REGEX_HEX_COLOR', () => {
  it('should match 6 and 8 digit hexadecimal colors', () => {
    expect(REGEX_HEX_COLOR.test('#FFFFFF')).toBe(true);
    expect(REGEX_HEX_COLOR.test('#a1b2c3')).toBe(true);
    expect(REGEX_HEX_COLOR.test('#A1B2C3D4')).toBe(true);
  });

  it('should not match short, missing hash or invalid digits', () => {
    expect(REGEX_HEX_COLOR.test('#FFF')).toBe(false);
    expect(REGEX_HEX_COLOR.test('FFFFFF')).toBe(false);
    expect(REGEX_HEX_COLOR.test('#GGGGGG')).toBe(false);
    expect(REGEX_HEX_COLOR.test('#FFFFFFF')).toBe(false);
  });
});

describe('REGEX_EMAIL', () => {
  it('should match valid emails', () => {
    expect(REGEX_EMAIL.test('daniel@rolster.com')).toBe(true);
    expect(REGEX_EMAIL.test('daniel.castillo@rolster.com.co')).toBe(true);
    expect(REGEX_EMAIL.test('user+tag@sub.domain.io')).toBe(true);
    expect(REGEX_EMAIL.test('user@[192.168.1.1]')).toBe(true);
  });

  it('should not match invalid emails', () => {
    expect(REGEX_EMAIL.test('daniel')).toBe(false);
    expect(REGEX_EMAIL.test('daniel@')).toBe(false);
    expect(REGEX_EMAIL.test('daniel@rolster')).toBe(false);
    expect(REGEX_EMAIL.test('@rolster.com')).toBe(false);
  });
});

describe('REGEX_NICKNAME', () => {
  it('should match letters, digits, dots, underscores and at', () => {
    expect(REGEX_NICKNAME.test('daniel.castillo')).toBe(true);
    expect(REGEX_NICKNAME.test('daniel_castillo_99')).toBe(true);
    expect(REGEX_NICKNAME.test('@daniel')).toBe(true);
  });

  it('should not match spaces or accents', () => {
    expect(REGEX_NICKNAME.test('daniel castillo')).toBe(false);
    expect(REGEX_NICKNAME.test('dániel')).toBe(false);
  });
});

describe('REGEX_ONLY_NUMBER', () => {
  it('should match digits only', () => {
    expect(REGEX_ONLY_NUMBER.test('123456')).toBe(true);
    expect(REGEX_ONLY_NUMBER.test('0')).toBe(true);
  });

  it('should not match decimals, signs or letters', () => {
    expect(REGEX_ONLY_NUMBER.test('12.5')).toBe(false);
    expect(REGEX_ONLY_NUMBER.test('-12')).toBe(false);
    expect(REGEX_ONLY_NUMBER.test('12a')).toBe(false);
  });
});

describe('REGEX_ONLY_TEXT', () => {
  it('should match letters without spaces', () => {
    expect(REGEX_ONLY_TEXT.test('Daniel')).toBe(true);
    expect(REGEX_ONLY_TEXT.test('Peña')).toBe(true);
  });

  it('should not match spaces, digits or symbols', () => {
    expect(REGEX_ONLY_TEXT.test('Daniel Castillo')).toBe(false);
    expect(REGEX_ONLY_TEXT.test('Daniel1')).toBe(false);
    expect(REGEX_ONLY_TEXT.test('Daniel.')).toBe(false);
  });
});

describe('REGEX_PASSWORD', () => {
  it('should match letters, digits and allowed symbols', () => {
    expect(REGEX_PASSWORD.test('Password123')).toBe(true);
    expect(REGEX_PASSWORD.test('P@ss.word_9#$&%*!')).toBe(true);
  });

  it('should not match spaces or disallowed symbols', () => {
    expect(REGEX_PASSWORD.test('Pass word')).toBe(false);
    expect(REGEX_PASSWORD.test('Pass/word')).toBe(false);
    expect(REGEX_PASSWORD.test('Pass<word>')).toBe(false);
  });
});
