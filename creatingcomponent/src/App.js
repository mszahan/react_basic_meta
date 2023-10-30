import logo from './logo.svg';
import './App.css';
import Nav from './componets/Nav';
import Header from './componets/Header';
import Bag from './componets/propsChildren/Bag';
import Apples from './componets/propsChildren/Apples';
import Pears from './componets/propsChildren/Pears';



function App() {
  return( 
    <div> 
      <Nav title='Props'/>
      <Header name='Vues Enemy'/>
      <p className='para'>this is the paragraph</p>
      {/* The bag has props.children so it's working */}
      <Bag>
        <Apples color="yellow" number="5"/>
        <Pears friend="Peter"/>
      </Bag>
      <Bag>
        <Pears friend="Peter"/>
      </Bag>

      {/* it's not going to work since Header doesn't have props.children */}
      {/* <Header name='hola'>
      <Apples color="yellow" number="5"/>
      </Header> */}

    </div>
  ) ;
}

export default App;
