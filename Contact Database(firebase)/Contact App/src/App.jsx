import Navbar from "./components/Navbar";
import {FiSearch} from "react-icons/fi";

const App = () => {
  return <div className="mx-auto max-w-[370px] px-4">
    <Navbar />
    <div className="relative flex items-center">
      <FiSearch className="absolute ml-1 text-3xl text-white"/>
      <input type="text" className=" h-10 flex-grow border border-white rounded-md bg-transparent pl-9 text-white"/>
    </div>

  </div>; 
};

export default App;