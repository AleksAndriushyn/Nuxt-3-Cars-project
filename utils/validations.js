import {helpers} from "@vuelidate/validators";

export const emailValid = helpers.withMessage(
    'Enter a valid email (e.g., test@gmail.com)',
    (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || ! value;
})