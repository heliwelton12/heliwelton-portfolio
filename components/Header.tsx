"use client";

import { useState } from "react";

const links = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Projetos", "#projetos"],
  ["Tecnologias", "#tecnologias"],
  ["Contato", "#contato"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav-wrap">
        <a className="brand" href="#inicio" onClick={() => setOpen(false)}>
          Heliwelton<span>.dev</span>
        </a>

        <button
          className="menu-button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
