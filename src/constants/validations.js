import * as Yup from 'yup';
import i18n from '../i18n/i18n';
const t = i18n.t;

/**
 * @name loginSchema
 * @description validation schema for login page
 */
export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email(t("Validation.ValidEmail"))
        .required(t("Validation.EmailRequired")),
    password: Yup.string()
        .required(t("Validation.PasswordRequired"))
        .min(8, t("Validation.Min8Characters"))
        .max(15, t("Validation.Max15Character"))
        .matches(
            /(?=^.{8,}$)(?=.*\d)(?=.*[~()_+='":;?/|.><,`}{!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            t("Validation.PasswordValidation")
        ),
});