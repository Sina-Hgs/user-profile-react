import { FormEvent } from "react";

type Props = {
  defaultValue: string;
  labelName: string;
  notEditable: boolean;
  onChangeHandler: (e: FormEvent<HTMLInputElement>) => void;
};

const Calender = ({
  defaultValue,
  labelName,
  notEditable,
  onChangeHandler,
}: Props) => {
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
      />
    </>
  );
};

export default Calender;
