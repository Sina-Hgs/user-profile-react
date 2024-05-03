import DropDown from "../components/DropDown";

const EditProfile = () => {
  return (
    <div>
      <DropDown defaultValue={"Gender"} values={["Male", "Female"]} />
    </div>
  );
};

export default EditProfile;
