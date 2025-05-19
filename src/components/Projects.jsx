const Projects = () => {
  return (
    <section id="Projects" className="relative bg-bunker-700 pt-24 pb-16">
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
            style={{ fill: "#f0fafb", width: "125%", height: "75px" }}
          >
            <path d="M1200 120L0 16.48V0h1200v120z" />
          </svg>
        </div>
      </div>

      {/* Contenedor principal con ancho personalizado y márgenes amplios */}
      <div className="mx-auto max-w-4xl px-8 w-full">
        {/* Título de la sección */}
        <h1 className="text-6xl md:text-8xl font-bold text-center text-bunker-50 italic mb-16">
          Projects
        </h1>

        {/* Contenedor de las cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16 w-full">
          {/* Card 1 */}
          <div className="flex flex-col rounded-xl bg-bunker-100 shadow-xl hover:scale-105 hover:-rotate-2 transition-all duration-300">
            <figure className="flex justify-center items-center">
              <img
                src="/img/mycondition.webp"
                alt="Card Preview"
                decoding="async"
                className="rounded-t-xl w-full h-auto object-cover"
              />
            </figure>
            <div className="flex flex-col p-6">
              <h2 className="text-xl md:text-4xl font-bold text-bunker-950 pb-4">
                My Condition
              </h2>
              <p className="text-lg md:text-xl text-pretty font-semibold text-bunker-900/80">
                A health calculator that assesses your BMI, determines if you
                are overweight and suggests Omnilife products based on your
                goal.
              </p>
              {/* Etiquetas de tecnologías */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 text-bunker-50 bg-bunker-600 hover:bg-bunker-700 hover:scale-110 transition duration-300 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-bunker-600 text-bunker-50 hover:bg-bunker-700 hover:scale-110 transition duration-300 rounded-full text-sm">
                  HTML
                </span>
                <span className="px-3 py-1 bg-bunker-600 text-bunker-50 hover:bg-bunker-700 hover:scale-110 transition duration-300 rounded-full text-sm">
                  JavaScript
                </span>
              </div>
              {/* Botón */}
              <div className="flex justify-end pt-6">
                <a
                  href="https://joisrosalesdev.github.io/mycondition/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bunker-600 text-bunker-50 w-full font-semibold text-base p-3 rounded-xl text-center hover:bg-bunker-700 hover:scale-105 transition duration-300"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col rounded-2xl bg-bunker-100 shadow-lg hover:scale-105 hover:rotate-2 transition-all duration-300">
            <figure className="flex justify-center items-center">
              <img
                src="/img/yeezyverse.webp"
                alt="Card Preview"
                decoding="async"
                className="rounded-t-2xl w-full h-auto object-cover"
              />
            </figure>
            <div className="flex flex-col p-6">
              <h2 className="text-2xl md:text-4xl font-bold text-bunker-950 pb-4">
                YeezyVerse
              </h2>
              <p className="text-lg md:text-xl text-pretty font-semibold text-bunker-900/80">
                A landing page strategically designed to help fans learn more
                about Kanye West and his career in music and fashion.
              </p>
              {/* Etiquetas de tecnologías */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-bunker-600 text-bunker-50 hover:bg-bunker-700 hover:scale-110 transition duration-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-bunker-600 text-bunker-50 hover:bg-bunker-700 hover:scale-110 transition duration-300 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-bunker-600 text-bunker-50 hover:bg-bunker-700 hover:scale-110 transition duration-300 rounded-full text-sm">
                  HTML
                </span>
                <span className="px-3 py-1 bg-bunker-600 text-bunker-50 hover:bg-bunker-700 hover:scale-110 transition duration-300 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-bunker-600 text-bunker-50 hover:bg-bunker-700 hover:scale-110 transition duration-300 rounded-full text-sm">
                  TypeScript
                </span>
              </div>
              {/* Botón */}
              <div className="flex justify-end pt-6">
                <a
                  href="https://yeezyverse-jois.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bunker-600 text-bunker-50 w-full font-semibold text-base p-3 rounded-xl text-center hover:bg-bunker-700 hover:scale-105 transition duration-300"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
