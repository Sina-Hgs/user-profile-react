import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

import UserInfo from "../components/UserInfo";
import Calender from "../components/Calender";
import DropDown from "../components/DropDown";
import BottomSheet from "../components/BottomSheet";

import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";

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
    <div className="flex flex-col relative w-[100%] h-[100%] py-5 px-4 m-auto justify-evenly items-left">
      <UserInfo />

      <div className="mt-5 w-full flex flex-col justify-center items-center text-white lg:items-center">
        <h3 className="text-sm py-1 lg:w-[50%] text-slate-300 max-lg:w-full">
          Gender
        </h3>
        <DropDown
          defaultValue={userGender.gender}
          selections={["Not Specified", "Male", "Female"]}
          notEditable={true}
        />
        <div className="mt-2 w-full flex flex-col justify-center items-center text-white lg:items-center lg:text-base">
          <h3 className="text-sm py-1 lg:w-[50%] text-slate-300 max-lg:w-full lg:text-base">
            Birthday
          </h3>
          <Calender defaultValue={userBirth.birthDate} notEditable={true} />
        </div>
      </div>

      <div className="flex flex-col items-start justify-evenly font-normal py-5 lg:flex-row lg:items-center lg:text-xl">
        <div className="flex flex-row items-center justify-evenly  py-2 mb-1">
          <HiOutlineUser className="size-5 mr-3" />
          <button
            onClick={() => {
              Navigate("./edit-profile");
            }}
            className="focus:tracking-wider focus:font-semibold
            focus:underline
            hover:tracking-wider
            hover:font-semibold 
            hover:underline underline-offset-4
            transition-all"
          >
            Edit Profile
          </button>
        </div>

        <div className="flex flex-row items-center justify-evenly py-5 text-red-600">
          <HiOutlineLogout className="size-5 mr-3" />
          <button
            onClick={() => {
              content ? setContent(null) : setContent(<BottomSheet />);
            }}
            className="focus:tracking-wider focus:font-semibold
            focus:underline
            hover:tracking-wider
            hover:font-semibold 
            hover:underline underline-offset-4 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
      {content}
    </div>
  );
};

export default ProfilePage;
