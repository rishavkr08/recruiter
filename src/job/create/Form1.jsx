import React from "react";
import TextField from "../../components/TextField";

const Form1 = (props) => {
  const { setFormIndex } = props;
  return (
    <React.Fragment>
      <div className="m-8">
        <div className="flex justify-between mb-6">
          <div className="text-lg">Create a Job</div>
          <div>Step 1</div>
        </div>
        <TextField
          label="Job title"
          placeholder="ex. UX UI Designer"
          wrapperClasses="mb-6"
          required
        />
        <TextField
          label="Company name"
          placeholder="ex. Google"
          wrapperClasses="mb-6"
          required
        />
        <TextField
          label="Industry"
          placeholder="ex. Information Technology"
          wrapperClasses="mb-6"
          required
        />
        <div className="flex justify-between">
          <div className="flex-1">
            <TextField
              label="Location"
              placeholder="ex. Chennai"
              wrapperClasses="mb-6 mr-6"
            />
          </div>
          <div className="flex-1">
            <TextField
              label="Remote type"
              placeholder="ex. In-office"
              wrapperClasses="mb-6"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end m-8 mt-20">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
          onClick={() => setFormIndex(2)}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
};

export default Form1;
