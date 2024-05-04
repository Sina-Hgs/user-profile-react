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
        className="mb-2 w-full p-2 bg-inherit border-2 
        rounded-md border-solid border-slate-100
        focus:bg-zinc-900
        focus:shadow-2xl
        hover:bg-zinc-900
        hover:shadow-2xl
        transition-all
        lg:w-[50%]
        "
      />
    </>
  );
};

export default Calender;
