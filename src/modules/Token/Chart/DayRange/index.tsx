import DayTag from "./DayTag";

const DayRange = () => {
  return (
    <>
      <span>Select day range:</span>
      {["1", "7", "14", "30"].map((numberOfDays: string) => (
        <DayTag numberOfDays={numberOfDays} />
      ))}
    </>
  );
};

export default DayRange;
