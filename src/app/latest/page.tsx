import React from "react";
import Image from "next/image";
import latest from "../../../public/esmasqueunpinguino-logo.png";

const LatestScreen = () => {
  const description = (
    <>
      <p className="latestp">
        <span className="lead-name">Es más que un pingüino</span> is a
        high-performance campaign site built with Astro.js, leveraging its
        islands architecture to ship interactive components in both React
        and Vue within the same project.
      </p>
      <p className="latestp">
        The backend is fully serverless, connected directly to a PostgreSQL
        database hosted on Vercel, with hardened security layers, input
        validation and protected endpoints.
      </p>
      <p className="latestp">
        The result: a fast, secure and visually polished experience that
        showcases what modern web tooling can achieve.
      </p>
      <div className="tag-row">
        <span className="tag">Astro.js</span>
        <span className="tag">React Islands</span>
        <span className="tag">Vue Islands</span>
        <span className="tag">PostgreSQL</span>
        <span className="tag">Vercel · Serverless</span>
      </div>
    </>
  );

  return (
    <div className="info">
      <h1 className="hidden md:block horizontal-tit">Latest</h1>
      <h1 className="hidden md:block vertical-tit">
        L <br /> A <br /> T <br /> E <br /> S <br /> T
      </h1>

      <div className="hidden md:grid content-latest">
        <a
          className="latest-link"
          href="https://esmasqueunpinguino.cl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="latest-img"
            src={latest}
            width={220}
            height={220}
            alt="Es más que un pingüino logo"
          />
        </a>
        <div>{description}</div>
      </div>

      <div className="block md:hidden content-latest-mobile">
        <h2 className="mobile-tit">Latest project</h2>
        <a
          className="latest-link"
          href="https://esmasqueunpinguino.cl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="latest-img"
            src={latest}
            width={180}
            height={180}
            alt="Es más que un pingüino logo"
          />
        </a>
        {description}
      </div>

    </div>
  );
};

export default LatestScreen;
