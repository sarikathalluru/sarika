import React from 'react';

export default function Dataloop() {
    const names=[
        {name:"sarika"},
        {name:"sravani"},
        {name:"Harwin Ram"},
        {name:"Baheera"},
        {name:"Balaraju"},

    ];
  return (
    <div>
        <h1>loop the data through map method</h1>
        {names.map((data)=>(
            <p>{data.name}</p>

))}
    </div>
  )
}

 