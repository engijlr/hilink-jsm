import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Link href="/">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul>
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href="/" key={link.label}>
                    <p>{link.label}</p>
                    <p>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div>
              <FooterColumn title={SOCIALS.title}>
                <ul>
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div />
        <p>2024 Hilink | All rights reserved</p>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

export default Footer;
