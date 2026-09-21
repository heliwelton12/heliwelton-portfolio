export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="section-heading">
          <span>01.</span>
          <div><p>CONHEÇA UM POUCO</p><h2>Sobre mim</h2></div>
        </div>
        <div className="about-grid">
          <div className="panel about-copy">
            <p>
              Sou <strong>Bacharel em Sistemas de Informação pela UNEB</strong> e atuo como <strong>Dev Web</strong>,
              desenvolvendo interfaces, sites e sistemas com foco em organização, experiência do usuário e funcionalidade.
            </p>
            <p>
              Venho construindo minha experiência por meio de <strong>projetos práticos</strong>, aplicando conhecimentos
              em frontend e backend para criar soluções modernas, responsivas e pensadas para necessidades reais.
            </p>
            <p>
              Tenho interesse em desenvolvimento web, criação de sites para clientes, sistemas personalizados e projetos
              que unam tecnologia, identidade visual e boa usabilidade.
            </p>
          </div>
          <div className="about-stats">
            <div className="mini-card"><strong>Formação</strong><span>Sistemas de Informação • UNEB</span></div>
            <div className="mini-card"><strong>Área</strong><span>Desenvolvimento Web</span></div>
            <div className="mini-card"><strong>Localização</strong><span>Bahia, Brasil</span></div>
            <div className="mini-card"><strong>Disponível para</strong><span>Projetos e oportunidades</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
