import React, { useState } from "react";
import ReactDOM from "react-dom";

const PurpleLight = () => {
  /**
   *  Using the useState hook, you have to pay atention to 3 elements:
   *  - opened: a variable that will change over time (can have any name)
   *  - setOpened:  a function that resets the value of opened (can by any name)
   *  - useState: this is the hook, it has to be setState and it receives the initial value for "opened"
   */
  const [opened, setOpened] = useState(true);

  //if opened === true, I show the modal, else i show the button to open the modal
  return opened ? (
    <div>
        {/* <div id="purpleLight" className={"circle purple"+ (glowLight==="purple" ?  " glow":"")} onClick={()=>setGlowLight("purple")}></div> */}
      <h1>Hello BreatheCode</h1>
      <button type="button" onClick={() => setOpened(false)}>
        Close
      </button>
    </div>
  ) : (
    <button type="button" onClick={() => setOpened(true)}>
      Open
    </button>
  );
};

export default PurpleLight;

//ReactDOM.render(<PurpleLight />, document.getElementById("purpleLight"));