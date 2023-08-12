import { useState } from "react";
import Modal from "../components/Modal";
import { FORM_DATA } from "../constants/job";
import Step1 from "./forms/Step1";
import Step2 from "./forms/Step2";
import jobsApi from "../apis/job";

const CreateJob = (props) => {
  const { open, setOpen, jobList, setJobList } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [formIndex, setFormIndex] = useState(1);
  const [formData, setFormData] = useState(FORM_DATA);

  function onClose() {
    setOpen(false);
    setFormData(FORM_DATA);
    setTimeout(() => {
      setFormIndex(1);
    }, 500);
  }

  const saveData = async () => {
    try {
      setIsLoading(true);
      const { data } = await jobsApi.create(formData);
      setJobList([...jobList, data]);
    } catch (e) {
      console.error("An error occurred:", e);
    } finally {
      setIsLoading(false);
      onClose();
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
          saveData={saveData}
        />
      )}
    </Modal>
  );
};

export default CreateJob;
