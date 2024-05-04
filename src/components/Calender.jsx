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
        className="mb-2 w-full p-1 bg-inherit border-2 
        rounded-md border-solid border-slate-100
        focus:bg-zinc-900
        transition-all
       
        "
      />
    </>
  );
};

export default Calender;
