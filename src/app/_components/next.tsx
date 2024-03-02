import React from "react";
import NextMobileScreen from "./nextMobile";

const NextScreen = () => {
 
return (

    <div className="md:block">
    <h1 className="hidden md:block orange-like horizontal-tit">Next</h1>
    <h1 className="hidden md:block vertical-tit">N <br /> E <br /> X <br /> T</h1>
    <NextMobileScreen />
    <div className="hidden md:block content">
        <p className="hidden md:block text-gray 600 rustp">
          Next is actually my best stack, working together with prisma and trpc i guess is a very <br />
          functional stack specially because you can still use all the resources from React and Js. <br />
          If you check the project on the latest project section, you can find in Vuelca most of the <br /> 
          features  from next.js, prisma and trpc, also you can find my html, css, react and postgres <br /> 
          knowledge. 
          <br />
          <br />
          This project was made using Next.js 
        </p>
    </div>
  </div>
)}

export default NextScreen;
