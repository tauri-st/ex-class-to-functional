import React, {useState} from "react";

const App = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleLight = () => {
    setIsOn();
  };

  let wallClass = "wall off";
  // Update the toggleLight function to work in a functional 
  // component and to correctly update the state value using 
  // the hooks syntax. Hint: You don’t need “this” because this 
  // isn’t a class component anymore.
  if (isOn) {
    props.toggleLight(isOn);
  }
  return (
    <div className={wallClass}>
      <div className="switch-plate">
        <div className="screw" />
        <div className="switch" onClick={toggleLight}>
          <div className="switch-handle" />
        </div>
        <div className="screw" />
      </div>
    </div>
  )
}

export default App;
