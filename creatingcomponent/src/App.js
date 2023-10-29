import logo from './logo.svg';
import './App.css';
import Nav from './componets/Nav';

function Header(){
  return <h1 className='hello'> Hello Vues enemy </h1>
}

function App() {
  return( 
    <div> 
      <Nav/>
      <Header/>
      <p className='para'>this is the paragraph</p>
    </div>
  ) ;
}

export default App;
