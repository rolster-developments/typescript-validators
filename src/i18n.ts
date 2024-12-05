import { i18n } from '@rolster/i18n';

const validatorsI18n = i18n({
  es: {
    alphabetic: 'Campo solo permite caracteres',
    alphanumber: 'Campo solo permite caracteres y número',
    decimal: 'Campo debe ser número decimal',
    defined: 'Campo debe estar definido',
    email: 'Campo debe ser correo electrónico',
    maxValue: 'Campo debe tener un valor máximo de {value}',
    minValue: 'Campo debe tener un valor mínimo de {value}',
    onlynumber: 'Campo debe ser númerico',
    password: 'Campo no permitido para password',
    reqlength: 'Campo debe tener {length} caracter(es)',
    required: 'Campo es requerido',
    strMinlength: 'Campo debe tener mínimo {length} caracter(es)',
    strMaxlength: 'Campo debe tener máximo {length} caracter(es)',
    textonly: 'Campo solo permite caracteres (sin espacio)'
  },
  en: {
    alphabetic: 'Field only allows characters',
    alphanumber: 'Field only allows characters and number',
    decimal: 'Field must be decimal number',
    defined: 'Field must be defined',
    email: 'Field must be email',
    minValue: 'Field must have a minimum value of {value}',
    maxValue: 'Field must have a maximum value of {value}',
    onlynumber: 'Field must be numeric',
    password: 'Field not allowed for password',
    reqlength: 'Field must be {length} characters',
    required: 'Field is required',
    strMinlength: 'Field must have minimum {length} characters',
    strMaxlength: 'Field must have maximum {length} characters',
    textonly: 'Field only allows characters (no space)'
  }
});

export default validatorsI18n;
