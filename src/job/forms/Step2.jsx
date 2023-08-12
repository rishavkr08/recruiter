import React, { useCallback, useEffect, useState } from "react";
import TextField from "../../components/TextField";
import RadioGroup from "../../components/RadioGroup";
import Loader from "../../components/Loader";

const Step2 = (props) => {
  const {
    formData,
    isLoading,
    setFormData,
    saveData,
  } = props;

  const [applyTypeOptions, setApplyTypeOptions] = useState([
    {
      label: "Quick apply",
      checked: formData.applyType === "quick",
      value: "quick",
    },
    {
      label: "External apply",
      checked: formData.applyType === "external",
      value: "external",
    },
  ]);

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
    setData(applyTypeOptions.find((item) => item.checked)?.value, "applyType");
  }, [applyTypeOptions, setData]);

  return (
    <React.Fragment>
      <div className="m-8">
        <div className="flex justify-between mb-6">
          <div className="text-lg">Create a Job</div>
          <div>Step 2</div>
        </div>
        <div className="flex justify-between">
          <div className="flex-1">
            <TextField
              label="Experience"
              data={formData.minExperience}
              name="minExperience"
              placeholder="Minimum"
              setData={setData}
              type="number"
              wrapperClasses="mb-6 mr-6"
            />
          </div>
          <div className="flex-1">
            <TextField
              data={formData.maxExperience}
              name="maxExperience"
              placeholder="Maximum"
              setData={setData}
              type="number"
              wrapperClasses="mb-6 mt-5"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex-1">
            <TextField
              label="Salary"
              data={formData.minSalary}
              name="minSalary"
              placeholder="Minimum"
              setData={setData}
              type="number"
              wrapperClasses="mb-6 mr-6"
            />
          </div>
          <div className="flex-1">
            <TextField
              data={formData.maxSalary}
              name="maxSalary"
              placeholder="Maximum"
              setData={setData}
              type="number"
              wrapperClasses="mb-6 mt-5"
            />
          </div>
        </div>
        <TextField
          label="Total employee"
          data={formData.totalEmployee}
          name="totalEmployee"
          placeholder="ex. 100"
          setData={setData}
          wrapperClasses="mb-6"
        />
        <RadioGroup
          label="Apply type"
          data={formData.applyType}
          name="applyType"
          options={applyTypeOptions}
          setData={setData}
          setOptions={setApplyTypeOptions}
        />
      </div>
      <div className="flex justify-end m-8 mt-24">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm enabled:hover:bg-blue-500 sm:ml-3 sm:w-auto disabled:opacity-75"
          onClick={saveData}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader classNames="border-white mr-1" /> Saving...
            </>
          ) : (
            "Save"
          )}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Step2;
