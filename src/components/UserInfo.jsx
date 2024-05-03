import useLocalStorage from "../hooks/useLocalStorage";

import Calender from "../components/Calender";
import DropDown from "../components/DropDown";

import { FaUserCircle } from "react-icons/fa";

const UserInfo = () => {
  const fallBackUserInfo = {
    name: "Sina",
    email: "example@gmail.com",
    gender: "Select Gender",
    birthDate: "2020-01-01",
  };

  const [userData, setUserData] = useLocalStorage("user", fallBackUserInfo);

  console.log(userData);
  return (
    <div>
      <h1>Profile</h1>
      <FaUserCircle />
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
      <DropDown defaultValue={userData.gender} values={["Male", "Female"]} />
      <Calender defaultValue={userData.birthDate} />
    </div>
  );
};

export default UserInfo;
