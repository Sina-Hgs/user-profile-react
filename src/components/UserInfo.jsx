import useLocalStorage from "../hooks/useLocalStorage";

import { FaUserCircle } from "react-icons/fa";

const UserInfo = () => {
  //  USER INFO INITIAL VALUES
  const fallBackUserInfo = {
    name: "Sina Haghshenas",
    email: "example@gmail.com",
  };

  const [userInfo, setUserInfo] = useLocalStorage("userInfo", fallBackUserInfo);

  // console.log(userInfo);
  return (
    <>
      <h1 className="font-semibold text-sm lg:text-lg">Profile</h1>
      <div className="flex flex-col justify-evenly items-center">
        <FaUserCircle className="size-24 m-2" />
        <h2 className="m-1 font-bold text-xl lg:text-2xl">{userInfo.name}</h2>
        <p className="text-sm lg:text-lg">{userInfo.email}</p>
      </div>
    </>
  );
};

export default UserInfo;
