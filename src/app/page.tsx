import Image from "next/image";
import next from '../../public/next.png';
import rust from '../../public/rust.png';
import postgres from '../../public/postgres.png';
import tailwind from '../../public/tailwind.png';
import react from '../../public/react.svg';

export default function Home() {
  
  const images = {
    next: {src: next, width: 200},
    rust: {src: rust, width: 150}, 
    postgres: {src: postgres, width: 150}, 
    tailwind: {src: tailwind, width: 200},
    react: {src: react, width: 200}
  };

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
      <div className="icons-container">
        <h2 className="text-gray-700">Main stack</h2>
        <h3 className="text-gray-600">click on the icon to see description</h3>  
        {Object.entries(images).map(([key, {src, width}]) => (
          <Image key={key} className={`${key}-icon`} src={src} width={width} height={200} alt="" />
        ))}
      </div>
    </main>
  );
}
