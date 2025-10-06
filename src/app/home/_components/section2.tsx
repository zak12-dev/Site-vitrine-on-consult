"use client";
import React from "react";
import { Megaphone, Share2, Users, ClipboardList, Palette } from "lucide-react";

export default function Section2() {
  const services = [
    {
      icon: <Megaphone className="w-6 h-6 text-green-600" />,
      title: "Google Ads",
      description:
        "Concevez des campagnes publicitaires précises et efficaces. Attirez les bons clients au bon moment.",
    },
    {
      icon: <Share2 className="w-6 h-6 text-green-600" />,
      title: "Social media",
      description:
        "Animez vos réseaux sociaux avec du contenu pertinent et engageant. Développez votre communauté.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Human ressources",
      description:
        "Optimisez vos processus RH avec des solutions modernes. Renforcez la cohésion d’équipe, valorisez vos talents.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-green-600" />,
      title: "Project management",
      description:
        "Gérez vos projets avec méthode et clarté. Bénéficiez d’un suivi rigoureux, d’une organisation agile.",
    },
    {
      icon: <Palette className="w-6 h-6 text-green-600" />,
      title: "Design",
      description:
        "Créez des expériences visuelles modernes et ergonomiques. Offrez à vos utilisateurs des interfaces intuitives.",
    },
  ];

  return (
    <div id="services" className="py-20 px-6 md:px-12 bg-gray-100 scroll-mt-20">
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Première colonne : Texte */}
        <div className="flex flex-col justify-start max-w-6xl">
          <h2 className="text-2xl md:text-3xl text-green-950 font-semibold">
            Amazing Services
          </h2>
          <p className="text-green-950 mt-4">
            Découvrez ce que nous pouvons vous offrir <br />
            pour booster vos projets. <br /> Découvrez ce que nous pouvons vous
            offrir
          </p>
          <button className="bg-green-400 self-start text-[15px] text-green-950 px-6 py-2 rounded-sm font-medium hover:bg-green-500 transition mt-5 shadow-md">
            {" "}
            Lets talk{" "}
          </button>
        </div>

        {/* Les autres colonnes : Cards */}
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transition hover:shadow-xl hover:bg-green-950"
          >
            <div className="flex items-center gap-2 mb-4">
              {service.icon}
              <h3 className="text-xl text-green-950 font-medium group-hover:text-white">
                {service.title}
              </h3>
            </div>
            <p className="text-green-950 text-[15px] group-hover:text-white">
              {service.description}
            </p>
            <button className="text-green-950 text-[15px] group-hover:text-white mt-5 hover:underline focus:underline">
              Read more
            </button>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden scroll-mt-20">
        {/* Texte */}
        <div className="text-center mb-6">
          <h2 className="text-2xl text-green-950 font-semibold">
            Amazing Services
          </h2>
          <p className="text-green-950 mt-2">
            Découvrez ce que nous pouvons vous offrir pour booster vos projets.
          </p>
          <button className="bg-green-400 text-[15px] text-green-950 px-6 py-2 rounded-sm font-medium hover:bg-green-500 transition mt-4 shadow-md">
            Lets talk
          </button>
        </div>

        {/* Cards : scroll horizontal */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-72 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transition hover:shadow-xl hover:bg-green-950"
            >
              <div className="flex items-center gap-2 mb-4">
                {service.icon}
                <h3 className="text-xl text-green-950 font-medium group-hover:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-green-950 text-[15px] group-hover:text-white">
                {service.description}
              </p>
              <button className="text-green-950 text-[15px] group-hover:text-white mt-5">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
