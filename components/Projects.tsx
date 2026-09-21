import Image from "next/image";

type Project = {
  title: string;
  subtitle: string;
  status: string;
  description: string;
  tech: string[];
  cover: string;
  coverAlt: string;
  gallery: { src: string; alt: string }[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "HF ERP",
    subtitle: "Sistema web de gestão empresarial",
    status: "Em desenvolvimento",
    description:
      "Sistema desenvolvido para auxiliar no controle da operação de uma empresa, reunindo vendas, clientes, serviços, estoque e financeiro em uma interface moderna e organizada.",
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    cover: "/projects/hf-erp/dashboard.webp",
    coverAlt: "Dashboard do sistema HF ERP",
    gallery: [
      { src: "/projects/hf-erp/servicos.webp", alt: "Tela de serviços do HF ERP" },
      { src: "/projects/hf-erp/caixa-pdv.webp", alt: "Tela de Caixa e PDV do HF ERP" },
      { src: "/projects/hf-erp/clientes.webp", alt: "Tela de clientes do HF ERP" },
    ],
    github: "https://github.com/heliwelton12/hf-erp",
  },
  {
    title: "Cactus Burguer",
    subtitle: "Cardápio digital responsivo",
    status: "Projeto real • Publicado",
    description:
      "Projeto desenvolvido para a Cactus Burguer, com foco na experiência do usuário em dispositivos móveis, organização do cardápio, personalização do pedido e envio das informações diretamente pelo WhatsApp.",
    tech: ["HTML", "CSS", "JavaScript", "Responsivo", "WhatsApp"],
    cover: "/projects/cactus-burguer/capa.webp",
    coverAlt: "Apresentação do cardápio digital Cactus Burguer",
    gallery: [],
    live: "https://cactus-burguer.cactusburguer.chatgpt.site/",
  },
  {
    title: "UniPlace",
    subtitle: "Sistema de agendamento de salas e laboratórios",
    status: "Projeto acadêmico",
    description:
      "Projeto acadêmico desenvolvido para facilitar o agendamento de salas e laboratórios, oferecendo organização da agenda, cadastro de professores e visualização prática das reservas em ambiente educacional.",
    tech: ["Node.js", "MySQL", "HTML", "CSS", "JavaScript"],
    cover: "/projects/uniplace/painel-administrativo.webp",
    coverAlt: "Painel administrativo do UniPlace",
    gallery: [
      { src: "/projects/uniplace/login.webp", alt: "Tela de login do UniPlace" },
      { src: "/projects/uniplace/agendamento.webp", alt: "Tela de agendamento de sala do UniPlace" },
      { src: "/projects/uniplace/historico.webp", alt: "Histórico de agendamentos do UniPlace" },
    ],
    github: "https://github.com/heliwelton12/agendamento-de-salas",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <span>02.</span>
          <div><p>TRABALHOS RECENTES</p><h2>Projetos em destaque</h2></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-visual project-image-wrap">
                <span className="project-index">0{index + 1}</span>
                <Image
                  src={project.cover}
                  alt={project.coverAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="project-image"
                />
                <div className="project-image-overlay" />
              </div>

              <div className="project-body">
                <span className="status"><i /> {project.status}</span>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((item) => <span key={item}>{item}</span>)}
                </div>

                <div className="project-actions">
                  {project.live && (
                    <a className="project-link primary-project-link" href={project.live} target="_blank" rel="noreferrer">
                      Ver projeto ↗
                    </a>
                  )}
                  {project.github && (
                    <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  )}
                </div>

                {project.gallery.length > 0 && (
                  <details className="project-details">
                    <summary>Ver mais telas</summary>
                    <div className="project-gallery">
                      {project.gallery.map((image) => (
                        <a href={image.src} target="_blank" rel="noreferrer" key={image.src} className="gallery-item">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={900}
                            height={700}
                            className="gallery-image"
                          />
                        </a>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="project-note">
          HF ERP está em desenvolvimento, UniPlace é um projeto acadêmico e Cactus Burguer já está publicado.
        </p>
      </div>
    </section>
  );
}
