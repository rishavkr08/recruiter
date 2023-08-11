import React, { useState } from "react";
import TextField from "../../components/TextField";
import RadioGroup from "../../components/RadioGroup";

const Form2 = (props) => {
  const { setFormIndex } = props;
  const [applyTypeOptions, setApplyTypeOptions] = useState([
    { label: "Quick apply", checked: false },
    { label: "External apply", checked: false },
  ]);
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
              placeholder="Minimum"
              wrapperClasses="mb-6 mr-6"
            />
          </div>
          <div className="flex-1">
            <TextField placeholder="Maximum" wrapperClasses="mb-6 mt-5" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex-1">
            <TextField
              label="Salary"
              placeholder="Minimum"
              wrapperClasses="mb-6 mr-6"
            />
          </div>
          <div className="flex-1">
            <TextField placeholder="Maximum" wrapperClasses="mb-6 mt-5" />
          </div>
        </div>
        <TextField
          label="Total employee"
          placeholder="ex. 100"
          wrapperClasses="mb-6"
        />
        <RadioGroup
          label="Apply type"
          options={applyTypeOptions}
          setOptions={setApplyTypeOptions}
        />
      </div>
      <div className="flex justify-end m-8 mt-24">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
          onClick={() => setFormIndex(1)}
        >
          Save
        </button>
      </div>
    </React.Fragment>
  );
};

export default Form2;
