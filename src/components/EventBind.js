import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        //binding in constructor
        // this.clickHandler = this.clickHandler.bind(this)
    }

    //this is undefined in click HANDLER FOR A EVENT
    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbyye!'
    //     })
    //     console.log(this)
    // }

    //binding using arrow functions for class properties
    clickHandler = () => {
        this.setState({
            message: 'Goodbyye!'
        })
        console.log(this)
    }
    
    render() {
        //bind this to click Handler
        return (
            <div>
                <div>{this.state.message}</div>
                {/* binding in constructor -> performance issues, on every click, bibding happens  */}
                {/* <button onClick={this.clickHandler.bind(this)}> */}
                {/* binding to arrow fucntio n */}
                {/* <button onClick={() => this.clickHandler()}> */}
                <button onClick={this.clickHandler}>
                    Click
                </button>
            </div>
        )
    }
}

export default EventBind
