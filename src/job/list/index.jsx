import { useEffect, useState } from "react";
import jobsApi from "../../apis/job";
import Card from "./Card";

const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobList, setJobList] = useState([]);

  const getJobs = async () => {
    try {
      setIsLoading(true);
      const { data } = await jobsApi.fetch();
      setJobList(data);
    } catch (e) {
      // logger.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="flex h-full w-full bg-gray-100">
      {isLoading ? (
        <div className="flex items-center justify-center text-3xl h-full w-full">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-6 w-full m-6 md:mx-24">
          {jobList.map((job) => (
            <Card {...job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
