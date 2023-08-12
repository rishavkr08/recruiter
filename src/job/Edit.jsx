import { useState } from "react";
import Modal from "../components/Modal";
import Step1 from "./forms/Step1";
import Step2 from "./forms/Step2";
import jobsApi from "../apis/job";

const JobEdit = (props) => {
  const { id, formData, setFormData, open, setOpen, jobList, setJobList } =
    props;
  const [formIndex, setFormIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  function onClose(updated = false) {
    setOpen(false);
    setFormData(updated ? formData : jobList.find((job) => job.id === id));
    setTimeout(() => {
      setFormIndex(1);
    }, 500);
  }

  const updateJobList = (updatedJob) => {
    let tempJobList = [...jobList];
    const index = tempJobList.findIndex((job) => job.id === id);
    tempJobList[index] = updatedJob;
    setJobList(tempJobList);
  };

  const updateJob = async () => {
    try {
      setIsLoading(true);
      const { data } = await jobsApi.update(id, formData);
      updateJobList(data);
    } catch (e) {
      console.error("An error occurred:", e);
    } finally {
      setIsLoading(false);
      onClose(true);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      {formIndex === 1 ? (
        <Step1
          setFormIndex={setFormIndex}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        <Step2
          formData={formData}
          isLoading={isLoading}
          setFormData={setFormData}
          saveData={updateJob}
        />
      )}
    </Modal>
  );
};

export default JobEdit;
