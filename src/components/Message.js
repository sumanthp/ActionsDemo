//using State

import React, { Component } from 'react'
class Message extends Component{
    constructor(){
        super()
        this.state={
            message : 'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you for Visiting'
        })
    }
    render(){
        return (
            <div>
                <h1>
                { this.state.message }
                </h1>
                <button onClick={()=>this.changeMessage()}>Show Message</button>
            </div>
        )
    }
}

export default Message