import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DropDown = ({ defaultValue, selections }) => {
  const [options, setOptions] = useState([]);
  // const [selected, setSelected] = useState(defaultValue);

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
        required
        defaultValue={0}
        onChange={(e) => {
          setUserGender({ gender: e.target.value });
        }}
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
