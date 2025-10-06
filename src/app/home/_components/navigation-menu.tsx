"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  const [activeSection, setActiveSection] = React.useState("#home");

  // Définir les sections pour scroll sur la page Home
  const links = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About me" },
    { href: "/cases", label: "Cases" },
  ];

  // --- Scroll Spy ---
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 4; // ajustement sensible
      let currentSection = "#home";
      for (let i = 0; i < links.length; i++) {
        const link = links[i];

        // ✅ On ne gère que les ancres internes (ceux qui commencent par "#")
        if (!link.href.startsWith("#")) continue;

        const section = document.querySelector(link.href) as HTMLElement | null;
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = link.href;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Détecte la section active au chargement
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavigationMenu viewport={false}>
      {/* Desktop */}
      <NavigationMenuList className="hidden md:flex">
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`relative inline-block text-green-950
                  before:absolute before:bottom-0 before:left-0 before:h-[1px] before:bg-green-950 before:transition-all before:duration-200
                  ${
                    activeSection === link.href
                      ? "before:w-full"
                      : "before:w-0 hover:before:w-full focus:before:w-full"
                  }`}
              >
                {link.label}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      {/* Mobile */}
      <NavigationMenuList className="flex md:hidden justify-center items-center">
        {links.map((link, index) => (
          <React.Fragment key={link.href}>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`px-2 text-green-950 relative
                    before:absolute before:bottom-0 before:left-0 before:h-[1px] before:bg-green-950 before:transition-all before:duration-200
                    ${
                      activeSection === link.href
                        ? "before:w-full font-semibold"
                        : "before:w-0 hover:before:w-full focus:before:w-full"
                    }`}
                >
                  {link.label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Separator vertical sauf après le dernier lien */}
            {index < links.length - 1 && (
              <div className="border-r border-green-950 h-3 mx-1"></div>
            )}
          </React.Fragment>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
