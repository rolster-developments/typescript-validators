import { validate } from '.';
import { email, minValue, required, strMinlength } from './helpers';

interface User {
  age: number;
  email: string;
  name: string;
}

describe('validate', () => {
  it('should return valid with no errors when every validator passes', () => {
    const user: User = { age: 30, email: 'daniel@rolster.com', name: 'Daniel' };

    const result = validate(user, {
      age: [required, minValue(18)],
      email: [required, email],
      name: [required, strMinlength(3)]
    });

    expect(result).toEqual({ valid: true, errors: {} });
  });

  it('should return invalid and collect errors grouped by key', () => {
    const user: User = { age: 15, email: 'daniel@rolster', name: '' };

    const result = validate(user, {
      age: [required, minValue(18)],
      email: [required, email],
      name: [required, strMinlength(3)]
    });

    expect(result.valid).toBe(false);
    expect(Object.keys(result.errors).sort()).toEqual(['age', 'email', 'name']);
    expect(result.errors.age.map(({ id }) => id)).toEqual(['minValue']);
    expect(result.errors.email.map(({ id }) => id)).toEqual(['email']);
    expect(result.errors.name.map(({ id }) => id)).toEqual(['required']);
  });

  it('should collect every failing validator of the same key in order', () => {
    const result = validate({ name: 'ab' }, { name: [strMinlength(3), email] });

    expect(result.valid).toBe(false);
    expect(result.errors.name.map(({ id }) => id)).toEqual([
      'strMinlength',
      'email'
    ]);
  });

  it('should only include keys with errors', () => {
    const user: User = { age: 30, email: 'bad', name: 'Daniel' };

    const result = validate(user, {
      age: [required],
      email: [email],
      name: [required]
    });

    expect(result.valid).toBe(false);
    expect(Object.keys(result.errors)).toEqual(['email']);
  });

  it('should only validate the keys present in validates', () => {
    const user: User = { age: 0, email: '', name: 'Daniel' };

    const result = validate(user, { name: [required] });

    expect(result).toEqual({ valid: true, errors: {} });
  });

  it('should treat keys with an empty validators list as valid', () => {
    const result = validate({ name: '' }, { name: [] });

    expect(result).toEqual({ valid: true, errors: {} });
  });

  it('should return valid when validates is empty', () => {
    expect(validate({ name: '' }, {})).toEqual({ valid: true, errors: {} });
  });

  it('should validate undefined values for keys missing in the object', () => {
    const result = validate({} as { name: string }, { name: [required] });

    expect(result.valid).toBe(false);
    expect(result.errors.name[0]).toMatchObject({
      id: 'required',
      data: { value: 'undefined' }
    });
  });

  it('should pass the field value to each validator', () => {
    const validator = vi.fn(() => undefined);

    validate({ name: 'Daniel', age: 30 }, { name: [validator] });

    expect(validator).toHaveBeenCalledTimes(1);
    expect(validator).toHaveBeenCalledWith('Daniel');
  });

  it('should include the full error object returned by the validator', () => {
    const result = validate({ name: '' }, { name: [required] });

    expect(result.errors.name).toEqual([
      {
        id: 'required',
        data: { value: '' },
        message: 'Campo es requerido'
      }
    ]);
  });
});
