import { ChangeEvent, useState } from "react";

type Props = {
  inputName: string;
  type: string;
  phoneRegex: RegExp;
};

const Input = ({ inputName, type, phoneRegex }: Props) => {
  const [formData, setFormData] = useState<string>("");
  const [fieldValidationErrors, setFieldValidationErrors] = useState("");

  // FORM VALIDATION FUNCTION
  const validateForm = (value: string) => {
    let isValid = phoneRegex.test(value);
    console.log(isValid);
    let errorMessage = isValid ? "" : "The input is invalid.";
    setFieldValidationErrors(errorMessage);
  };

  // HANDLE CHANGE
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    validateForm(value);
    setFormData(value);
  };

  return (
    <label htmlFor={inputName}>
      <h3 className="text-sm py-1 lg:w-[50%] m-auto text-left text-slate-300 max-lg:w-full">
        {inputName}
      </h3>
      <input
        id={inputName}
        name={inputName}
        required
        type={type}
        value={formData}
        onChange={handleChange}
        className="mb-2 w-full p-2 bg-inherit border-2 
            rounded-md border-solid border-slate-100
            focus:bg-zinc-900
            focus:shadow-2xl
            hover:bg-zinc-900
        hover:shadow-2xl
        transition-all
        lg:w-[50%]
        "
      />
      <p>{fieldValidationErrors}</p>
    </label>
  );
};

export default Input;
