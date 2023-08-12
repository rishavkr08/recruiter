import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CreateJob from "./Create";
import jobsApi from "../apis/job";
import List from "./list";
import Loader from "../components/Loader";

const Job = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [jobList, setJobList] = useState([]);

  const getJobs = async () => {
    try {
      setIsLoading(true);
      const { data } = await jobsApi.fetch();
      setJobList(data);
    } catch (e) {
      console.error("An error occurred:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-100">
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
      <CreateJob
        open={open}
        setOpen={setOpen}
        jobList={jobList}
        setJobList={setJobList}
      />
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <Loader classNames="!h-16 !w-16" />
        </div>
      ) : jobList.length !== 0 ? (
        <div className="flex bg-gray-100 w-full">
          <List
            isLoading={isLoading}
            jobList={jobList}
            setJobList={setJobList}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center text-3xl mt-80">
          No Job Found
        </div>
      )}
    </div>
  );
};

export default Job;
