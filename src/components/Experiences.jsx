function Experiences() {
  const experiences = [
    {
      poste: "Volontaire",
      evenement: "JOJ Dakar 2026",
      lieu: "Complexe Tour de l'Oeuf" ,
      periode: "Du 31 Octobre au 13 Novembre 2026",
      description: "Services Evenementiels, Acceuil des spectateurs",
    },
    
  ];

  return (
    <section className="bloc">
      <h2>Expériences</h2>
      {experiences.map((e) => (
        <div key={e.poste + e.lieu} className="experience">
          <h3>{e.poste} – {e.lieu}</h3>
          <p><em>{e.evenement}</em></p>
          <p><em>{e.periode}</em></p>
          <p>{e.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experiences;