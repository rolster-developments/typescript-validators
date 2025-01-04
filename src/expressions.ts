export const REGEX_ALPHABETIC = /^[a-z|A-Z| |ñ|Ñ|á|Á|é|É|í|Í|ó|Ó|ú|Ú|ü|Ü]*$/;

export const REGEX_ALPHANUMBER = /^[0-9|a-z|A-Z|ñ|Ñ|á|Á|é|É|í|Í|ó|Ó|ú|Ú|ü|Ü]*$/;

export const REGEX_DECIMAL = /^[0-9|,|.|+|-]*$/;

export const REGEX_EMAIL =
  /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const REGEX_ONLY_NUMBER = /^[0-9]*$/;

export const REGEX_ONLY_TEXT = /^[a-z|A-Z|ñ|Ñ|á|Á|é|É|í|Í|ó|Ó|ú|Ú|ü|Ü]*$/;

export const REGEX_PASSWORD = /^[a-z|A-Z|ñ|Ñ|0-9|.|!|¡|@|_|-|#|$|&|%]*$/;
