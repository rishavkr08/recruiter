import Card from "./Card";

const List = (props) => {
  const { jobList, setJobList } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row w-full gap-6 m-6 md:mx-24">
      {jobList.map((job) => (
        <Card
          {...job}
          job={job}
          key={job.id}
          jobList={jobList}
          setJobList={setJobList}
        />
      ))}
    </div>
  );
};

export default List;
