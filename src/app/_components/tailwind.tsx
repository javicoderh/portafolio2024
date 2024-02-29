import React from "react";
import TailwindMobileScreen from "./tailwind-mobile";

const TailwindScreen = () => {
 
return (
    <div className="info">
    <h1 className="hidden md:block horizontal-tit">Tailwind</h1>
    <h1 className="hidden md:block vertical-tit resized">T<br /> A <br /> I <br /> L <br /> W <br />I <br />N <br /> D</h1>
    <TailwindMobileScreen />
    <div className="hidden md:block content">
        <p className="text-gray 600 tailp">
          I can build apps using just tailwind default plugins and i can make my own plugins <br />
          or use other teammate plugins, i like to use it together with pure css to achieve  <br />
          a better flexibility on the design.
           <br />
          <br />
          Both this project and the latest project Vuelca are using tailwind for most of the design.
        </p>
    </div>
  </div>

)}

export default TailwindScreen;