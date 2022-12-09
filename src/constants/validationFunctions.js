import i18n from '../i18n/i18n';
const t = i18n.t;

/**
 * @name validateEmail
 * @description this funcion will validate the email address
 */
export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = t('Validation.EmailRequired');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = t('Validation.ValidEmail');
  }
  return error;
};
