import React, {useState} from "react";
import "./TrafficLight.css";
// import ExtraFunctionalities from "./ExtraFunctionalities.jsx";
import PurpleLight from "./PurpleLight.jsx";

let lights = ["danger", "warning", "success", "purple"];
    let i = 0;

//create your first component
const TrafficLight = () => {
    const [ glowLight, setGlowLight] = useState("danger");
    const [ cycling, setCycling] = useState(false);
    const [ cycle, setCycle] = useState(false);
    const [ hidden, setHidden] = useState(true);
    // const [lights, setLights] = useState(["danger", "warning", "success"]);...to be continue
    const [purpleLight, setPurpleLight]=useState("circle purple d-none");

    const changeGlow = ()=> {  //to cycles the traffic light selected color      
        setGlowLight( lights[i]);
        i++;
        
        if(i > lights.length - 1) { //if gets to the end of array, go to the begining
            i = 0;
        }               
    };
    const stopCycling = (cycle) => {    //to stop cycling
        clearInterval(cycle);
        setCycling(false);
      };

    const startCycling = () => {    //to start cycling
        setCycling(true);
        setCycle(setInterval(changeGlow, 1000));
      };

    
     
    const showPurple = (hidden) =>{   //to show purple light

        if(hidden){
            setPurpleLight("circle purple");
            setHidden(false); 
            // setLights (lights => ([...lights,"purple"])); //to add purple light to cycling array
            console.log(lights);

        }else{
            setHidden(true);
            setPurpleLight("circle purple d-none");  
            // setLights (lights.slice(0, lights.length - 1));  //to romeve purple light from cycling array
            console.log(lights);
        }
    };
	return (
		<div className="container text-center">
			<div className="row bg-dark lightBase">
                
            </div>
            <div className="lightBody row rounded bg-dark d-block">
                <div className={"circle bg-danger"+ (glowLight==="danger" ?  " glow":"")} onClick={()=>setGlowLight("danger")}></div>
                <div className={"circle bg-warning"+ (glowLight==="warning" ? " glow":"")} onClick={()=>setGlowLight("warning")}></div>
                <div className={"circle bg-success"+ (glowLight==="success" ?  " glow":"")} onClick={()=>setGlowLight("success")}></div>
                <div className={purpleLight + (glowLight==="purple" ?  " glow":"")} onClick={()=>setGlowLight("purple")}></div>

                {/* <PurpleLight /> */}
            </div>
            {/* <ExtraFunctionalities></ExtraFunctionalities> */}
            <div className="text-center m-2">
            <i className="fa-sharp fa-solid fa-gear"></i>
			<div className="btn-group">
       
                <button
                type="button"
                className="btn btn-light"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Cycling"
                alt="Cycling Lights"
                id="btnCycling"
                onClick={()=>!cycling ? startCycling() : stopCycling(cycle)}                
                >
                Cycling Lights
                </button>
                
                <button
                type="button"
                className="btn btn-light"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Purple light"
                alt="Purple light"
                id="btnPurple"
                onClick={()=>showPurple(hidden)}
                >Purple
                </button>
            </div>
        </div>
		</div>
        
	);
};

export default TrafficLight;
