import Button from "../../components/Button";
import Input from "../../components/Input";
import { handleCountUp } from "./types";

const PhoneVerification = ({ handleCountUp }: handleCountUp) => {
  return (
    <div>
      PhoneVerification
      <Input type="number" inputName="OTP_1" />
      <Input type="number" inputName="OTP_2" />
      <Input type="number" inputName="OTP_3" />
      <Input type="number" inputName="OTP_4" />
      <Input type="number" inputName="OTP_5" />
      <Button buttonLabel="Verify" handleClick={handleCountUp} />
    </div>
  );
};

export default PhoneVerification;
