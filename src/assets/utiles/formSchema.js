import * as Yup from "yup";

const formSchema = Yup.object().shape({
   

  name: Yup
  .string()
  .min(2, "Name must be 2 characters long")
  .required("Please inclued your name"),

  email: Yup
  .string()
  .email()
  .required("Please provide a valid email"),

  username: Yup
  .string()
  .min(5,"User name must be 5 charaters long.")
  .required("Please include a username"),

  
  password:Yup
  .string()
  .min(8,  "Password must be at least 8 characters long.")

  .required("Password is Required",),

  confirm:Yup
  .string()
  .oneOf([Yup.ref("password"), null], "Passwords must match"),
  
  
  termsCheck: Yup
  .boolean()
  .oneOf([true], "Must accept Terms of Service to use")
  .required("Must accept Terms of Service to use"),
  privacyCheck: Yup
  .boolean()
  .oneOf([true], "Must read and accept Privacy Notice ")
  .required("Must accept Privacy Notice"),
  
  


})

export default formSchema