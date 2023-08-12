import { useState } from "react";

const TextField = (props) => {
  const {
    data,
    disabled,
    name,
    label,
    placeholder,
    required,
    setData,
    type = "text",
    wrapperClasses,
  } = props;

  const [showError, setShowError] = useState(false);

  const changeDateHandler = (event) => {
    setData(event.target.value, name);
  };

  return (
    <div className={"flex flex-col " + wrapperClasses}>
      <div className="flex text-gray-900 text-sm font-medium mb-1">
        {label}
        {required && <div className="text-error">*</div>}
      </div>
      <input
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-dark"
        disabled={disabled}
        name={name}
        onChange={changeDateHandler}
        placeholder={placeholder}
        type={type}
        value={data}
        onBlur={(e) => {
          if (!e.target.value && required) setShowError(true);
        }}
        required
      />
      {showError && (
        <div className="flex text-error text-xs font-light mb-1">Required</div>
      )}
    </div>
  );
};

export default TextField;
