import Netflix from "../../assets/Netflix.png";
const Card = (props) => {
  const {
    applyType,
    companyName,
    id,
    industry,
    location,
    maxExperience,
    maxSalary,
    minExperience,
    minSalary,
    remoteType,
    title,
    totalEmployee,
  } = props;
  return (
    <div
      className="flex border border-gray-lighter bg-white rounded-lg px-6 py-4 max-h-80"
      key={id}
    >
      <div>
        <img src={Netflix} className="h-12 w-12 rounded-md" alt="logo" />
      </div>
      <div className="flex flex-col ml-2">
        <div className="text-xl text-dark">{title}</div>
        <div className="text-dark text-md">
          {companyName} - {industry}
        </div>
        <div className="text-gray-dark text-md mb-6">
          {location} ({remoteType})
        </div>
        <div className="text-dark text-md mb-2">
          Part-Time (9:00 am - 5:00pm IST)
        </div>
        <div className="text-dark text-md mb-2">
          Experience ({minExperience} - {maxExperience} years)
        </div>
        <div className="text-dark text-md mb-2">
          INR(₹) {minSalary} - {maxSalary} / Month
        </div>
        <div className="text-dark text-md mb-6">{totalEmployee} employees</div>
        {applyType === "external" ? (
          <button
            type="button"
            className="flex justify-center rounded-md border text-primary border-primary py-2 px-4 text-md font-semibold w-fit hover:border-blue-500 hover:text-blue-500"
          >
            External Apply
          </button>
        ) : (
          <button
            type="button"
            className="flex justify-center rounded-md bg-primary py-2 px-4 text-md font-semibold w-fit text-white hover:bg-blue-500"
          >
            Apply Now
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
