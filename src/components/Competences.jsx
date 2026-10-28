function Competences() {
  const competences = [
    "HTML / CSS",
    "JavaScript",
    "Python",
    "SQL",
    "Bureautique",
    "Travail en équipe",
    "Communication",
  ];

  return (
    <section className="bloc">
      <h2>Compétences</h2>
      <ul>
        {competences.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}

export default Competences;