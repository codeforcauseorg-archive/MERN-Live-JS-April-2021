import { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const elementRef = useRef();  
  useEffect(() => {
    const divElement = elementRef.current;
    setTimeout(function(){
      divElement.innerHTML = "New Value";
    }, 5000);
  }, []);
  return (
    <div className="App">
      <div ref={elementRef}>
      I'm an element
    </div>
    </div>
  );
}

export default App;
