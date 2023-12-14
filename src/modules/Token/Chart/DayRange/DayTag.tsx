import Chip from "@mui/material/Chip";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const StyledChip = styled(Chip)`
  background-color: ${(props) =>
    props.isSelected ? "#ff9800" : "#e0e0e0"} !important;
  color: ${(props) => (props.isSelected ? "white" : "black")} !important;
`;

const DayTag = ({ numberOfDays }: { numberOfDays: string }) => {
  const activeDayRange = useSelector((state: any) => state.activeDayRange);
  const dispatch = useDispatch();
  const handleChipClick = (numberOfDays: string) => {
    dispatch.activeDayRange.set(numberOfDays);
  };

  return (
    <StyledChip
      key={numberOfDays}
      label={numberOfDays}
      onClick={() => handleChipClick(numberOfDays)}
      style={{ margin: "4px" }}
      isSelected={activeDayRange === numberOfDays}
    />
  );
};

export default DayTag;
