import Button from "../../components/Button";
import { handleCountUp } from "./types";

const Question = ({ handleCountUp }: handleCountUp) => {
  return (
    <div>
      Question
      <Button buttonLabel="Confirm" handleClick={handleCountUp} />
    </div>
  );
};

export default Question;
