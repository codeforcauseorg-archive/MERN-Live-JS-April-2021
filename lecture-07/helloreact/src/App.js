import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Ho ho ho. {counter}</h1>
      <button
        onClick={function () {
          setCounter(counter+1);
        }}
      >
        Click to Increase
      </button>
    </div>
  );
}

export default App;
