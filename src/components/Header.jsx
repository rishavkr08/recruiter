import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CreateJob from "../job/create";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-end bg-white w-full h-min p-4">
      <button
        className="text-sm bg-primary hover:bg-blue-500 text-white font-bold px-4 rounded h-10 flex items-center"
        onClick={() => setOpen(true)}
      >
        <PlusCircleIcon
          className="h-4 w-4 font-bold mr-1"
          aria-hidden="true"
        />
        Create Job
      </button>
      {open && <CreateJob open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Header;
