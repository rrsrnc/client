import React from 'react';
import { LineChart, Legend, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
// import {tdata} from './tabledata';


const GenMulti = (props) => {
let mykey = props.graphtype ? props.graphtype : 'temperature1';
let mycolor = props.color ? props.color : "#1899a5";
let maindata = props.maindata;
// console.log(`mykey=${mykey}`);
return (
    <LineChart width={500} height={400} data={maindata}>
      <CartesianGrid strokeDasharray="3 3" />
      <Legend verticalAlign='top'/>
      <Line type="function" dataKey={mykey} stroke={mycolor} isAnimationActive={false}/>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip/>
    </LineChart>
  );
};

export default GenMulti;
