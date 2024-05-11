import { Route, Routes } from "react-router-dom";
import ProfilePage from "./routes/ProfilePage";
import EditProfile from "./routes/EditProfile";

const App = () => {
  return (
    <>
      <div className="bg-zinc-800 absolute w-full h-full text-white font-sans">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
