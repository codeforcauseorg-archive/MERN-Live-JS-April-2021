import { useState } from "react";
import "./App.css";

function App() {
  let [text, setText] = useState("");
  let [lines, setLines] = useState([]);

  return (
    <div>
      <input value={text} onChange={function(event){
        // console.log(event.target.value);
        setText(event.target.value);
      }}></input>
      <button
        onClick={function () {
            setLines(lines.concat([text]));
            setText("");
        }}
      >
        Click to Add
      </button>


      {
        lines.map(function(item, idx){
          return <h3 key={idx}>{item}</h3>;
        })
      }
    </div>
  );
}

export default App;
