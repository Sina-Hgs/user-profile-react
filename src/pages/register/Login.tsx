import { useState, ChangeEvent } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { handleCountUp } from "./types";

const Login = ({ handleCountUp }: handleCountUp) => {
  const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const [formData, setFormData] = useState<string>("");
  const [fieldValidationErrors, setFieldValidationErrors] = useState("");

  // FORM VALIDATION FUNCTION
  const validateForm = (value: string, regexValidation: RegExp) => {
    let isValid = regexValidation.test(value);
    console.log(isValid);
    let errorMessage = isValid ? "" : "The input is invalid.";
    setFieldValidationErrors(errorMessage);
  };

  // HANDLE CHANGE
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    regexValidation: RegExp
  ) => {
    const { value } = e.target;
    validateForm(value, regexValidation);
    setFormData(value);
  };
  return (
    <>
      <Input
        inputName="Phone"
        type="text"
        handleChange={(e) => handleChange(e, phoneRegex)}
        formData={formData}
      />
      <p>{fieldValidationErrors}</p>
      <Button buttonLabel="Login" handleClick={handleCountUp} />
    </>
  );
};

export default Login;
