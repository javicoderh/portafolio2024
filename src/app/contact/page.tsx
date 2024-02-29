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

    <div className="contact">
        <h1 className=" ml-5 mb-2 mt-3 horizontal-tit">Contact</h1>
        <h1 className="text-gray-700 ml-5 mb-2 mt-3 vertical-tit">C <br /> O <br /> N <br />  T <br /> A <br />  C <br /> T</h1>
      <div className="items-container">
       <div className="item-container">
        <Image src={github} width={50} height={100} alt="" />
        <h3>/javicorderh</h3>
       </div>
       <div className="item-container">
        <Image src={linkedin} width={50} height={100} alt="" />
        <h3>/javierzapico</h3>
       </div>
       <div className="item-container">
        <Image src={gmail} width={50} height={100} alt="" />
        <h3>javier.bravoz@mail.udp.cl</h3>
       </div>
       <div className="item-container">
        <Image src={cellphone} width={50} height={100} alt="" />
        <h3>+56920536330</h3>        
       </div>
       </div>
       <Image className="ramen-latest" src={ramen} width={400} height={200} alt="" />
  </div>
)}

export default ContactScreen;