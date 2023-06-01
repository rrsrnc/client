import React from 'react';
import { LineChart, Legend, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// import {tdata} from './tabledata';


const IndiTemps = ({data}) => {
return (
    <LineChart width={600} height={450} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <Legend verticalAlign='top'/>
      <Line type="function" dataKey="temperature1" stroke="#df0000" isAnimationActive={false}/>
      <Line type="function" dataKey="temperature2" stroke="#00bf00" isAnimationActive={false}/>
      <Line type="function" dataKey="temperature3" stroke="#0000df" isAnimationActive={false}/>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip/>
    </LineChart>
  );
};

export default IndiTemps;
