import React from "react";
import Image from "next/image";
import Link from "next/link";
import linkedin from "../../../public/linkedin.svg";
import github from "../../../public/github.png";
import gmail from "../../../public/gmail.svg";
import cellphone from "../../../public/cellphone.png";

const items = [
  {
    href: "https://github.com/javicoderh",
    label: "/javicoderh",
    icon: github,
    alt: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/javierzapico/",
    label: "/javierzapico",
    icon: linkedin,
    alt: "LinkedIn",
    external: true,
  },
  {
    href: "mailto:javier.bravoz@mail.udp.cl",
    label: "javier.bravoz@mail.udp.cl",
    icon: gmail,
    alt: "Email",
    external: false,
  },
  {
    href: null,
    label: "+56 9 2053 6330",
    icon: cellphone,
    alt: "Phone",
    external: false,
  },
];

const ContactScreen = () => {
  return (
    <div className="contact">
      <h1 className="hidden md:block horizontal-tit">Contact</h1>
      <h1 className="hidden md:block vertical-tit">
        C <br /> O <br /> N <br /> T <br /> A <br /> C <br /> T
      </h1>
      <h1 className="block md:hidden mobile-tit">Contact</h1>

      <div className="contact-list">
        {items.map((item) => {
          const inner = (
            <>
              <Image src={item.icon} width={28} height={28} alt={item.alt} />
              <span>{item.label}</span>
            </>
          );

          if (!item.href) {
            return (
              <div key={item.label} className="contact-row">
                {inner}
              </div>
            );
          }

          if (item.external) {
            return (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row"
              >
                {inner}
              </Link>
            );
          }

          return (
            <a key={item.label} href={item.href} className="contact-row">
              {inner}
            </a>
          );
        })}
      </div>

    </div>
  );
};

export default ContactScreen;
