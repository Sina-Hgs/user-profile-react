import { FormEvent } from "react";

type Props = {
  defaultValue: string;
  selections: string[];
  labelName: string;
  notEditable: boolean;
  onChangeHandler: (e: FormEvent<HTMLSelectElement>) => void;
};

const DropDown = ({
  defaultValue,
  selections,
  labelName,
  notEditable,
  onChangeHandler,
}: Props) => {
  return (
    <>
      <select
        name={labelName}
        id={labelName}
        required
        disabled={notEditable}
        defaultValue={0}
        onChange={(e) => {
          onChangeHandler(e);
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
      >
        <option value={0} disabled hidden>
          {defaultValue}
        </option>
        {selections.map((option: string, index: number) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
