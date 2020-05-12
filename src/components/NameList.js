import React from 'react'

function NameList() {
    const names =['Ultron', 'Newt', 'Harry', 'Ultron']
const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    // return (
    //     <div>
    //         {/* <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2>
    //          */}
    //          {/* //mapping the array to get the list of names */}
    //          {
    //              names.map(name => <h2>{name}</h2>)
    //          }
    //     </div>
    // )
    return <div>{nameList}</div>
}

export default NameList
