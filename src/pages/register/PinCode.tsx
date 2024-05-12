import Button from "../../components/Button";
import { handleCountUp } from "./types";

const PinCode = ({ handleCountUp }: handleCountUp) => {
  return (
    <div>
      PinCode
      <Button buttonLabel="Set" handleClick={handleCountUp} />
    </div>
  );
};

export default PinCode;
