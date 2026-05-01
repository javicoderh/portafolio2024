import React from "react";

const ReactMobileScreen = () => {
  return (
    <div className="block md:hidden content">
      <h2 className="mobile-tit">React</h2>
      <p className="aboutp-mobile">
        React was my favourite framework before Next.js, and I&apos;m still very
        comfortable with it: contexts, router, hooks, effects, lazy loading,
        Redux and Material UI.
      </p>
      <p className="aboutp-mobile">
        I write React in TypeScript and test it with Jest or React Testing
        Library, and ship it to VMs through Docker-based CI/CD pipelines.
      </p>
    </div>
  );
};

export default ReactMobileScreen;
