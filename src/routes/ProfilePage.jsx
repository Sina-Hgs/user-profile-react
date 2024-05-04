import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

import UserInfo from "../components/UserInfo";
import Calender from "../components/Calender";
import DropDown from "../components/DropDown";
import BottomSheet from "../components/BottomSheet";
import { useState } from "react";

const ProfilePage = () => {
  const Navigate = useNavigate();

  const [content, setContent] = useState(null);

  // USER GENDER INITIAL VALUE
  const fallBackUserGender = {
    gender: "Not Specified",
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
      <DropDown
        defaultValue={userGender.gender}
        selections={["Not Specified", "Male", "Female"]}
        notEditable={true}
      />
      <Calender defaultValue={userBirth.birthDate} notEditable={true} />

      <button
        onClick={() => {
          Navigate("./edit-profile");
        }}
      >
        Edit Profile
      </button>

      <button
        onClick={() => {
          content ? setContent(null) : setContent(<BottomSheet />);
        }}
      >
        Logout
      </button>
      {content}
    </>
  );
};

export default ProfilePage;
