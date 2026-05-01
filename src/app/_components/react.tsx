import React from "react";
import ReactMobileScreen from "./reactMobile";

const ReactScreen = () => {
  return (
    <div className="info">
      <h1 className="hidden md:block horizontal-tit">React</h1>
      <h1 className="hidden md:block vertical-tit">
        R <br /> E <br /> A <br /> C <br /> T
      </h1>
      <ReactMobileScreen />
      <div className="hidden md:block content">
        <p className="rustp">
          React was my favourite framework before I moved to Next.js, and I&apos;m
          still very comfortable with it: contexts, the new router, hooks,
          effects, lazy loading, and libraries like Redux and Material UI.
        </p>
        <p className="rustp">
          I write React in TypeScript and test it with Jest or React Testing
          Library. I can also build CI/CD pipelines for React apps and ship
          them to virtual machines using Docker.
        </p>
      </div>
    </div>
  );
};

export default ReactScreen;
