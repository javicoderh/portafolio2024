import React from "react";

const TailwindMobileScreen = () => {
  return (
    <div className="block md:hidden content">
      <h2 className="mobile-tit">Tailwind</h2>
      <p className="aboutp-mobile">
        I build interfaces with Tailwind&apos;s default utilities, and write
        custom plugins when a project needs them. I like pairing it with
        plain CSS for parts that benefit from a more bespoke approach.
      </p>
      <p className="aboutp-mobile">
        Both this portfolio and the latest project lean on Tailwind for most
        of the layout.
      </p>
    </div>
  );
};

export default TailwindMobileScreen;
