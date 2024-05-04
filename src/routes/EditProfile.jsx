import { useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import DropDown from "../components/DropDown";
import Calender from "../components/Calender";

const EditProfile = () => {
  // LOCAL STORAGE STATES
  const [userInfo, setUserInfo] = useLocalStorage("userInfo");
  const [userGender, setUserGender] = useLocalStorage("userGender");
  const [userBirth, setUserBirth] = useLocalStorage("userBirth");

  // REFS FOR THE INPUT STATE HANDLING
  const nameRef = useRef(userInfo.name);
  const emailRef = useRef(userInfo.email);

  // HANDLE Click FOR THE UPDATE BUTTON
  const handleClick = () => {
    setUserInfo({
      name: nameRef.current,
      email: emailRef.current,
    });
  };

  return (
    <form action="/">
      <label htmlFor="name">
        <input
          id="name"
          name="name"
          required
          type="text"
          defaultValue={userInfo.name}
          onChange={(e) => {
            nameRef.current = e.target.value;
          }}
        />
      </label>

      <label htmlFor="email">
        <input
          id="email"
          name="email"
          required
          type="email"
          defaultValue={userInfo.email}
          onChange={(e) => {
            emailRef.current = e.target.value;
          }}
        />
      </label>

      <label htmlFor="gender">
        <DropDown
          defaultValue={userGender.gender}
          selections={["Not Specified", "Male", "Female"]}
          labelName={"gender"}
          notEditable={false}
        />
      </label>

      <label htmlFor="date">
        <Calender
          defaultValue={userBirth.birthDate}
          labelName={"date"}
          notEditable={false}
        />
      </label>

      <button type="submit" onClick={handleClick}>
        UpdateButton
      </button>
    </form>
  );
};

export default EditProfile;
