import React from "react";
import NextMobileScreen from "./nextMobile";

const NextScreen = () => {
  return (
    <div className="info">
      <h1 className="hidden md:block horizontal-tit">Next</h1>
      <h1 className="hidden md:block vertical-tit">
        N <br /> E <br /> X <br /> T
      </h1>
      <NextMobileScreen />
      <div className="hidden md:block content">
        <p className="rustp">
          Next.js is my strongest stack. Combined with Prisma and tRPC, it
          gives me a fully type-safe pipeline from the database all the way
          to the UI, without losing access to anything React or JavaScript
          can do.
        </p>
        <p className="rustp">
          The latest project on this site shows most of what I do with this
          stack: routing, server actions, Prisma models, tRPC endpoints,
          along with my HTML, CSS and PostgreSQL work.
        </p>
        <p className="rustp">This portfolio itself is built on Next.js.</p>
      </div>
    </div>
  );
};

export default NextScreen;
