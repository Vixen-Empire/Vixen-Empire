import * as Yup from "yup";

const lowercaseRegex= /(?=.*[a-z])/
const uppercaseRegex=/(?=.*[A-Z])/
const specialCharcater=/(?=.*?[!@#\$&*~])/
const numberRegex = /(?=.*?[0-9])/

const formSchema = Yup.object().shape({
   
  name: Yup
  .string()
  .min(2, "Name must be 2 characters long")
  .required("Please inclued your name"),

  email: Yup
  .string()
  .email()
  //.notOneOf(arr,message) to verify if email is in the array already
  .required("Please provide a valid email"),

  username: Yup
  .string()
  .min(5,"User name must be 5 charaters long.")
  .required("Please include a username"),

  
  password:Yup
  .string()
  .matches(lowercaseRegex,`Must contain  one lower case`)
  .matches(uppercaseRegex,"Must contain one upper case")
  .matches(specialCharcater,"Must contain one Special character")
  .matches(numberRegex,"Must contain one number")
  .min(8,  "Password must be at least 8 characters long.")
  .required("Password is Required"),
  
  passwordConfirm:Yup
  .string()
  .oneOf([Yup.ref('password'), null],"Password must match")
  .required('Confirm Password is required'),

})

export default formSchema