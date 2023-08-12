const TextField = (props) => {
  const {
    data,
    disabled,
    error,
    name,
    label,
    placeholder,
    required,
    setData,
    wrapperClasses,
  } = props;

  const changeDateHandler = (event) => {
    setData(event.target.value, name)
  }

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
        type="text"
        value={data}
        required
      />
      {error && (
        <div className="flex text-error text-xs font-light mb-1">{error}</div>
      )}
    </div>
  );
};

export default TextField;
