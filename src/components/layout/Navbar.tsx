"use client";
import React from "react";
import {
  Navbar as NavbarP,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { ThemeToggle } from "./ThemeToggle";
import AOS from "aos";
import "aos/dist/aos.css";
import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <NavbarP isBordered data-aos-delay="1000" data-aos="fade-down">
      <NavbarBrand>
        <TransitionLink href="/" className="font-bold text-inherit">
          JEDI
        </TransitionLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link, index) => {
          const isActive = link.path === pathname;
          return (
            <NavbarItem key={index} isActive={isActive}>
              <TransitionLink href={link.path}>{link.name}</TransitionLink>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>
    </NavbarP>
  );
}
