import React from 'react';
import { LineChart, Legend, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
// import {tdata} from './tabledata';


const Gengraph = (props) => {
let mykey = props.graphtype ? props.graphtype : 'temperature1';
let alltemps = false;
if(mykey==='Alltemperatures'){
  alltemps=true;
}
let mycolor = props.color ? props.color : "#1899a5";
let maindata = props.maindata;
// console.log(`mykey=${mykey}`);
return (
    <LineChart width={500} height={400} data={maindata}>
      <CartesianGrid strokeDasharray="3 3" />
      <Legend verticalAlign='top'/>
      {alltemps && <Line type="function" dataKey='temperature1' stroke='#df0000' isAnimationActive={false}/>}
      {alltemps && <Line type="function" dataKey='temperature2' stroke='#00bf00' isAnimationActive={false}/>}
      {alltemps && <Line type="function" dataKey='temperature3' stroke='#0000df' isAnimationActive={false}/>}
      {!alltemps && <Line type="function" dataKey={mykey} stroke={mycolor} isAnimationActive={false}/>}
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip/>
    </LineChart>
  );
};

export default Gengraph;
