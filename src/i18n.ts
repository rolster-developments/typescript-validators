import { i18n } from '@rolster/i18n';

const validatorsI18n = i18n({
  es: {
    required: 'Campo es requerido',
    textonly: 'Campo solo permite caracteres (sin espacio)',
    alphabetic: 'Campo solo permite caracteres',
    alphanumber: 'Campo solo permite caracteres y número',
    onlynumber: 'Campo debe ser númerico',
    decimal: 'Campo debe ser número decimal',
    email: 'Campo debe ser correo electrónico',
    password: 'Campo no permitido para password',
    reqlength: 'Campo debe tener {length} caracter(es)',
    strMinlength: 'Campo debe tener mínimo {length} caracter(es)',
    strMaxlength: 'Campo debe tener máximo {length} caracter(es)'
  },
  en: {
    required: 'Field is required',
    textonly: 'Field only allows characters (no space)',
    alphabetic: 'Field only allows characters',
    alphanumber: 'Field only allows characters and number',
    onlynumber: 'Field must be numeric',
    decimal: 'Field must be decimal number',
    email: 'Field must be email',
    password: 'Field not allowed for password',
    reqlength: 'Field must be {length} characters',
    strMinlength: 'Field must have minimum {length} characters',
    strMaxlength: 'Field must have maximum {length} characters'
  }
});

export default validatorsI18n;
