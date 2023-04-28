import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().required("Required")
  .min(4, "Password length should be at least 4 characters")
  .max(12, "Password cannot exceed more than 12 characters")
});
