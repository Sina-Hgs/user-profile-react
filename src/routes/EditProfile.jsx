import { useRef } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

import DropDown from "../components/DropDown";
import Calender from "../components/Calender";

import { HiOutlineArrowLeft } from "react-icons/hi";

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
    <div className="flex flex-col relative w-[100%] h-[100%] py-5 px-4 m-auto justify-start items-left">
      <Link
        to={"/"}
        role="button"
        className="flex flex-row items-center justify-start focus:tracking-wider focus:font-semibold transition-all mb-7"
      >
        <HiOutlineArrowLeft className="size-5 mr-3" />
        Back
      </Link>
      <form action="/">
        <label htmlFor="name">
          <h3 className="text-sm py-1 w-full text-slate-300 ">Full Name</h3>
          <input
            id="name"
            name="name"
            required
            type="text"
            defaultValue={userInfo.name}
            onChange={(e) => {
              nameRef.current = e.target.value;
            }}
            className="mb-2 w-full p-2 bg-inherit border-2 
        rounded-md border-solid border-slate-100
        focus:bg-zinc-900
        transition-all
        "
          />
        </label>

        <label htmlFor="email">
          <h3 className="text-sm py-1 w-full text-slate-300">E-mail</h3>{" "}
          <input
            id="email"
            name="email"
            required
            type="email"
            defaultValue={userInfo.email}
            onChange={(e) => {
              emailRef.current = e.target.value;
            }}
            className="mb-2 w-full p-2 bg-inherit border-2 
        rounded-md border-solid border-slate-100
        focus:bg-zinc-900
        transition-all
        "
          />
        </label>

        <label htmlFor="gender">
          <h3 className="text-sm py-1 w-full text-slate-300">Gender</h3>
          <DropDown
            defaultValue={userGender.gender}
            selections={["Not Specified", "Male", "Female"]}
            labelName={"gender"}
            notEditable={false}
          />
        </label>

        <label htmlFor="date">
          <h3 className="text-sm py-1 w-full text-slate-300">Birthday</h3>
          <Calender
            defaultValue={userBirth.birthDate}
            labelName={"date"}
            notEditable={false}
          />
        </label>

        <button
          type="submit"
          onClick={handleClick}
          className="w-full my-12 rounded-md p-2 bg-sky-600 text-black font-semibold focus:shadow-lg focus:shadow-blue-500/50 transition-all"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
