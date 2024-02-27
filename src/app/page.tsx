'use client';
import Image from "next/image";
import next from '../../public/next.png';
import rust from '../../public/rust.png';
import postgres from '../../public/postgres.png';
import tailwind from '../../public/tailwind.png';
import react from '../../public/react.svg';
import { useState } from "react";
import ReactScreen from "./_components/react";
import RustScreen from "./_components/rust";
import NextScreen from "./_components/next";
import PostgresScreen from "./_components/postgres";
import TailwindScreen from "./_components/tailwind";
import AboutScreen from "./_components/about";
import ramen from '../../public/ramen.png'

export default function Home() {
  const [screen, setScreen] = useState(<AboutScreen />);
  
  function setRust() {
    setScreen(<RustScreen />);
  }

  function setNext() {
    setScreen(<NextScreen />);
  }

  function setPostgres() {
    setScreen(<PostgresScreen />);
  }

  function setTailwind() {
    setScreen(<TailwindScreen />);
  }

  function setReact() {
    setScreen(<ReactScreen />);
  }

  const images = {
    next: {src: next, width: 150, onclick: setNext},
    rust: {src: rust, width: 150, onclick: setRust}, 
    postgres: {src: postgres, width: 150, onclick: setPostgres}, 
    tailwind: {src: tailwind, width: 200, onclick: setTailwind},
    react: {src: react, width: 200, onclick: setReact}
  };

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-10">
      {screen}
      <div className="hidden md:flex icons-container">
        <h2 className="text-gray-700">Main stack</h2>
        <h3 className="text-gray-600">click on the icon to see description</h3>  
        {Object.entries(images).map(([key, {src, width, onclick}]) => (
          <div key={key} onClick={onclick}>
            <Image className={`${key}-icon`} src={src} width={width} height={200} alt="" />
          </div>
        ))}
      </div>
      <div className="flex md:hidden icons-container">
        <h2 className="text-gray-700">Main stack</h2>        
        <h3 className="text-gray-600">click on the icon to see description</h3>
        <div className="icons-container-mobile">  
          {Object.entries(images).map(([key, {src, width, onclick}]) => (
            <div key={key} onClick={onclick}>
              <Image className={`${key}-icon`} src={src} width={width} height={200} alt="" />
            </div>
          ))}
        </div>
      </div>
      <Image className="ramen" src={ramen} width={400} height={200} alt="" />
    </main>
  );
}
