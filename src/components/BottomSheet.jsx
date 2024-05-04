import { useState } from "react";
import { Link } from "react-router-dom";

const BottomSheet = () => {
  const [display, setDisplay] = useState("hidden");

  return (
    <div
      className="
      fixed
      height-[100%] bg-zinc-800 w-[100%] px-3 bottom-0  pb-12 bg-inherit  z-50
        rounded-t-3xl 
        transition-all
        flex flex-col justify-evenly items-center
        "
    >
      <hr className="bg-white p-0.5 rounded-full  w-12 mt-2" />
      <h2 className="text-red-600 font-bold text-2xl text-center py-5">
        Logout
      </h2>
      <p className="text-center pb-12">Are you sure you want to logout?</p>
      <div className="w-full flex flex-row justify-evenly items-center">
        <Link
          className="w-[100%] mx-2 rounded-md p-3 bg-white text-sm text-sky-600 text-center font-semibold focus:shadow-md focus:hover:shadow-slate-500
          hover:shadow-md
          hover:shadow-slate-500
          transition-all
          lg:w-[40%] "
          reloadDocument
          to={"/"}
        >
          Cancel
        </Link>
        <button
          className="w-[100%] mx-2 rounded-md p-3 bg-sky-600 text-black text-center text-sm font-semibold focus:shadow-md focus:shadow-blue-500/50 
          hover:shadow-md
          hover:shadow-blue-500/50 
          transition-all
          lg:w-[40%] "
          onClick={() => {
            localStorage.clear();
            setDisplay("visible");
          }}
        >
          Yes, logout!
        </button>
      </div>

      <div
        className={`${display} absolute bottom-1 w-[90%] height-[100%] mx-7 my-10 px-6 py-12 bg-zinc-100 rounded-2xl text-black flex flex-col justify-end items-center`}
      >
        <h2 className="text-green-600 font-bold text-2xl text-center py-5">
          Logout Successful!
        </h2>
        <p>
          You've been logged out and your data is removed from the local storage
        </p>
        <Link
          reloadDocument
          to={"/"}
          role="button"
          className="w-full mt-12 rounded-md p-2 bg-sky-600 text-black  text-center font-semibold focus:shadow-md focus:shadow-blue-500/50 
            hover:shadow-md 
            hover:shadow-blue-500/50 
            transition-all
          lg:w-[50%] lg:mb-12"
        >
          Try the app again!
        </Link>
      </div>
    </div>
  );
};

export default BottomSheet;
