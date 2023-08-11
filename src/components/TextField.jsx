const TextField = (props) => {
  const { disabled, label, placeholder, required, wrapperClasses } = props;
  return (
    <div className={"flex flex-col " + wrapperClasses}>
			<div className="flex text-gray-900 text-sm font-medium mb-1">{label}{required && <div className="text-red-500">*</div>}</div>
      <input
        class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        required
      />
    </div>
  );
};

export default TextField;
