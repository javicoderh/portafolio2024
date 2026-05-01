import React from "react";

const NextMobileScreen = () => {
  return (
    <div className="block md:hidden content">
      <h2 className="mobile-tit">Next</h2>
      <p className="aboutp-mobile">
        Next.js is my strongest stack. Combined with Prisma and tRPC, it gives
        me a fully type-safe pipeline from the database to the UI, without
        losing access to anything React or JavaScript can do.
      </p>
      <p className="aboutp-mobile">
        The latest project on this site shows most of what I do with this
        stack — routing, server actions, Prisma models and tRPC endpoints.
        This portfolio itself is built on Next.js.
      </p>
    </div>
  );
};

export default NextMobileScreen;
