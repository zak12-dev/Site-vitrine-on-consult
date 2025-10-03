"use client";
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 px-6 md:px-12">
      <div className="flex flex-col items-center gap-4">
        {/* Texte */}
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide text-center">
          Simple process, great results
        </h1>
        <p className="text-sm sm:text-base text-gray-300 text-center">
          I help you on every step of the journey
        </p>

        {/* Réseaux sociaux */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-400 mt-4 text-center">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
