'use client';
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import next from '../../public/next.png';
import rust from '../../public/rust.png';
import postgres from '../../public/postgres.png';
import tailwind from '../../public/tailwind.png';
import react from '../../public/react.svg';
import ReactScreen from "./_components/react";
import RustScreen from "./_components/rust";
import NextScreen from "./_components/next";
import PostgresScreen from "./_components/postgres";
import TailwindScreen from "./_components/tailwind";
import AboutScreen from "./_components/about";

type StackKey = 'next' | 'rust' | 'postgres' | 'tailwind' | 'react';
type ScreenKey = 'about' | StackKey;

const stackItems: Array<{ key: StackKey; src: StaticImageData | string; width: number }> = [
  { key: 'next',     src: next,     width: 150 },
  { key: 'rust',     src: rust,     width: 150 },
  { key: 'postgres', src: postgres, width: 150 },
  { key: 'tailwind', src: tailwind, width: 200 },
  { key: 'react',    src: react,    width: 200 },
];

function renderScreen(key: ScreenKey) {
  switch (key) {
    case 'next':     return <NextScreen />;
    case 'rust':     return <RustScreen />;
    case 'postgres': return <PostgresScreen />;
    case 'tailwind': return <TailwindScreen />;
    case 'react':    return <ReactScreen />;
    case 'about':
    default:         return <AboutScreen />;
  }
}

export default function Home() {
  const [active, setActive] = useState<ScreenKey>('about');

  return (
    <main className="page-main">
      {active !== 'about' && (
        <button
          type="button"
          className="back-btn"
          onClick={() => setActive('about')}
          aria-label="Back to About me"
        >
          <span aria-hidden="true">←</span> About me
        </button>
      )}

      {renderScreen(active)}

      <aside className="hidden md:flex icons-container">
        <h2>Main stack</h2>
        <h3>click an icon to read more</h3>
        {stackItems.map(({ key, src, width }) => (
          <button
            key={key}
            type="button"
            className={`stack-btn ${active === key ? 'is-active' : ''}`}
            onClick={() => setActive(key)}
            aria-label={`Show ${key} description`}
            aria-pressed={active === key}
          >
            <Image className={`${key}-icon`} src={src} width={width} height={200} alt="" />
          </button>
        ))}
      </aside>

      <aside className="flex md:hidden icons-container icons-container--mobile-wrap">
        <h2>Main stack</h2>
        <h3>click an icon to read more</h3>
        <div className="icons-container-mobile">
          {stackItems.map(({ key, src, width }) => (
            <button
              key={key}
              type="button"
              className={`stack-btn ${active === key ? 'is-active' : ''}`}
              onClick={() => setActive(key)}
              aria-label={`Show ${key} description`}
              aria-pressed={active === key}
            >
              <Image className={`${key}-icon`} src={src} width={width} height={200} alt="" />
            </button>
          ))}
        </div>
      </aside>
    </main>
  );
}
