import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) {
  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  }

  const [piggiePicture, setPiggiePicture] = useState(normalBaby);

  function handlePiggiePicture(props) {
    if (props.eyeColor === 'blue'){
      setPiggiePicture(normalBaby) 
    } else if (props.eyeColor === 'sun'){
      setPiggiePicture(SunBaby)
    } else if (props.eyeColor === 'glowing') {
      setPiggiePicture(GlowingBaby)
    } else {
      console.log("pass");
    }
    return setPiggiePicture;
  
}
  return (
    <li className="hogbabies">
      <h1>Name: {props.name}</h1>
      <h3>Weight:</h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>

      <button name="+">Increase Weight</button>
      <button name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={handlePiggiePicture(props)}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
