import {useState} from 'react';


function InputComponent(){
    const [inputText, setText] = useState('hello');

    function handleChange(e){
        setText(e.target.value);
    }

    function resetText(){
        setText('hello')
    }

    return(
        <div className='user-input'>
            <input value={inputText} onChange={handleChange}/>
            <p>You typed:</p>
            <p>{inputText}</p>
            <button onClick={resetText} className='button-primary'>
                Reset
            </button>
        </div>
    )

}

export default InputComponent;