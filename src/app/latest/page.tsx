import React from "react";
import Image from "next/image";
import pinguino from "../../../public/esmasqueunpinguino-logo.png";
import devstash from "../../../public/devstash-logo.svg";
import workshopia from "../../../public/workshopia-logo.svg";
import iaparatodos from "../../../public/iaparatodos-logo.svg";

const pinguinoDesc = (
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

const devstashDesc = (
  <>
    <p className="latestp">
      <span className="lead-name">Dev Stash Routine</span> is a daily newsletter
      that auto-updates every morning with Rust exercises and readings, official
      AI news, tips for working with AI, the latest in agents, and tech business
      ideas inspired by current events.
    </p>
    <p className="latestp">
      Built with React + Vite, fully serverless, with a Firebase database.
      Content is generated automatically through Claude routines — zero manual
      curation required.
    </p>
    <div className="tag-row">
      <span className="tag">React · Vite</span>
      <span className="tag">Firebase</span>
      <span className="tag">Claude</span>
      <span className="tag">Serverless</span>
      <span className="tag">Auto-updated</span>
    </div>
  </>
);

const iaparatodosDesc = (
  <>
    <p className="latestp">
      <span className="lead-name">IA para todos</span> is an initiative that
      promotes and implements AI-powered workflows and tools to improve the
      performance of workers, students, and people in general, based on the
      latest technology trends.
    </p>
    <p className="latestp">
      Its core mission is to close the gap between those already living with
      frontier tools and those who ignore them entirely or have not yet turned
      them into functional daily habits.
    </p>
    <div className="tag-row">
      <span className="tag">AI Workflows</span>
      <span className="tag">Productivity</span>
      <span className="tag">Education</span>
      <span className="tag">Frontier Tools</span>
      <span className="tag">Habit Building</span>
    </div>
  </>
);

const workshopiaDesc = (
  <>
    <p className="latestp">
      <span className="lead-name">Workshopia</span> is my most ambitious project:
      a Rust server that orchestrates a multi-agent skill workflow to generate
      complete didactic unit plans of up to 8 sessions, powered by GPT-5.3+
      or Claude Sonnet 4.6+.
    </p>
    <p className="latestp">
      Best operated through an agent like Codex or Claude Code to bootstrap the
      helper stage. Once the workflow completes, the server generates three PDF
      deliverables sent automatically by email: an academic planning document, a
      facilitator guide for whoever runs the unit, and a commercial brochure.
    </p>
    <p className="latestp">
      Each unit can be aligned to the transversal learning objectives set by
      Chile&apos;s Ministry of Education for the school stage, and includes
      Universal Design for Learning (DUA) precisions. Cost per generation
      ranges from <span className="lead-name">$0.50 to $1.90 USD</span> depending
      on the unit&apos;s length and complexity.
    </p>
    <div className="tag-row">
      <span className="tag">Rust</span>
      <span className="tag">Multi-Agent</span>
      <span className="tag">Claude Sonnet 4.6</span>
      <span className="tag">GPT-5.3</span>
      <span className="tag">PDF · Email</span>
      <span className="tag">DUA</span>
      <span className="tag">MINEDUC Chile</span>
    </div>
  </>
);

const ProjectsScreen = () => {
  return (
    <div className="info">
      <h1 className="hidden md:block horizontal-tit">2026 Projects</h1>
      <h1 className="hidden md:block vertical-tit">
        2 <br /> 0 <br /> 2 <br /> 6
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex projects-list">
        <div className="grid project-card">
          <a
            className="latest-link"
            href="https://esmasqueunpinguino.cl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="latest-img"
              src={pinguino}
              width={220}
              height={220}
              alt="Es más que un pingüino logo"
            />
          </a>
          <div className="flex flex-col gap-3">{pinguinoDesc}</div>
        </div>

        <div className="project-divider" />

        <div className="grid project-card">
          <a
            className="latest-link"
            href="https://dev-stash-routine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="latest-img"
              src={devstash}
              width={220}
              height={220}
              alt="Dev Stash Routine"
            />
          </a>
          <div className="flex flex-col gap-3">{devstashDesc}</div>
        </div>

        <div className="project-divider" />

        <div className="grid project-card">
          <a
            className="latest-link"
            href="https://github.com/javicoderh/rust_llm_server"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="latest-img"
              src={workshopia}
              width={220}
              height={220}
              alt="Workshopia — Rust multi-agent server"
            />
          </a>
          <div className="flex flex-col gap-3">{workshopiaDesc}</div>
        </div>

        <div className="project-divider" />

        <div className="grid project-card">
          <a
            className="latest-link"
            href="https://ia-para-todos-ecru.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="latest-img"
              src={iaparatodos}
              width={220}
              height={220}
              alt="IA para todos"
            />
          </a>
          <div className="flex flex-col gap-3">{iaparatodosDesc}</div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden projects-list-mobile">
        <h2 className="mobile-tit">2026 Projects</h2>

        <div className="flex project-card-mobile">
          <a
            className="latest-link self-center"
            href="https://esmasqueunpinguino.cl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="latest-img"
              src={pinguino}
              width={180}
              height={180}
              alt="Es más que un pingüino logo"
            />
          </a>
          {pinguinoDesc}
        </div>

        <div className="project-divider" />

        <div className="flex project-card-mobile">
          <a
            className="latest-link self-center"
            href="https://dev-stash-routine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="latest-img"
              src={devstash}
              width={180}
              height={180}
              alt="Dev Stash Routine"
            />
          </a>
          {devstashDesc}
        </div>

        <div className="project-divider" />

        <div className="flex project-card-mobile">
          <a
            className="latest-link self-center"
            href="https://github.com/javicoderh/rust_llm_server"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="latest-img"
              src={workshopia}
              width={180}
              height={180}
              alt="Workshopia — Rust multi-agent server"
            />
          </a>
          {workshopiaDesc}
        </div>
      </div>
    </div>
  );
};

export default ProjectsScreen;
