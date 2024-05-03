import useLocalStorage from "../hooks/useLocalStorage";

const Calender = ({ defaultValue }) => {
  const [userBirth, setUserBirth] = useLocalStorage("userBirth");
  return (
    <>
      <input
        type="date"
        defaultValue={defaultValue}
        onChange={(e) => {
          setUserBirth({ birthDate: e.target.value });
        }}
      />
    </>
  );
};

export default Calender;
