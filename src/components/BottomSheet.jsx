import { Link } from "react-router-dom";

const BottomSheet = () => {
  return (
    <div className={` absolute bg-slate-950 w-screen`}>
      <Link className="w-10 yellow-600 bg-red-400" reloadDocument to={"/"}>
        Cancel
      </Link>
      <button>Logout</button>
    </div>
  );
};

export default BottomSheet;
