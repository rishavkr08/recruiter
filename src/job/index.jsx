import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import List from "./list";
import CreateJob from "./create";

const Job = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen w-screen">
      <div className="flex items-center justify-between bg-white w-full h-min p-4">
        <div className="text-primary text-lg font-bold">Recruiter</div>
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
      </div>
      <CreateJob open={open} setOpen={setOpen} />
      <List />
    </div>
  );
};

export default Job;
