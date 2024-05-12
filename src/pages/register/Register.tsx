import { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
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
    }
    setNum((prev) => prev + 1);

    console.log(num);
  };

  const handleCountDown = () => {
    if (num === 1) {
      navigate("/");
    }
    setNum((prev) => prev - 1);

    console.log(num);
  };

  const renderSteps = () => {
    switch (num) {
      case 1:
        return <Login handleCountUp={handleCountUp} />;
      case 2:
        return <PhoneVerification handleCountUp={handleCountUp} />;
      case 3:
        return <PinCode handleCountUp={handleCountUp} />;

      case 4:
        return <Question handleCountUp={handleCountUp} />;
    }
  };

  return (
    <Layout
      headerContent={<BackButton onClick={handleCountDown} />}
      FooterTitle={"FOOTER"}
    >
      <div className="flex flex-col relative w-[80%] h-[100%] py-5 px-4 m-auto justify-start items-left">
        {renderSteps()}
      </div>
    </Layout>
  );
};

export default Register;
