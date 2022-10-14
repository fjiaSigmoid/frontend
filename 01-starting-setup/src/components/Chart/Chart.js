import React from 'react';
import CharBar from './CharBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    );
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <CharBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
