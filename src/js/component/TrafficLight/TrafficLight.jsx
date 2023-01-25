import React, {useState} from "react";
import "./TrafficLight.css";




//create your first component
const TrafficLight = () => {
    const [ glowLight, setGlowLight] = useState("danger");

	return (
		<div className="container text-center">
			<div className="row bg-dark lightBase">
                
            </div>
            <div className="lightBody row rounded bg-dark">
                <div className={"circle bg-danger"+ (glowLight==="danger" ?  " glow":"")} onClick={()=>setGlowLight("danger")}></div>
                <div className={"circle bg-warning"+ (glowLight==="warning" ? " glow":"")} onClick={()=>setGlowLight("warning")}></div>
                <div className={"circle bg-success"+ (glowLight==="success" ?  " glow":"")} onClick={()=>setGlowLight("success")}></div>
            </div>
		</div>
	);
};

export default TrafficLight;
