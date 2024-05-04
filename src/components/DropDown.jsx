import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DropDown = ({ defaultValue, selections, labelName, notEditable }) => {
  const [options, setOptions] = useState([]);

  const [userGender, setUserGender] = useLocalStorage("userGender");

  useEffect(() => {
    setOptions([]);
    for (let i = 0; i < selections.length; i++) {
      setOptions((prev) => [
        ...prev,
        <option value={selections[i]} key={i}>
          {selections[i]}
        </option>,
      ]);
    }
  }, [selections]);

  return (
    <>
      <select
        name={labelName}
        id={labelName}
        required
        disabled={notEditable}
        defaultValue={0}
        onChange={(e) => {
          setUserGender({ gender: e.target.value });
        }}
        className="mb-2 w-full p-2 bg-inherit border-2 
        rounded-md border-solid border-slate-100
        focus:bg-zinc-900
        transition-all
        "
      >
        <option value={0} disabled hidden>
          {defaultValue}
        </option>
        {...options}
      </select>
    </>
  );
};

export default DropDown;
