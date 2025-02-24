const AboutMe = () => {
  return (
    <section id="about" className="relative bg-bunker-700 pt-24 pb-16">
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
      <div className="mx-auto max-w-4xl px-8 w-full">
        {/* Título de la sección */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-bunker-50 italic mb-16">
          About Me
        </h1>

        {/* Contenido de la sección */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Foto de perfil y botones */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            {/* Foto de perfil */}
            <img
              src="/public/joispfp.png" // Cambia esta ruta por la de tu foto
              alt="Profile Picture"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-bunker-500 shadow-lg"
            />

            {/* Botones de descarga */}
            <div className="flex flex-col gap-4 mt-6 w-full">
              <a
                href="/src/assets/TalkChile.pdf" // Cambia esta ruta por la de tu certificado
                download
                className="bg-bunker-500 text-bunker-50 text-center font-bold text-lg p-3 rounded-lg hover:bg-bunker-600 active:scale-95 transition-transform transform"
              >
                English Certificate
              </a>
              <a
                href="/src/assets/Scrum.pdf" // Cambia esta ruta por la de tu certificado
                download
                className="bg-bunker-500 text-bunker-50 text-center font-bold text-lg p-3 rounded-lg hover:bg-bunker-600 active:scale-95 transition-transform transform"
              >
                Scrum Certificate
              </a>
            </div>
          </div>

          {/* Card con descripción */}
          <div className="w-full md:w-2/3 bg-bunker-100 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-bunker-950 mb-6">
              Hi, I&apos;m Jois!
            </h2>
            <p className="text-lg text-bunker-700">
              21 year old student of Computer Engineering, studying 7th
              semester, with a focus on Front-end development. I have
              participated in collaborative academic projects under agile
              methodologies such as Scrum, developing skills in teamwork,
              problem solving and adaptation to dynamic environments.
            </p>
            <p className="text-lg text-bunker-700 mt-4">
              I am looking for an internship opportunity to apply my knowledge,
              keep learning and add value in the technological field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
