import logo from "./logo.svg";
import "./App.css";
import { useSpring, animated } from "react-spring";

function App() {
  const props = useSpring({
    loop: { reverse: true },
    from: { rotateY: 0, x: 0 },
    to: { rotateY: 180, x: 400 },
    config: {frequency: 2},
  });
  return (
    <div>
      <animated.img
        style={props}
        width="300px"
        height="300px"
        src={logo}
        alt="logo"
      />
    </div>
  );
}

export default App;
