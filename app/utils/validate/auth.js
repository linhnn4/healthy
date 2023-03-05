import * as yup from 'yup';

const authSchema = yup
  .object({
    nickname: yup
      .string()
      .trim()
      .required('Please input Nickname!')
      .max(20, 'Nickname must be less than 20 characters!'),
    firstName: yup
      .string()
      .trim()
      .required('Please input First Name!')
      .max(20, 'Fisrt Name must be less than 20 characters!'),
    lastName: yup
      .string()
      .trim()
      .required('Please input Last Name!')
      .max(20, 'Last Name must be less than 20 characters!'),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]*$/, 'Invalid phone number!')
      .min(9, 'Invalid phone number!')
      .max(12, 'Invalid phone number!')
      .trim()
      .required('You must enter phone number!'),
    country: yup.object({
      itemValue: yup.string(),
    }),
    email: yup
      .string()
      .trim()
      .required('Please input your email!')
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        'Please input valid email address!',
      ),
    oldPassword: yup
      .string()
      .default('')
      .min(8, 'Password must be at least 8 characters!')
      .trim()
      .required(),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters!')
      .trim()
      .required('Please input your password!')
      .matches(/[0-9]/, 'Must contain number!')
      .matches(/[a-z]/, 'Must contain lower case!')
      .matches(/[A-Z]/, 'Must contain upper case!')
      .matches(/\W/, 'Must contain special characters!'),
    newPassword: yup
      .string()
      .min(8, 'Password must be at least 8 characters!')
      .trim()
      .required('Please input your password!')
      .matches(/[0-9]/, 'Must contain number!')
      .matches(/[a-z]/, 'Must contain lower case!')
      .matches(/[A-Z]/, 'Must contain upper case!')
      .matches(/\W/, 'Must contain special characters!'),
    confirmPassword: yup
      .string()
      .trim()
      .required('Please input confirm password!'),
    referralId: yup
      .string()
      .default('')
      .trim(),
    OTP: yup
      .string()
      .length(6)
      .trim()
      .matches(/^\d+$/, 'Must be number only!')
      .required(),
    phoneOTP: yup
      .string()
      .length(6)
      .trim()
      .matches(/^\d+$/, 'Must be number only!'),
    emailOTP: yup
      .string()
      .length(6)
      .trim()
      .matches(/^\d+$/, 'Must be number only!'),
    GACode: yup
      .string()
      .length(6)
      .trim()
      .matches(/^\d+$/, 'Must be number only!'),
  })
  .required();

export default authSchema;
