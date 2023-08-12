import { useState } from "react";
import Modal from "../../components/Modal";
import { FORM_DATA } from "../../constants/job";
import Step1 from "../forms/Step1";
import Step2 from "../forms/Step2";

const CreateJob = (props) => {
  const { open, setOpen, jobList, setJobList } = props;
  const [formIndex, setFormIndex] = useState(1);
  const [formData, setFormData] = useState(FORM_DATA);

  function onClose() {
    setOpen(false);
    setFormData(FORM_DATA);
    setTimeout(() => {
      setFormIndex(1);
    }, 500);
  }
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
          setFormIndex={setFormIndex}
          formData={formData}
          setFormData={setFormData}
          setOpen={setOpen}
          jobList={jobList}
          setJobList={setJobList}
        />
      )}
    </Modal>
  );
};

export default CreateJob;
