import React from "react";
import RustMobileScreen from "./rustMobile";

const RustScreen = () => {
  return (
    <div className="info">
      <h1 className="hidden md:block horizontal-tit">Rust</h1>
      <h1 className="hidden md:block vertical-tit">
        R <br /> U <br /> S <br /> T
      </h1>
      <RustMobileScreen />
      <div className="hidden md:block content">
        <p className="rustp">
          I read and worked through the entire Rust Programming Language book,
          and I&apos;ve built small tools with it: a text scrapper for keywords and
          phrases, text formatters, an API serving drink recipes, among others.
          I&apos;m currently exploring real-world uses of multithreading.
        </p>
        <p className="rustp">
          I&apos;ve studied smart pointers, data structures, advanced types,
          traits and hashmaps. It isn&apos;t my strongest language yet — but
          I&apos;m getting deeper into it every day.
        </p>
      </div>
    </div>
  );
};

export default RustScreen;
