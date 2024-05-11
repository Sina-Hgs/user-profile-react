import Button from "../../components/Button";

const Question = ({ handleCountUp }: any) => {
  return (
    <div>
      Question
      <Button buttonLabel="Confirm" handleClick={handleCountUp} />
    </div>
  );
};

export default Question;
