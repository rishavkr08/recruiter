import { useState } from "react";
import Modal from "../../components/Modal";
import Form1 from "./Form1";
import Form2 from "./Form2";
import { FORM_DATA } from "../../constants/job";

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
        <Form1
          setFormIndex={setFormIndex}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        <Form2
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
