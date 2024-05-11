import { ChangeEvent, FormEvent, useRef, useState } from "react";
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

  // const [nameState, setNameState] = useState(userInfo.name);
  // const [emailState, setEmailState] = useState(userInfo.name);
  const [formData, setFormData] = useState({
    name: userInfo.name,
    email: userInfo.email,
  });

  const [fieldValidationErrors, setFieldValidationErrors] = useState({
    name: "",
    email: "",
  });

  // REFS FOR THE INPUT STATE HANDLING
  // const nameRef = useRef(userInfo.name);
  // const emailRef = useRef(userInfo.email);

  // HANDLE Click FOR THE UPDATE BUTTON
  const onSubmit = (e: FormEvent<any>) => {
    e.preventDefault();

    setUserInfo({
      name: formData.name,
      email: formData.email,
    });
  };

  // FORM VALIDATION FUNCTION
  const validateForm = (inputName: string, value: string) => {
    let nameValid;
    let emailValid;

    switch (inputName) {
      case "name":
        nameValid = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(value);
        console.log(nameValid);
        fieldValidationErrors.name = nameValid ? "" : " is invalid";
        break;
      case "email":
        emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        console.log(emailValid);
        // fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
    }
  };

  // HANDLE CHANGE
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    validateForm(e.target.name, e.target.value);
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      <form
        action="/"
        className="relative m-auto w-full text-center"
        onSubmit={(e: FormEvent<any>) => onSubmit(e)}
      >
        <label htmlFor="name">
          <h3 className="text-sm py-1 lg:w-[50%] m-auto text-left text-slate-300 max-lg:w-full">
            Full Name
          </h3>
          <input
            id="name"
            name="name"
            required
            type="text"
            value={formData.name}
            defaultValue={userInfo.name}
            onChange={handleChange}
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
            value={formData.email}
            defaultValue={userInfo.email}
            onChange={handleChange}
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
            onChangeHandler={(e: FormEvent<HTMLSelectElement>) => {
              setUserGender({ gender: e.currentTarget.value });
            }}
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
            onChangeHandler={(e: FormEvent<HTMLInputElement>) =>
              setUserBirth({ birthDate: e.currentTarget.value })
            }
          />
        </label>

        <div>
          <button
            type="submit"
            // onClick={handleClick}
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
