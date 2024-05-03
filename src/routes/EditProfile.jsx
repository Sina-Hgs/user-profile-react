import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

import DropDown from "../components/DropDown";
import Calender from "../components/Calender";

const EditProfile = () => {
  const Navigate = useNavigate();

  // LOCAL STORAGE STATES
  const [userInfo, setUserInfo] = useLocalStorage("userInfo");
  const [userGender, setUserGender] = useLocalStorage("userGender");
  const [userBirth, setUserBirth] = useLocalStorage("userBirth");

  // HANDLE CLICK FOR THE UPDATE BUTTON
  const handleClick = () => {
    setUserInfo({
      name: "heyyy",
      email: "example@gmail.com",
    });
    // Navigate("/");
  };

  return (
    <>
      <h2>{userInfo.name}</h2>
      <p>{userInfo.email}</p>
      <DropDown
        defaultValue={userGender.gender}
        selections={["Male", "Female"]}
      />
      <Calender defaultValue={userBirth.birthDate} />
      <button onClick={handleClick}>UpdateButton</button>
    </>
  );
};

export default EditProfile;
