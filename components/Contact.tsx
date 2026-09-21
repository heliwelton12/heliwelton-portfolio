const contacts = [
  {
    label: "WhatsApp",
    value: "+55 (75) 98245-2326",
    href: "https://wa.me/5575982452326",
  },
  {
    label: "Instagram",
    value: "@heliwelton.codes",
    href: "https://www.instagram.com/heliwelton.codes/",
  },
  {
    label: "GitHub",
    value: "github.com/heliwelton12",
    href: "https://github.com/heliwelton12",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/heliweltondev",
    href: "https://www.linkedin.com/in/heliweltondev/",
  },
  {
    label: "E-mail",
    value: "heliweltondevs@hotmail.com",
    href: "mailto:heliweltondevs@hotmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="section contact-section">
      <div className="container contact-box">
        <div>
          <div className="eyebrow"><span /> CONTATO</div>
          <h2>Vamos conversar?</h2>
          <p>
            Se você deseja criar um site, desenvolver um sistema ou conversar sobre uma oportunidade,
            estou disponível para novos projetos e conexões profissionais.
          </p>
        </div>
        <div className="contact-links">
          {contacts.map((contact) => (
            <a key={contact.label} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <span>{contact.label}</span><strong>{contact.value}</strong><b>↗</b>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
