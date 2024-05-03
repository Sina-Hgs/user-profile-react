import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

import UserInfo from "../components/UserInfo";
import Calender from "../components/Calender";
import DropDown from "../components/DropDown";

const ProfilePage = () => {
  const Navigate = useNavigate();

  // USER GENDER INITIAL VALUE
  const fallBackUserGender = {
    gender: "Select Gender",
  };

  const [userGender, setUserGender] = useLocalStorage(
    "userGender",
    fallBackUserGender
  );

  // USER BIRTH-DATE INITIAL VALUE
  const fallBackUserBirth = {
    birthDate: "2020-01-01",
  };

  const [userBirth, setUserBirth] = useLocalStorage(
    "userBirth",
    fallBackUserBirth
  );

  return (
    <>
      <UserInfo />
      <DropDown defaultValue={userGender.gender} selections={["Male", "Female"]} />
      <Calender defaultValue={userBirth.birthDate} />

      <button
        onClick={() => {
          Navigate("./edit-profile");
        }}
      >
        Edit Profile
      </button>
      <div>Logout</div>
    </>
  );
};

export default ProfilePage;
