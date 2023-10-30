import logo from './logo.svg';
import './App.css';
import Nav from './componets/Nav';
import Header from './componets/Header';


function App() {
  return( 
    <div> 
      <Nav title='Props'/>
      <Header name='Vues Enemy'/>
      <p className='para'>this is the paragraph</p>
    </div>
  ) ;
}

export default App;
