import './App.css';
// import {  }
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Dogs</h1> */}
      

      <Routes>

      <Route exact path='/' element={<LandingPage></LandingPage>}/>

      </Routes>
      
      
      
    </div>
  );
}

export default App;
