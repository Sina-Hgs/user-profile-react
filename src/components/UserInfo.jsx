import useLocalStorage from "../hooks/useLocalStorage";

import { FaUserCircle } from "react-icons/fa";

const UserInfo = () => {
  //  USER INFO INITIAL VALUES
  const fallBackUserInfo = {
    name: "Sina",
    email: "example@gmail.com",
  };

  const [userInfo, setUserInfo] = useLocalStorage("userInfo", fallBackUserInfo);

  console.log(userInfo);
  return (
    <div>
      <h1>Profile</h1>
      <FaUserCircle />
      <h2>{userInfo.name}</h2>
      <p>{userInfo.email}</p>
    </div>
  );
};

export default UserInfo;
