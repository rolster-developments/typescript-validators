export const REGEX_ALPHABETIC = /^[A-Za-z| |ñ|á|é|í|ó|ú|ü]*$/;

export const REGEX_ALPHANUMBER = /^[A-Za-z|0-9|ñ|á|é|í|ó|ú|ü]*$/;

export const REGEX_DECIMAL = /^[0-9|,|.|+|-]*$/;

export const REGEX_HEX_COLOR = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;

export const REGEX_EMAIL =
  /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const REGEX_NICKNAME = /^[A-Za-z|0-9|.|_|-|@]*$/;

export const REGEX_ONLY_NUMBER = /^[0-9]*$/;

export const REGEX_ONLY_TEXT = /^[A-Za-z|ñ|á|é|í|ó|ú|ü]*$/;

export const REGEX_PASSWORD = /^[A-Za-z|0-9|.|!|¡|@|_|-|#|$|&|%|*]*$/;
