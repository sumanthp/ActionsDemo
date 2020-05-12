//stateful
class demo extends React.Component{
    render(){
    return <h1>Hello, {this.props.name}</h1>
    }
}

//stateless
function welcome(props){
    return <h1>Hello, {this.props.name}</h1>
}