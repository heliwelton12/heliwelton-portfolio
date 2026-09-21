const groups = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"] },
  { title: "Backend", items: ["Node.js", "Python", "FastAPI"] },
  { title: "Banco & Ferramentas", items: ["PostgreSQL", "MySQL", "Git", "GitHub"] },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <div className="section-heading">
          <span>03.</span>
          <div><p>STACK EM EVOLUÇÃO</p><h2>Tecnologias & Ferramentas</h2></div>
        </div>
        <div className="stack-grid">
          {groups.map((group) => (
            <div className="stack-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="stack-items">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
