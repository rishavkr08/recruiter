import RadioButton from "./RadioButton";

const RadioGroup = (props) => {
  const { label, options, setOptions, required, verticalOrder } =
    props;

  const updateOptionChecked = (checked, i) => {
    setOptions([
      ...options.map((option, index) => ({
        label: option.label,
        checked: index === i ? checked : !checked,
        value: option.value,
      })),
    ]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex text-gray-900 text-sm font-medium mb-2">
        {label}
        {required && <div className="text-error">*</div>}
      </div>
      <div className={"flex " + (!!verticalOrder ? "flex-col" : "flex-row")}>
        {options.map((option, index) => {
          return (
            <RadioButton
              key={index}
              label={option.label}
              wrapperClasses={!!verticalOrder ? "mb-4" : "mr-4"}
              checked={option.checked}
              setChecked={() => updateOptionChecked(!option.checked, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
