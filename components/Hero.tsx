import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="circuit circuit-a" />
      <div className="circuit circuit-b" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span /> DEV WEB • TECNOLOGIA</div>
          <p className="hello">Olá, eu sou</p>
          <h1>Heliwelton <span>Fernandes</span></h1>
          <p className="hero-description">
            Bacharel em Sistemas de Informação e Dev Web, desenvolvendo sites e sistemas modernos,
            responsivos e funcionais.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">Ver meus projetos</a>
            <a className="button ghost" href="#contato">Entrar em contato</a>
          </div>
          <div className="hero-tags" aria-label="Áreas de atuação">
            <span>Frontend</span><span>Backend</span><span>Responsividade</span>
          </div>
        </div>

        <div className="portrait-shell" aria-label="Foto profissional de Heliwelton Fernandes">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait-glow" />
          <Image
            src="/profile/heliwelton.jpg"
            alt="Heliwelton Fernandes"
            width={900}
            height={900}
            priority
            className="portrait"
          />
          <div className="code-badge code-left">{"{ }"}</div>
          <div className="code-badge code-right">{"</>"}</div>
        </div>
      </div>
    </section>
  );
}
