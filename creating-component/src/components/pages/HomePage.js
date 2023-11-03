import Header from "../Header"
import logo from '../../logo.svg';
import ClickBtn from "../ClickBtn";
import ModeToggler from "../ModeToggler";
import Dog from "../grandChildren/Dog";
import Bag from "../propsChildren/Bag";
import Apples from "../propsChildren/Apples";
import Pears from "../propsChildren/Pears";

// embedding atribute and adding image 
function Pic (props) {
    const reactLogo = <img src={logo} className='react-logo'/>;
    return reactLogo;
  }

function HomePage(){
    return(
        <div>
             <Header name='Vues Enemy'/>
      <p className='para'>this is the paragraph</p>


      <div className='pic-div'>
      <Pic/>
      <ClickBtn/>
      <ModeToggler/>
      <Dog/>
      </div>

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
    )
}

export default HomePage;