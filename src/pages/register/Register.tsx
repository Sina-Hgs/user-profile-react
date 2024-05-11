import { useState } from "react";
import Login from "./Login";

const Register = () => {
  const [fieldValidationErrors, setFieldValidationErrors] = useState({
    phone: "",
  });
  return (
    <div className="flex flex-col relative w-[80%] h-[100%] py-5 px-4 m-auto justify-start items-left">
      <Login />
    </div>
  );
};

export default Register;
