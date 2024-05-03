import { useState, useEffect } from "react";

const DropDown = ({ defaultValue, values }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions([]);
    for (let i = 0; i < values.length; i++) {
      setOptions((prev) => [
        ...prev,
        <option value={values[i]} key={i}>
          {values[i]}
        </option>,
      ]);
    }
  }, [values]);

  return (
    <select required defaultValue={0}>
      <option value={0} disabled hidden>
        {defaultValue}
      </option>
      {...options}
    </select>
  );
};

export default DropDown;
