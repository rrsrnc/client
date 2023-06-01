import React from 'react'


function Num({data}) {
    return <>
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Spindle motor</th>
            <th>Z-axis motor</th>
            <th>Ambient</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,i) => {
              return (
                  <tr key={i}>
                      <td>{i+1}</td>
                      <td>{row.temp1}</td>
                      <td>{row.temp2}</td>
                      <td>{row.temp3}</td>
                  </tr>
              )
          })}
        </tbody>
      </table>
    </div>
    </>
}

export default Num
