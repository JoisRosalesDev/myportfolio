const AboutMe = () => {
  return (
    <section id="AboutMe" className="relative bg-bunker-50 pt-24 pb-16">
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
              fill: "#296875",
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
        <h1 className="text-6xl md:text-8xl font-bold text-center text-bunker-950 italic mb-16">
          About Me
        </h1>

        {/* Contenido de la sección */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Foto de perfil y botones */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            {/* Foto de perfil */}
            <img
              src="/img/joispfp.webp"
              alt="Profile Picture"
              decoding="async"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-bunker-600/80 bg-bunker-600 hover:border-bunker-700 hover:scale-105 transition-all duration-300 shadow-xl"
            />

            {/* Botones de descarga */}
            <div className="flex flex-col gap-4 mt-6 w-full">
              <a
                href="/docs/TalkChile.pdf"
                download="TalkChile.pdf"
                className="bg-bunker-600 text-bunker-50 text-center font-semibold text-lg p-3 rounded-xl hover:bg-bunker-700 hover:scale-105 transition-all duration-300"
              >
                English Certificate
              </a>
              <a
                href="/docs/Scrum.pdf"
                download="Scrum.pdf"
                className="bg-bunker-600 text-bunker-50 text-center font-semibold text-lg p-3 rounded-xl hover:bg-bunker-700 hover:scale-105 transition-all duration-300"
              >
                Scrum Certificate
              </a>
            </div>
          </div>

          {/* Card con descripción */}
          <div className="w-full md:w-2/3 bg-bunker-600 rounded-xl p-8 shadow-xl">
            <h2 className="text-4xl font-bold text-bunker-50 mb-6">
              Hi, I&apos;m Jois!
            </h2>
            <p className="text-lg text-bunker-50 text-pretty hover:scale-110 transition-all duration-300">
              21 year old student of Computer Engineering, studying 7th
              semester, with a focus on{" "}
              <strong className="font-erode italic">Front-end development</strong>. I
              have participated in collaborative academic projects under{" "}
              <strong className="font-erode italic">agile methodologies</strong> such
              as Scrum, developing skills in teamwork, problem solving and
              adaptation to dynamic environments.
            </p>
            <p className="text-lg text-bunker-50 mt-4 text-pretty hover:scale-110 transition-all duration-300">
              I am looking for an{" "}
              <strong className="font-erode italic">internship opportunity</strong>{" "}
              to apply my knowledge,{" "}
              <strong className="font-erode italic">
                keep learning and add value
              </strong>{" "}
              in the technological field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
