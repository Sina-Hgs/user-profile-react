import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = ({ handleCountUp }: any) => {
  const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  return (
    <>
      <Input inputName="Phone" type="text" phoneRegex={phoneRegex} />
      <Button buttonLabel="Login" handleClick={handleCountUp} />
    </>
  );
};

export default Login;
