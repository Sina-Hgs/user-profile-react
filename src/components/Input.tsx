import { ChangeEvent } from "react";

type Props = {
  inputName: string;
  type: string;
  formData: string | number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ inputName, type, formData, handleChange }: Props) => {
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
      
    </label>
  );
};

export default Input;
