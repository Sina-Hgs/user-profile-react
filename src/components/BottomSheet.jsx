import { useState } from "react";
import { Link } from "react-router-dom";

const BottomSheet = () => {
  const [display, setDisplay] = useState("hidden");

  return (
    <div className={` absolute bg-slate-950 w-screen`}>
      <Link className="w-10 yellow-600 bg-red-400" reloadDocument to={"/"}>
        Cancel
      </Link>
      <button
        className="w-10 yellow-600 bg-red-400"
        onClick={() => {
          localStorage.clear();
          setDisplay("visible");
        }}
      >
        Logout
      </button>

      <div className={`${display} bg-blue-600`}>
        You've been logged out and your data is removed from the local storage
        <Link reloadDocument to={"/"} role="button" className="m-12">
          Try the app again
        </Link>
      </div>
    </div>
  );
};

export default BottomSheet;
