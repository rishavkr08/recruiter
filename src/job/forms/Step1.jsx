import React, { useCallback, useEffect, useState } from "react";
import TextField from "../../components/TextField";

const Step1 = (props) => {
  const { setFormIndex, formData, setFormData } = props;
  const [disabled, setDisabled] = useState(true);

  const setData = useCallback(
    (data, name) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: data,
      }));
    },
    [setFormData]
  );

  useEffect(() => {
    const { title, companyName, industry } = formData;
    setDisabled(!title || !companyName || !industry);
  }, [formData]);

  return (
    <React.Fragment>
      <div className="m-8">
        <div className="flex justify-between mb-6">
          <div className="text-lg">Create a Job</div>
          <div>Step 1</div>
        </div>
        <TextField
          label="Job title"
          data={formData.title}
          name="title"
          placeholder="ex. UX UI Designer"
          setData={setData}
          wrapperClasses="mb-6"
          required
        />
        <TextField
          label="Company name"
          data={formData.companyName}
          name="companyName"
          placeholder="ex. Google"
          setData={setData}
          wrapperClasses="mb-6"
          required
        />
        <TextField
          label="Industry"
          data={formData.industry}
          name="industry"
          placeholder="ex. Information Technology"
          setData={setData}
          wrapperClasses="mb-6"
          required
        />
        <div className="flex justify-between">
          <div className="flex-1">
            <TextField
              label="Location"
              data={formData.location}
              name="location"
              placeholder="ex. Chennai"
              setData={setData}
              wrapperClasses="mb-6 mr-6"
            />
          </div>
          <div className="flex-1">
            <TextField
              label="Remote type"
              data={formData.remoteType}
              name="remoteType"
              placeholder="ex. In-office"
              setData={setData}
              wrapperClasses="mb-6"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end m-8 mt-20">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm enabled:hover:bg-blue-500 sm:ml-3 sm:w-auto disabled:opacity-75"
          onClick={() => setFormIndex(2)}
          disabled={disabled}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
};

export default Step1;
