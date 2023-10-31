// import React, { useState } from 'react';

function ClickBtn() {
//   const [times, setTimes] = useState(0);

  const clickHandler = () => {
    // setTimes(times + 1);
    return console.log('cliked')
  };

  return (
    <>
    {/* you cannot invoc event handeler function in react with parenthesis
    you just need to reference the function without parenthesis */}
      <button onClick={clickHandler} className='button-primary'>
        Click me
      </button>
      {/* <p>
        You have clicked me {times} times.
      </p> */}
    </>
  );
}

export default ClickBtn;
