const Skills = () => {
  return (
    <section id="skills" className="relative bg-bunker-700 pt-24 pb-16">
      {/* Page Divider en la parte superior */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{ transform: "translateY(-1px)" }}
      >
        <div style={{ overflow: "hidden" }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "#f0fafb",
              width: "125%",
              height: "75px",
              transform: "scaleX(-1)",
            }}
          >
            <path d="M1200 120L0 16.48V0h1200v120z" />
          </svg>
        </div>
      </div>

      {/* Contenedor principal con ancho personalizado y márgenes amplios */}
      <div className="mx-auto max-w-4xl px-8">
        {" "}
        {/* Ajusta max-w y px según necesites */}
        {/* Título de la sección */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-bunker-50 italic mb-16">
          Skills
        </h1>
        {/* Sección de Tecnologías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-bunker-950 p-6 bg-bunker-100 rounded-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold col-span-full mb-6">
            Technologies
          </h1>
          <div className="col-span-full flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Tailwind CSS",
              "Angular",
              "Ionic",
              "Scrum",
              "Node.js",
              "SQL",
              "Android Studio",
              "Github",
              "Python",
              "Django",
              "Jira",
              "React",
              "Typescript",
              "Next.js",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-bunker-500 text-bunker-50 rounded-full text-sm md:text-base hover:bg-bunker-600 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Sección de Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-bunker-950 p-6 bg-bunker-100 rounded-2xl mt-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold col-span-full mb-6">
            Soft Skills
          </h1>
          <div className="col-span-full flex flex-wrap gap-2">
            {[
              "Communication",
              "Teamwork",
              "Problem Solving",
              "Adaptability",
              "Time Management",
              "Leadership",
              "Creativity",
              "Empathy",
              "Critical Thinking",
              "Conflict Resolution",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-bunker-400 text-bunker-950 rounded-full text-sm md:text-base hover:bg-bunker-500 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
