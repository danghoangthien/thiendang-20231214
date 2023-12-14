import ChartType from './ChartType';

const ChartTypes = () => {
  return <>
    <span>Select chart types:</span>
    {[0, 1].map((no: number) => (
        <ChartType key={no} no={no} />
      ))}
  </>
}

export default ChartTypes;