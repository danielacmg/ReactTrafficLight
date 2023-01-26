import React from "react";



const ExtraFunctionalities = () => {
    
	return (
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
                onClick={()=>setInterval(changeGlow, 1000)}
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
                >Add Purple
                </button>
            </div>
        </div>
        );
};

export default ExtraFunctionalities;


// var lights = ["danger", "warning", "success", "purple"];
// var i = 0;
// function changeGlow() {
//   setGlowLight( lights[i]);
//   i++;
  
//   if(i > lights.length - 1) {
//     i = 0;
//   }
// }