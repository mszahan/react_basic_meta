import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Bag from './components/propsChildren/Bag';
import Apples from './components/propsChildren/Apples';
import Pears from './components/propsChildren/Pears';
import ClickBtn from './components/ClickBtn';
import ModeToggler from './components/ModeToggler';
import Dog from './components/grandChildren/Dog';
import InputComponent from './components/InputComponent';
import RegistrationForm from './components/RegistrationForm';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';
import Main from './components/propsDrilling/Main';
import MealsProvider from './components/contextApi/MealsProvider';
import MealsList from './components/contextApi/MealsList';
import Counter from './components/contextApi/Counter';

// embedding atribute and adding image 
function Pic (props) {
  const reactLogo = <img src={logo} className='react-logo'/>;
  return reactLogo;
}


function App() {
  return( 
    <div> 
      <Nav title='Props'/>
      <Header name='Vues Enemy'/>
      <p className='para'>this is the paragraph</p>


      <div className='pic-div'>
      <Pic/>
      <ClickBtn/>
      <ModeToggler/>
      <Dog/>
      </div>
      <InputComponent/>
      <RegistrationForm/>
      <TextInputWithFocusButton/>

      <Main msg='The drilled massage which traveld through 4 layers'/>

      <MealsProvider>
        <MealsList/>
        <Counter/>
      </MealsProvider>




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
