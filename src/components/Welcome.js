//Class Component
import React from 'react'
import {Component} from 'react'


class Welcome extends Component{
    render(){
    return <h1>Welcome Class  {this.props.name}</h1>
    }
}

export default Welcome