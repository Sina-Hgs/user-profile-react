import useLocalStorage from "../hooks/useLocalStorage";

import { FaUserCircle } from "react-icons/fa";

const UserInfo = () => {
  
    //  USER INFO INITIAL INFO
  const fallBackUserInfo = {
    name: "Sina",
    email: "example@gmail.com",
  };

  const [userData, setUserData] = useLocalStorage("userInfo", fallBackUserInfo);

  console.log(userData);
  return (
    <div>
      <h1>Profile</h1>
      <FaUserCircle />
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
    </div>
  );
};

export default UserInfo;
