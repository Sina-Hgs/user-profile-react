import { FormEvent } from "react";

type Props = {
  buttonLabel: string;
  handleClick: (e: FormEvent<HTMLButtonElement>) => void;
};

const Button = ({ buttonLabel, handleClick }: Props) => {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className="w-full my-12 rounded-md p-2 bg-sky-600 text-black font-semibold focus:shadow-md focus:shadow-blue-500/50 
            hover:shadow-md 
            hover:shadow-blue-500/50 
            transition-all
          lg:w-[50%] lg:mb-12"
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
