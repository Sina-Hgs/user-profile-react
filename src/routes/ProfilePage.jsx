import Calender from "../components/Calender";
import DropDown from "../components/DropDown";

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile</h1>
      <h2>Sina</h2>
      <p>myemail@gmail.com</p>
      <DropDown defaultValue={'Gender'} values={["Male", "Female"]} />
      <Calender />
    </div>
  );
};

export default ProfilePage;
