import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import HomePage from './components/pages/HomePage';
import FormPage from './components/pages/FormPage';
import DrillPage from './components/pages/DrillPage';

import RidingApp from './components/RidingApp';
import { Routes, Route } from 'react-router-dom';





function App() {
  return( 
    <div> 
      <Nav title='Props'/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/forms' element={<FormPage/>}/>
      <Route path='/props-drill' element={<DrillPage/>}/>
      <Route path='/ride' element={<RidingApp/>}/>

    </Routes>

    </div>
  ) ;
}

export default App;
