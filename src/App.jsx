import { Route, Routes } from "react-router-dom";
import ProfilePage from "./routes/ProfilePage";
import EditProfile from "./routes/EditProfile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="edit-profile" element={<EditProfile />} />
      </Routes>
    </>
  );
};

export default App;
