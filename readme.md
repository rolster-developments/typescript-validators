# Rolster Validators

Utility lightweight simple for apply data validations.

## Installation

```
npm i @rolster/validators
```

## Configuration

You must install the `@rolster/types` to define package data types, which are configured by adding them to the `files` property of the `tsconfig.json` file.

```json
{
  "files": ["node_modules/@rolster/types/index.d.ts"]
}
```

## Concepts

A **validator** is a function that receives a value and returns either
`undefined` (the value is valid) or a `ValidatorError` describing the problem:

```typescript
interface ValidatorError<T = any> {
  id: string; // unique error identifier, e.g. 'required'
  message: string; // human readable message (i18n, es/en)
  data?: T; // extra context about the failure
}
```

The library ships with three entry points:

- `@rolster/validators` — the `validate` function to validate whole objects.
- `@rolster/validators/helpers` — the catalog of ready-to-use validators.
- `@rolster/validators/expressions` — the underlying regular expressions.

## Features

### Built-in validators

Import them from `@rolster/validators/helpers`. Each returns a `ValidatorError`
when the value is invalid, or `undefined` when it is valid.

**Presence**

| Validator              | Valid when…                          |
| ---------------------- | ------------------------------------ |
| `defined(value)`       | value is not `null`/`undefined`      |
| `required(value)`      | value is truthy                      |
| `checked(value)`       | boolean value is `true`              |

**Text format**

| Validator               | Valid when…                                       |
| ----------------------- | ------------------------------------------------- |
| `textonly(value)`       | only letters, no spaces                           |
| `alphabetic(value)`     | only letters and spaces                           |
| `alphanumber(value)`    | only letters and numbers                          |
| `onlyNumber(value)`     | only digits                                       |
| `email(value)`          | valid email address                               |
| `hexColor(value)`       | hexadecimal color (`#RRGGBB` / `#RRGGBBAA`)       |
| `nickname(value)`       | valid username (letters, numbers, `. _ - @`)      |
| `password(value)`       | only the allowed password characters              |
| `decimal(value)`        | decimal number                                    |

**Length (factory validators)**

| Validator                 | Valid when…                          |
| ------------------------- | ------------------------------------ |
| `strReqlength(n)`         | string length is exactly `n`         |
| `strMinlength(n)`         | string length is at least `n`        |
| `strMaxlength(n)`         | string length is at most `n`         |

**Numeric range (factory validators)**

| Validator                      | Valid when…              |
| ------------------------------ | ------------------------ |
| `minValue(n)`                  | value `>= n`             |
| `maxValue(n)`                  | value `<= n`             |
| `greaterThanValue(n)`          | value `> n`              |
| `greaterOrEqualsThanValue(n)`  | value `>= n`             |
| `lessThanValue(n)`             | value `< n`              |
| `lessOrEqualsThanValue(n)`     | value `<= n`             |

```typescript
import { required, email, strMinlength } from '@rolster/validators/helpers';

required(''); // { id: 'required', message: 'Field is required', ... }
required('Daniel'); // undefined

email('not-an-email'); // { id: 'email', message: 'Field must be email', ... }
email('daniel@rolster.com'); // undefined

const min = strMinlength(8);
min('123'); // { id: 'strMinlength', ... }
min('12345678'); // undefined
```

### Validating an object

Use `validate` to run several validators against the fields of an object. It
returns whether the object is `valid` plus the collected `errors` per field.

```typescript
import { validate } from '@rolster/validators';
import { required, email, strMinlength } from '@rolster/validators/helpers';

const form = { name: '', email: 'daniel@rolster.com', password: '123' };

const result = validate(form, {
  name: [required],
  email: [required, email],
  password: [required, strMinlength(8)]
});

result.valid; // false
result.errors;
// {
//   name: [{ id: 'required', message: 'Field is required', ... }],
//   password: [{ id: 'strMinlength', message: 'Field must have minimum 8 characters', ... }]
// }
```

### Internationalized messages

Error messages are localized through `@rolster/i18n` and ship with Spanish
(`es`) and English (`en`) translations out of the box.

### Regular expressions

If you only need the raw patterns (for inputs, masks, etc.) import them from
`@rolster/validators/expressions`:

```typescript
import { REGEX_EMAIL, REGEX_HEX_COLOR } from '@rolster/validators/expressions';

REGEX_EMAIL.test('daniel@rolster.com'); // true
```

## Contributing

- Daniel Andrés Castillo Pedroza :rocket:
