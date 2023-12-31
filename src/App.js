import React, {useState} from "react";

const App = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleLight = () => {
    setIsOn();
  };

  let wallClass = "wall off";
  if (this.state.on) {
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
