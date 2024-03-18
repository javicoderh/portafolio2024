import React from "react";
import Image from "next/image";
import Link from "next/link";
import latest from '../../../public/latest.jpeg'
import ramen from '../../../public/ramen.png'
import linkedin from '../../../public/linkedin.svg'
import github from '../../../public/github.png'
import gmail from '../../../public/gmail.svg'
import cellphone from '../../../public/cellphone.png'


const ContactScreen = () => {
 
return (

    <div className="flex contact">
        <h1 className="hidden md:block ml-5 mb-2 mt-3 horizontal-tit">Contact</h1>
        <h1 className="block md:hidden ml-5 mb-2 mt-3 mobile-tit">Contact:</h1>
        <Link href="https://github.com/javicoderh" target="_blank">
        <div className="flex md:hidden item-container">
        <Image src={github} width={50} height={100} alt="" />
        <h3>/javicorderh</h3>
       </div>
       </Link>
       <Link href="/https://www.linkedin.com/in/javierzapico/" target="_blank">
       <div className="flex md:hidden item-container">        
        <Image src={linkedin} width={50} height={100} alt="" />
        <h3>/javierzapico</h3>        
       </div>
       </Link>
       <div className="flex md:hidden item-container">
       <a href="mailto:javier.bravoz@mail.udp.cl"> 
        <Image src={gmail} width={50} height={100} alt="" />
        <h3>javier.bravoz@mail.udp.cl</h3>
        </a>
       </div>
       <div className="flex md:hidden item-container">
        <Image src={cellphone} width={50} height={100} alt="" />
        <h3>+56920536330</h3>        
       </div>
        <h1 className="hidden md:block text-gray-700 ml-5 mb-2 mt-3 vertical-tit">C <br /> O <br /> N <br />  T <br /> A <br />  C <br /> T</h1>
      <div className="hidden: md:flex items-container">
        <Link href="https://github.com/javicoderh" target="_blank">
       <div className="hidden md:flex item-container">
        <Image src={github} width={50} height={100} alt="" />
        <h3>/javicorderh</h3>
       </div>
       </Link>
       <Link href="https://www.linkedin.com/in/javierzapico/" target="_blank">
       <div className="hidden md:flex item-container">
        <Image src={linkedin} width={50} height={100} alt="" />
        <h3>/javierzapico</h3>
       </div>
       </Link>
       <a href="mailto:javier.bravoz@mail.udp.cl"> 
       <div className="hidden md:flex item-container">
        <Image src={gmail} width={50} height={100} alt="" />
        <h3>javier.bravoz@mail.udp.cl</h3>
       </div>
       </a>
       <div className="hidden md:flex item-container">
        <Image src={cellphone} width={50} height={100} alt="" />
        <h3>+56920536330</h3>        
       </div>
       </div>
       <Image className="hidden md:block ramen-latest" src={ramen} width={400} height={200} alt="" />
  </div>
)}

export default ContactScreen;