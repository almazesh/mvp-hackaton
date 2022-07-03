import * as yup from 'yup'

export const validationSchemaRegister = yup.object().shape({
  username: yup.string().min(3).trim().required(),
  role:yup.string().trim().required(),
  password: yup.string().min(6).required(),
})

export const validationSchemaLogin = yup.object().shape({
  username: yup.string().min(3).trim().required(),
  password: yup.string().min(6).required(),
})