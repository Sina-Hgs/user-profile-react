import { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Button from "../../components/Button";
import PhoneVerification from "./PhoneVerification";
import PinCode from "./PinCode";
import Question from "./Question";
import Layout from "../../components/Layout";
import BackButton from "../../components/BackButton";

const Register = () => {
  const navigate = useNavigate();

  const [num, setNum] = useState(1);

  const handleCountUp = () => {
    if (num === 4) {
      navigate("/");
    } else {
      setNum((prev) => prev + 1);
    }
    console.log(num);
  };

  const handleCountDown = () => {
    if (num === 1) {
      navigate("/");
    } else {
      setNum((prev) => prev - 1);
    }
    console.log(num);
  };

  return (
    <Layout
      headerContent={<BackButton onClick={handleCountDown} />}
      FooterTitle={"FOOTER"}
    >
      <div className="flex flex-col relative w-[80%] h-[100%] py-5 px-4 m-auto justify-start items-left">
        {num === 1 && (
          <div>
            <Login handleCountUp={handleCountUp} />
          </div>
        )}
        {num === 2 && (
          <div>
            <PhoneVerification handleCountUp={handleCountUp} />
          </div>
        )}
        {num === 3 && (
          <div>
            <PinCode handleCountUp={handleCountUp} />
          </div>
        )}
        {num === 4 && (
          <div>
            <Question handleCountUp={handleCountUp} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Register;
