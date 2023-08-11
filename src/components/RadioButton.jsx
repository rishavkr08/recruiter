const RadioButton = (props) => {
  const { checked, setChecked, label, wrapperClasses } = props;

  return(
    <div className={"flex items-center " + wrapperClasses}>
      <input
        className="default:ring-2 indeterminate:bg-gray-900 cursor-pointer"
        type="radio"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div className="flex text-slate-500 text-sm font-medium ml-1">{label}</div>
    </div>
  );
}

export default RadioButton;
