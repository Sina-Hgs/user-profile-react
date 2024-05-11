import Button from "../../components/Button";

const PhoneVerification = ({ handleCountUp }: any) => {
  return (
    <div>
      PhoneVerification
      <Button buttonLabel="Verify" handleClick={handleCountUp} />
    </div>
  );
};

export default PhoneVerification;
