import { TrashIcon } from "@heroicons/react/24/outline";
import Netflix from "../../assets/Netflix.png";
import jobsApi from "../../apis/job";
import { formatExperienceRange, formatSalaryRange } from "../../formatters/job";
import { useState } from "react";
import Loader from "../../components/Loader";

const Card = (props) => {
  const {
    applyType,
    companyName,
    id,
    industry,
    jobList,
    location,
    maxExperience,
    maxSalary,
    minExperience,
    minSalary,
    remoteType,
    setJobList,
    title,
    totalEmployee,
  } = props;

  const [isLoading, setIsLoading] = useState(false);

  const deleteJob = async () => {
    try {
      setIsLoading(true);
      const response = await jobsApi.destroy(id);
      if (response.status === 200) {
        setJobList([...jobList.filter((job) => job.id !== id)]);
      }
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={"flex border border-gray-lighter bg-white rounded-lg px-6 py-4 min-h-80 " + (isLoading && "opacity-50 cursor-wait")}
      key={id}
    >
      <div>
        <img src={Netflix} className="h-12 w-12 rounded-md" alt="logo" />
      </div>
      <div className="flex flex-col ml-2 w-11/12">
        <div className="text-xl text-dark">{title}</div>
        <div className="text-dark text-md">
          {companyName} - {industry}
        </div>
        <div className="text-gray-dark text-md mb-6">
          {location} {remoteType && `(${remoteType})`}
        </div>
        <div className="text-dark text-md mb-2">
          Part-Time (9:00 am - 5:00pm IST)
        </div>
        {(minExperience || maxExperience) && (
          <div className="text-dark text-md mb-2">
            {formatExperienceRange(minExperience, maxExperience)}
          </div>
        )}
        {(minSalary || maxSalary) && (
          <div className="text-dark text-md mb-2">
            {formatSalaryRange(minSalary, maxSalary, "Monthly")}
          </div>
        )}
        {totalEmployee && (
          <div className="text-dark text-md mb-6">
            {totalEmployee} employees
          </div>
        )}
        <div className="mt-auto">
          {applyType === "external" ? (
            <button
              type="button"
              className="flex justify-center rounded-md border text-primary border-primary py-2 px-4 text-md font-semibold w-fit hover:border-blue-500 hover:text-blue-500"
            >
              External Apply
            </button>
          ) : (
            <button
              type="button"
              className="flex justify-center rounded-md bg-primary py-2 px-4 text-md font-semibold w-fit text-white hover:bg-blue-500"
            >
              Apply Now
            </button>
          )}
        </div>
      </div>
      <div className="flex bg-red- justify-end w-1/12 cursor-pointer">
        {isLoading ? (
          <Loader classNames="border-error" />
        ) : (
          <TrashIcon className="h-4 w-4 text-error" onClick={deleteJob} />
        )}
      </div>
    </div>
  );
};

export default Card;
