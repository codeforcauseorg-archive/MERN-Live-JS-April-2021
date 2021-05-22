import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./actions/countActions";
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
    </div>
  );
}

export default App;
