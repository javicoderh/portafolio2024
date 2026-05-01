import React from "react";
import TailwindMobileScreen from "./tailwind-mobile";

const TailwindScreen = () => {
  return (
    <div className="info">
      <h1 className="hidden md:block horizontal-tit">Tailwind</h1>
      <h1 className="hidden md:block vertical-tit">
        T <br /> A <br /> I <br /> L <br /> W <br /> I <br /> N <br /> D
      </h1>
      <TailwindMobileScreen />
      <div className="hidden md:block content">
        <p className="tailp">
          I build interfaces with Tailwind&apos;s default utilities, and when
          a project needs more I write custom plugins or work with the ones
          a teammate has already authored.
        </p>
        <p className="tailp">
          I like pairing Tailwind with plain CSS for the parts that benefit
          from a more bespoke approach. Both this portfolio and the latest
          project lean on Tailwind for most of the layout.
        </p>
      </div>
    </div>
  );
};

export default TailwindScreen;
