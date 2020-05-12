import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sumanth'
        }
        console.log('Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('GetDerivedState')
        return null
    }

    componentDidMount(){
        console.log('Component Mounted')
    }
    
    render() {
        console.log('Render')
        return (
            <div>
                
            </div>
        )
    }
}

export default Lifecycle
