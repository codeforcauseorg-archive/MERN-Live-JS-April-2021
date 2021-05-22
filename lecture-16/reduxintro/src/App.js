import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setValue } from "./actions/countActions";
import "./App.css";

function App() {
  let dispatch = useDispatch();
  let count = useSelector((state) => state.count);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={function () {
          dispatch(increase());
        }}
      >
        Increase
      </button>
      <button
        onClick={function () {
          dispatch(decrease());
        }}
      >
        Decrease
      </button>

      <br></br>

      <input
        value={count}
        onChange={function (event) {
          if (isNaN(event.target.value)) {
            return; 
          }
          let value = event.target.value ? Number(event.target.value) : 0;
          dispatch(setValue(value));
        }}
      />
    </div>
  );
}

export default App;
