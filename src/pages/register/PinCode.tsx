import Button from "../../components/Button";

const PinCode = ({ handleCountUp }: any) => {
  return (
    <div>
      PinCode
      <Button buttonLabel="Set" handleClick={handleCountUp} />
    </div>
  );
};

export default PinCode;
