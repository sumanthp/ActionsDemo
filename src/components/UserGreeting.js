import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    //conditional Logging
    render() {

        //short circuit operation
        return this.state.isLoggedIn &&  <div>Welcome Sumanth!!!</div>
        //ternanry operation
        // return (
        //     this.state.isLoggedIn ?
        //     <div>Welcome Sumanth</div> :
        //     <div>Welcome Guest</div>
        // )

        //js variable approach
        // let message
        // if(this.state.isLoggedIn){
        //         message = <div>Welcome Sumanth</div>
        // }else{
        //         message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        //if else approach
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Sumanth</div>
        //     )
        // }else{
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>
        //             Welcome Sumanth!!!
        //         </div>
        //         <div>
        //             Welcome Guest
        //         </div>
        //     </div>

        // )
    }
}

export default UserGreeting
