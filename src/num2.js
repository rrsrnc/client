import React from 'react'


function Num2({data}) {
    return <>
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>date</th>
            <th>time</th>
            <th>temp1 &deg;C</th>
            <th>temp2 &deg;C</th>
            <th>temp3 &deg;C</th>
            <th>ML model</th>
            <th>deflection mm</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,i) => {
              return (
                  <tr key={i}>
                      <td>{i+1}</td>
                      <td>{row.date}</td>
                      <td>{row.time}</td>
                      <td>{row.temperature1}</td>
                      <td>{row.temperature2}</td>
                      <td>{row.temperature3}</td>
                      <td>{row.MLmodel}</td>
                      <td>{row.deflection}</td>
                  </tr>
              )
          })}
        </tbody>
      </table>
    </div>
    </>
}

export default Num2
