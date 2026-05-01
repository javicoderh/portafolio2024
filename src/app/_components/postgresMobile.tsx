import React from "react";

const PostgresMobileScreen = () => {
  return (
    <div className="block md:hidden content">
      <h2 className="mobile-tit">Postgres</h2>
      <p className="aboutp-mobile">
        PostgreSQL is the database I work with daily. I design schemas, wire
        them into apps, write queries that join and aggregate across related
        tables, and I&apos;m learning stored procedures.
      </p>
      <p className="aboutp-mobile">
        The latest project on this site is fully serverless and talks to
        Postgres directly through Vercel.
      </p>
    </div>
  );
};

export default PostgresMobileScreen;
