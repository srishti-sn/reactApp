import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart=props=>{
let dataPointValues=props.dataPoints.map(element=>{return element.value});
let maxDataPointValue=Math.max(...dataPointValues);
return <div className='chart'>
{props.dataPoints.map(dataPoint=>{
return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxDataPointValue} label={dataPoint.label}></ChartBar>
})}
</div>
}

export default Chart;