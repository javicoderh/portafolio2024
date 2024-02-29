import React from "react";
import RustMobileScreen from "./rustMobile";

const RustScreen = () => {
 
return (

    <div className="info">
    <h1 className="hidden md:block horizontal-tit">Rust</h1>
    <h1 className="hidden md:block vertical-tit">R <br /> U<br /> S <br /> T </h1>
    <RustMobileScreen />
    <div className="hidden md:block content">
        <p className="hidden md:block text-gray 600 rustp">
          On rust i read and practiced the entire  book of The Rust Programming Language <br />
          i also made some little softwares like a text scrapper to find some phrases or keywords, <br />
          text formatters, an Api with drinks and their recipes , among others. I am currently learning <br />
          real uses for multithreads
          <br />
          i studied smart pointers, data structures, advanced types, traits, hashmaps and other rust features. <br />
          it is not my best language but i am getting into it.    
        </p>
    </div>
  </div>
)}

export default RustScreen;