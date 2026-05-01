import React from "react";
import PostgresMobileScreen from "./postgresMobile";

const PostgresScreen = () => {
  return (
    <div className="info">
      <h1 className="hidden md:block horizontal-tit">Postgres</h1>
      <h1 className="hidden md:block vertical-tit">
        P <br /> O <br /> S <br /> T <br /> G <br /> R <br /> E <br /> S
      </h1>
      <PostgresMobileScreen />
      <div className="hidden md:block content">
        <p className="rustp">
          PostgreSQL is the database I work with daily and the one I&apos;m most
          comfortable with. I design schemas, wire them into apps, write
          queries that join, filter and aggregate across related tables, and
          I&apos;m currently learning stored procedures to widen my toolbox.
        </p>
        <p className="rustp">
          I can connect a Postgres database from any of the languages in my
          stack. The latest project on this site is fully serverless and
          talks to Postgres directly through Vercel.
        </p>
      </div>
    </div>
  );
};

export default PostgresScreen;
