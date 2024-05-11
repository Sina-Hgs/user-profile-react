import { HiOutlineArrowLeft } from "react-icons/hi2";

type Props = {
  onClick: () => void;
};

const BackButton = ({ onClick }: Props) => {
  return (
    <div className="flex flex-col relative w-[100%] h-5 py-5 px-4 m-auto justify-start items-left">
      <button
        onClick={onClick}
        role="button"
        className="flex flex-row items-center justify-start focus:tracking-wider focus:font-semibold transition-all mb-7"
      >
        <HiOutlineArrowLeft className="size-5 mr-3" />
        Back
      </button>
    </div>
  );
};

export default BackButton;
