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
            style={{ fill: "#f0fafb", width: "125%", height: "75px" }} // Cambia el fill al color de tu fondo
          >
            <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              opacity=".25"
            />
            <path
              d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
              opacity=".5"
            />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
        </div>
      </div>

      {/* Contenedor principal con ancho personalizado y márgenes amplios */}
      <div className="mx-auto max-w-4xl px-8"> {/* Ajusta max-w y px según necesites */}
        {/* Título de la sección */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-bunker-50 italic mb-16">
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