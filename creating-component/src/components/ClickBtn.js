// import React, { useState } from 'react';

function ClickBtn() {
//   const [times, setTimes] = useState(0);

  const clickHandler = () => {
    // setTimes(times + 1);
    return console.log('cliked')
  };

  return (
    <>
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
