import Input from "./Input";

const Login = () => {
  const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  return <Input inputName="Phone" type="text" phoneRegex={phoneRegex} />;
};

export default Login;
