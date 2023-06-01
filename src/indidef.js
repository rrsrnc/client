import React from 'react';
import { LineChart, Legend, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// import {tdata} from './tabledata';


const IndiDef = ({data}) => {
return (
    <LineChart width={600} height={450} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <Legend verticalAlign='top'/>
      <Line type="function" dataKey="deflection" stroke="#6f0000" isAnimationActive={false}/>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip/>
    </LineChart>
  );
};

export default IndiDef;
