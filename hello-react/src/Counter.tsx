import { useState, type ChangeEvent, type MouseEvent } from "react";

function Counter() {
  // const temp = useState(0);
  // const count = temp[0];
  // const setCount = temp[1];
  //    [0    , function]
  const [count, setCount] = useState(0);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    console.log(event.currentTarget.nodeName); // BUTTON
    console.log('Button clicked');
    setCount(count + 1);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.currentTarget.nodeName); // INPUT
    console.log(event.target.nodeName); // INPUT
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default Counter;