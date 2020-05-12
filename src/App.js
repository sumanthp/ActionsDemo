import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet'
import Custom from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import Lifecycle from './components/Lifecycle';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
function App() {
  return (
    <div className="App">
      {/* <Greet name="Sumanth"></Greet>
      <Greet name="Ultron"></Greet>
      <Greet name="Harry"></Greet>
      <div className='success'>Success</div>
      <div className={styles.error}>Success</div>
      <Custom name="Sumanth" hero='Batman'><p>Human Being</p></Custom>
      <Custom name="Ultron" hero='villain'></Custom>
      <Custom name="Harry" hero='wizard'></Custom>
      <Welcome name="Sumanth"></Welcome>
      <Welcome name="Ultron"></Welcome>
      <ParentComponent></ParentComponent>
      <UserGreeting></UserGreeting>
      <Hello></Hello>
      <Counter></Counter>
      <EventBind></EventBind>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <NameList></NameList>
      <Inline></Inline> 
      <Form></Form>
    <Lifecycle></Lifecycle>
     <FragmentDemo></FragmentDemo> 
    <Table></Table>
      <StyleSheet primary={false}></StyleSheet> */}
      <Message/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
