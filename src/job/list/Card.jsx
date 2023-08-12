import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Netflix from "../../assets/Netflix.png";
import jobsApi from "../../apis/job";
import { formatExperienceRange, formatSalaryRange } from "../../formatters/job";
import { useState } from "react";
import Loader from "../../components/Loader";
import JobEdit from "../Edit";

const Card = (props) => {
  const {
    applyType,
    companyName,
    id,
    industry,
    job,
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
  const [formData, setFormData] = useState(job);
  const [openEditModal, setOpenEditModal] = useState(false);

  const deleteJob = async () => {
    try {
      setIsLoading(true);
      const response = await jobsApi.destroy(id);
      if (response.status === 200) {
        setJobList([...jobList.filter((job) => job.id !== id)]);
      }
    } catch (e) {
      console.error("An error occurred:", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={
        "flex border border-gray-lighter bg-white rounded-lg px-6 py-4 min-h-80 " +
        (isLoading && "opacity-50 cursor-wait")
      }
      key={id}
    >
      <div>
        <img src={Netflix} className="h-12 w-12 rounded-md" alt="logo" />
      </div>
      <div className="flex flex-col ml-2 w-5/6">
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
      <div className="flex justify-end w-1/6">
        {isLoading ? (
          <Loader classNames="border-error" />
        ) : (
          <div className="flex">
            <PencilSquareIcon
              className="h-5 w-5 cursor-pointer text-primary mr-4"
              onClick={() => setOpenEditModal(true)}
            />
            <TrashIcon
              className="h-5 w-5 cursor-pointer text-red-500"
              onClick={deleteJob}
            />
          </div>
        )}
      </div>
      <JobEdit
        id={id}
        formData={formData}
        setFormData={setFormData}
        open={openEditModal}
        setOpen={setOpenEditModal}
        jobList={jobList}
        setJobList={setJobList}
      />
    </div>
  );
};

export default Card;
