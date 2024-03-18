import React from "react";
import ReactMobileScreen from "./reactMobile";

const ReactScreen = () => {
 
return (
    <div className="info">
    <h1 className="hidden md:block horizontal-tit">React</h1>
    <h1 className="hidden md:block vertical-tit">R <br /> E <br /> A <br /> C <br /> T</h1>
    <ReactMobileScreen />
    <div className="hidden md:block content">
        <p className="hidden md:block text-gray 600 rustp">
          React was my favourite framework until i met next.js, i feel very comfortable working with it, <br />
          and i can use most of react features, such as contexts, router, states, effects, lazy react and some libraries<br />
          like redux and material ui, also i can use all the features from javascript and i can add typescript<br /> 
          to my react apps, and test them with jest or react test, i can develop pipelines for react app <br /> 
          for CI/CD and conect my apps into virtual machines using docker. 
        </p>
    </div>
  </div>

)}

export default ReactScreen;