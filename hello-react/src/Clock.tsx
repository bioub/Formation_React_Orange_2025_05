import { useEffect, useRef, useState } from "react";

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>(null);

  if (savedCallback.current === null) {
    savedCallback.current = callback;
  }

  useEffect(() => {
    console.log('setInterval');
    const intervalId = setInterval(() => {
      savedCallback.current!();
    }, delay);
    return () => {
      console.log('clearInterval');
      clearInterval(intervalId);
    };
  }
  , [delay]);
};

function Clock() {
  const [time, setTime] = useState(new Date());
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    setTime(new Date());
  }, delay);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTime(new Date());
  //   }, delay);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [delay]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await response.json();
  //     console.log(data);
  //   })();
  // }, []);

  return (
    <div>
      <h1>Clock</h1>
      <p>{time.toLocaleTimeString()}</p>
      <p>
        Delay : <input type="number" value={delay} onChange={(e) => setDelay(e.target.valueAsNumber)} />
      </p>
    </div>
  );
}

export default Clock;