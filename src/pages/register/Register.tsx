import { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const Register = () => {
  const navigate = useNavigate();

  const [num, setNum] = useState(1);

  const handleCountUp = () => {
    setNum((prev) => prev + 1);
  };

  const handleCountDown = () => {
    if (num == 1) {
      navigate("/");
    } else {
      setNum((prev) => prev - 1);
    }
    console.log(num);
  };

  return (
    <>
      <div className="flex flex-col relative w-[100%] h-5 py-5 px-4 m-auto justify-start items-left">
        <button
          onClick={handleCountDown}
          role="button"
          className="flex flex-row items-center justify-start focus:tracking-wider focus:font-semibold transition-all mb-7"
        >
          <HiOutlineArrowLeft className="size-5 mr-3" />
          Back
        </button>
      </div>

      <div className="flex flex-col relative w-[80%] h-[100%] py-5 px-4 m-auto justify-start items-left">
        {num === 1 && <Login />}
        {/* {num === 2 && <Step2 />}
      {num === 3 && <Step3 />}
    {num === 4 && <Step4 />} */}
      </div>
    </>
  );
};

export default Register;
