import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function addValue() {
    if (counter < 20) {
      setCounter(counter + 1);
      setCounter((prevCounter) => {
        setCounter(prevCounter + 1);
      });
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      // The setCounter if we will write it again and again it won't work because usestate hook takes it in a batch
      // to update it instead of line by line . Hence we can achieve that by callback function
    }
  }

  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <div className="w-full h-full min-h-screen bg-zinc-900">
        <div className="   text-center text-white  ">
          <h1 className="flex justify-center relative top-5 font-bold">
            Counter App{" "}
          </h1>
          <br /> <br />
          <span>Counter: {counter}</span>
          <br />
          <button
            onClick={addValue}
            className="rounded-full  bg-slate-400 px-4 py-2 m-3"
          >
            Add Value: {counter}
          </button>
          <button
            onClick={removeValue}
            className="rounded-full  bg-slate-400 px-4 py-2 m-3"
          >
            Remove Value: {counter}
          </button>
          <p>
            Rules :
            <br />
            1.You can add upto 20 values.
            <br />
            2.Negative values are not allowed.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
