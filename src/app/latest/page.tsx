import React from "react";
import Image from "next/image";
import Link from "next/link";
import latest from '../../../public/latest.jpeg'
import ramen from '../../../public/ramen.png'

const LatestScreen = () => {
 
return (

    <div className="info">
        <h1 className="hidden md:block horizontal-tit">Latest</h1>
        <h1 className="hidden md:block vertical-tit">L <br /> A <br /> T <br /> E <br /> S <br /> T</h1>
        <div className="hidden md:block content-latest">
            <a href="https://vuelca-seven.vercel.app/" target="_blank">
           <Image className="latest-img" src={latest} width={200} height={200} alt="" />
            </a>
            <p className=" text-gray-600 latestp">
                <span className="text-gray-800">Vuelca</span><br />
                is a directory of sustainable enterprises<br />  
                based on permaculture principles. <br />     
                this project is made with next.js, typescript <br />
                tailwind and trpc. <br />
                It is a real project and is under construction. <br />        
            </p>
        </div>
        <div className="block md:hidden content-latest-mobile">
            <h1 className="text-gray-900 mb-3">Latest Project:</h1>
            <a href="https://vuelca-seven.vercel.app/" target="_blank">
           <Image className="latest-img" src={latest} width={200} height={200} alt="" />
            </a>
            <p className=" text-gray-600 latestp">
                <span className="text-gray-800">Vuelca</span><br />
                is a directory of sustainable enterprises<br />  
                based on permaculture principles. <br />     
                this project is made with next.js, typescript <br />
                tailwind and trpc. <br />
                It is a real project and is under construction. <br />        
            </p>
        </div>
        <Image className="hidden md:block ramen-latest" src={ramen} width={400} height={200} alt="" />
  </div>
)}

export default LatestScreen;