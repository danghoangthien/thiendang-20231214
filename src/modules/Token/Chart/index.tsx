import { useSelector } from 'react-redux';
import ActiveChart from './ActiveChart';
import ChartTypes from './ChartTypes/index';
import DayRange from './DayRange/index';

const Chart = () => {
  const activeCoin = useSelector((state: any) => state.activeCoin);
  if (!activeCoin) {
    return <>No coin selected</>
  }



  return <>
    <DayRange />
    <hr />
    <ChartTypes />
    <hr />
    <ActiveChart />
  </>;
}

export default Chart;
