import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

const App = () => {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center">
          <FiSearch className="absolute ml-1 text-3xl text-white" />
          <input
            type="text"
            className=" h-10 flex-grow border border-white rounded-md bg-transparent pl-9 text-white"
          />
        </div>
        <AiFillPlusCircle className=" cursor-pointer text-5xl text-white" />
      </div>
    </div>
  );
};

export default App;
