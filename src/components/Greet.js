
//functional Component

import React from 'react'

/*function Greet(){
    return <h1>Hello Ultron.</h1>
}*/


//using arrow function
// const Greet = props => {
//     console.log(props)
// return (
//     <div>
//         <h1>Hello {props.name} aka {props.hero}!!!</h1>
//         {props.children}
//     </div>
// )
// }

//destructuring props
// const Greet = ({name, hero, children}) => {
//     return (
//         <div>
//             <h1>Hello {name} aka {hero}!!!</h1>
//             {children}
//         </div>
//     )
// }

const Greet = props => {
    const {name, hero, children} = props
    return (
        <div>
            <h1>Hello {name} aka {hero}!!!</h1>
            {children}
        </div>
    )
}

//export default function Greet
export default Greet

//named exports
//export const Greet = ()=><h1>Hello Ultron!!!!</h1>