import './App.css';
// import {  }
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav';
import CreateDog from './Components/CreateDog/CreateDog'
import { getDogs } from './redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';


function App(props) {
  useEffect(( )=> {
    props.getDogs()
    console.log('DOGSGOT');
  }, [])



  return (
    <div className="App">
      {/* <h1>Henry Dogs</h1> */}
      {/* <LandingPage btnIsVisible = {true}/> */}
      

      <Routes>

      <Route  path='/' element={<LandingPage btnIsVisible={true}></LandingPage>}/>
      <Route exact path='/home' element={<Home></Home>} />
      <Route path='/create' element = {<CreateDog></CreateDog>}/>
      <Route path='*' element={<Nav></Nav>}/>

      </Routes>
      
      
      
    </div>
  );
}
const mapDispatchToProps = ( dispatch ) => {
  return {
      getDogs: ( ) => dispatch( getDogs() )
  }
}


export default connect(null, mapDispatchToProps)(App);
