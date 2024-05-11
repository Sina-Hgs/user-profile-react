import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditProfile from "./pages/EditPage/EditProfile";
import Register from "./pages/register/Register";

const App = () => {
  return (
    <>
      <div className="bg-zinc-800 absolute w-full h-full text-white font-sans">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
