import { useState } from "react";
import Modal from "../../components/Modal";
import Form1 from "./Form1";
import Form2 from "./Form2";

const CreateJob = (props) => {
  const { open, setOpen } = props;
  const [formIndex, setFormIndex] = useState(1);
  const [formData, setFormData] = useState({
    applyType: "",
    companyName: "",
    industry: "",
    location: "",
    maxExperience: "",
    maxSalary: "",
    minExperience: "",
    minSalary: "",
    remoteType: "",
    title: "",
    totalEmployee: "",
  });
  return (
    <Modal open={open} setOpen={setOpen}>
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
        />
      )}
    </Modal>
  );
};

export default CreateJob;
