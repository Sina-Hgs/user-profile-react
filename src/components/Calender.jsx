import useLocalStorage from "../hooks/useLocalStorage";

const Calender = ({ defaultValue, labelName, notEditable }) => {
  const [userBirth, setUserBirth] = useLocalStorage("userBirth");
  return (
    <>
      <input
        name={labelName}
        id={labelName}
        type="date"
        required
        defaultValue={defaultValue}
        readOnly={notEditable}
        onChange={(e) => {
          setUserBirth({ birthDate: e.target.value });
        }}
      />
    </>
  );
};

export default Calender;
