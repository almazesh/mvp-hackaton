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

export const validationSchemaCreateProject = yup.object().shape({
  caption: yup.string().min(6).trim().required(),
  start: yup.string().min(6).required(),
  redline: yup.string().min(3).trim().required(),
  deadline: yup.string().min(6).required(),
  status: yup.string().min(3).trim().required(),
  developers: yup.string().min(6).required(),
})