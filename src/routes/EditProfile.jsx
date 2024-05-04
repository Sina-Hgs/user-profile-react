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
      <form action="/" className="relative m-auto w-full text-center">
        <label htmlFor="name">
          <h3 className="text-sm py-1 lg:w-[50%] m-auto text-left text-slate-300 max-lg:w-full">
            Full Name
          </h3>
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
        focus:shadow-2xl
        hover:bg-zinc-900
        hover:shadow-2xl
        transition-all
        lg:w-[50%]
        "
          />
        </label>

        <label htmlFor="email">
          <h3 className="text-sm py-1 lg:w-[50%] m-auto text-left text-slate-300 max-lg:w-full">
            E-mail
          </h3>{" "}
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
        focus:shadow-2xl
        hover:bg-zinc-900
        hover:shadow-2xl
        transition-all
        lg:w-[50%]
        "
          />
        </label>

        <label htmlFor="gender">
          <h3 className="text-sm py-1 lg:w-[50%] m-auto text-left text-slate-300 max-lg:w-full">
            Gender
          </h3>
          <DropDown
            defaultValue={userGender.gender}
            selections={["Not Specified", "Male", "Female"]}
            labelName={"gender"}
            notEditable={false}
          />
        </label>

        <label htmlFor="date">
          <h3 className="text-sm py-1 lg:w-[50%] m-auto text-left text-slate-300 max-lg:w-full">
            Birthday
          </h3>
          <Calender
            defaultValue={userBirth.birthDate}
            labelName={"date"}
            notEditable={false}
          />
        </label>

        <div>
          <button
            type="submit"
            onClick={handleClick}
            className="w-full my-12 rounded-md p-2 bg-sky-600 text-black font-semibold focus:shadow-md focus:shadow-blue-500/50 
            hover:shadow-md 
            hover:shadow-blue-500/50 
            transition-all
          lg:w-[50%] lg:mb-12"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
