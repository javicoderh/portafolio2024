import React from "react";
import Image from "next/image";
import Link from "next/link";
import latest from '../../../public/latest.jpeg'

const LatestScreen = () => {
 
return (

    <div className="info">
        <h1 className="horizontal-tit">Latest</h1>
        <h1 className="vertical-tit">L <br /> A <br /> T <br /> E <br /> S <br /> T</h1>
        <div className="content-latest">
            <a href="https://vuelca-seven.vercel.app/" target="_blank">
           <Image className="latest-img" src={latest} width={200} height={200} alt="" />
            </a>
            <p className=" text-gray-600 latestp">
                Vuelca <br />
                is a directory of sustainable enterprises<br />  
                based on permaculture principles. <br />     
                this project is made with next.js, typescript <br />
                tailwind and trpc. <br />
                It is a real project and is under construction. <br />        
            </p>
        </div>
  </div>
)}

export default LatestScreen;