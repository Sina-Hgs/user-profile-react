import { useNavigate } from "react-router-dom";

import UserInfo from "../components/UserInfo";

const ProfilePage = () => {
  const Navigate = useNavigate();
  return (
    <>
      <UserInfo />

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
