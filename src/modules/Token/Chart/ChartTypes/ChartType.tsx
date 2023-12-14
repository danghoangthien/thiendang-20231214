import Chip from '@mui/material/Chip';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledChip = styled(Chip)`
  background-color: ${props => props.isSelected ? '#ff9800' : '#e0e0e0'} !important;
  color: ${props => props.isSelected ? 'white' : 'black'} !important;
`;

const CHART_TYPE = [
  'Price',
  'OHLC'
];

const ChartType = ({ no } : { no: number }) => {
  const activeChartType: number = useSelector((state: any) => state.activeChartType);
  const dispatch = useDispatch();
  const handleChipClick = (type: number) => {
    dispatch.activeChartType.set(type);
  };

  return <StyledChip
    key={activeChartType}
    label={CHART_TYPE[no]}
    onClick={() => handleChipClick(no)}
    style={{ margin: '4px' }}
    isSelected={activeChartType === no}
  />
}

export default ChartType;
