const Loader = (props) => {
  const { classNames, loadingText } = props;
  return (
    <div>
      <div
        className={
          classNames + " h-4 w-4 animate-spin rounded-full border-2 border-solid border-primary border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
        }
      />
      <div>{loadingText}</div>
    </div>
  );
};

export default Loader;
