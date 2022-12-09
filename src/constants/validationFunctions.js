import i18n from '../i18n/i18n';
const t = i18n.t;

//Validate Email
export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = t('Validation.EmailRequired');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = t('Validation.ValidEmail');
  }
  return error;
};

//Validate Password
export const validatePassword = (v) => {
  let error;
  if (!v) {
    error = t('Validation.PasswordRequired');
  }
  if (v) {
    let i;
    for (i = 0; i < v.length; i++) {
      if (v[i] === ' ') {
        error = t('Validation.SpaceNotAllowed');
      }
    }
  }
  return error;
};