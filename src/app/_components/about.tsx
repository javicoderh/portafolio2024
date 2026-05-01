import React from "react";

const AboutScreen = () => {
  return (
    <div className="info">
      <h1 className="hidden md:block horizontal-tit">About me</h1>
      <h1 className="hidden md:block vertical-tit">
        A <br /> B <br /> O <br /> U <br /> T <br /> <br /> M <br /> E
      </h1>

      <div className="hidden md:block content">
        <p className="aboutp">
          <span className="lead-name">I&apos;m Javier</span>, a 36-year-old developer from Chile.
          I started coding in 2020 with HTML, CSS and JavaScript at Coderhouse,
          then went through a bootcamp covering React, Express, PostgreSQL,
          testing, Docker and CI/CD.
        </p>
        <p className="aboutp">
          I picked up Rust on my own through the book and the docs, and finally
          moved into the T3 stack — Next.js, Prisma and tRPC — mentored by a
          15-year veteran. I&apos;m comfortable working under SCRUM.
        </p>
        <p className="aboutp">
          Off-screen: yoga + slackline, Dota 2, didgeridoo player.
        </p>
        <div className="tag-row">
          <span className="tag">Next.js</span>
          <span className="tag">React</span>
          <span className="tag">Vue</span>
          <span className="tag">Astro.js</span>
          <span className="tag">TypeScript</span>
          <span className="tag">JavaScript</span>
          <span className="tag">Node.js</span>
          <span className="tag">Python · advanced</span>
          <span className="tag">Rust</span>
          <span className="tag">PostgreSQL</span>
          <span className="tag">tRPC</span>
          <span className="tag">Figma</span>
          <span className="tag">SOLID principles</span>
        </div>
      </div>

      <div className="block md:hidden content">
        <h2 className="mobile-tit">About me</h2>
        <p className="aboutp-mobile">
          <span className="lead-name">I&apos;m Javier</span>, a 36-year-old developer from Chile.
          I started coding in 2020 with HTML, CSS and JavaScript at Coderhouse,
          then went through a bootcamp covering React, Express, PostgreSQL,
          testing, Docker and CI/CD.
        </p>
        <p className="aboutp-mobile">
          I picked up Rust on my own through the book and the docs, and finally
          moved into the T3 stack — Next.js, Prisma and tRPC — mentored by a
          15-year veteran. I&apos;m comfortable working under SCRUM.
        </p>
        <p className="aboutp-mobile">
          Off-screen: yoga + slackline, Dota 2, didgeridoo player.
        </p>
        <div className="tag-row">
          <span className="tag">Next.js</span>
          <span className="tag">React</span>
          <span className="tag">Vue</span>
          <span className="tag">Astro.js</span>
          <span className="tag">TypeScript</span>
          <span className="tag">JavaScript</span>
          <span className="tag">Node.js</span>
          <span className="tag">Python · advanced</span>
          <span className="tag">Rust</span>
          <span className="tag">PostgreSQL</span>
          <span className="tag">tRPC</span>
          <span className="tag">Figma</span>
          <span className="tag">SOLID principles</span>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
