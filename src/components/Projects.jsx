const Projects = () => {
  return (
    <section id="projects" className="relative bg-bunker-50 pt-24 pb-16">
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
            style={{ fill: "#296875", width: "125%", height: "75px" }}
          >
            <path d="M1200 120L0 16.48V0h1200v120z" />
          </svg>
        </div>
      </div>

      {/* Contenedor principal con ancho personalizado y márgenes amplios */}
      <div className="mx-auto max-w-4xl px-8 w-full">
        {/* Título de la sección */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-bunker-950 italic mb-16">
          Projects
        </h1>

        {/* Contenedor de las cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Card 1 */}
          <div className="flex flex-col rounded-2xl bg-bunker-100 shadow-lg">
            <figure className="flex justify-center items-center rounded-t-2xl">
              <img
                src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                alt="Card Preview"
                className="rounded-t-2xl w-full h-48 object-cover"
              />
            </figure>
            <div className="flex flex-col p-6">
              <h2 className="text-2xl font-bold text-bunker-950 pb-4">
                Generator
              </h2>
              <p className="text-lg text-bunker-700">
                Leverage a graphical editor to create, design and customize
                beautiful web components.
              </p>
              {/* Etiquetas de tecnologías */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-bunker-500 text-bunker-50 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-bunker-500 text-bunker-50 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-bunker-500 text-bunker-50 rounded-full text-sm">
                  Node.js
                </span>
              </div>
              {/* Botón */}
              <div className="flex justify-end pt-6">
                <button className="bg-bunker-600 text-bunker-50 w-full font-bold text-base p-3 rounded-lg hover:bg-bunker-700 active:scale-95 transition-transform transform">
                  Try it out!
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded-2xl bg-bunker-100 shadow-lg">
            <figure className="flex justify-center items-center rounded-t-2xl">
              <img
                src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                alt="Card Preview"
                className="rounded-t-2xl w-full h-48 object-cover"
              />
            </figure>
            <div className="flex flex-col p-6">
              <h2 className="text-2xl font-bold text-bunker-950 pb-4">
                E-commerce
              </h2>
              <p className="text-lg text-bunker-700">
                A fully functional e-commerce platform with a modern design and
                seamless user experience.
              </p>
              {/* Etiquetas de tecnologías */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-bunker-500 text-bunker-50 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-bunker-500 text-bunker-50 rounded-full text-sm">
                  Stripe
                </span>
                <span className="px-3 py-1 bg-bunker-500 text-bunker-50 rounded-full text-sm">
                  MongoDB
                </span>
              </div>
              {/* Botón */}
              <div className="flex justify-end pt-6">
                <button className="bg-bunker-600 text-bunker-50 w-full font-bold text-base p-3 rounded-lg hover:bg-bunker-700 active:scale-95 transition-transform transform">
                  Visit Site
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col rounded-2xl bg-bunker-100 shadow-lg">
            <figure className="flex justify-center items-center rounded-t-2xl">
              <img
                src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                alt="Card Preview"
                className="rounded-t-2xl w-full h-48 object-cover"
              />
            </figure>
            <div className="flex flex-col p-6">
              <h2 className="text-2xl font-bold text-bunker-950 pb-4">
                Portfolio
              </h2>
              <p className="text-lg text-bunker-700">
                A personal portfolio website showcasing projects, skills, and
                contact information.
              </p>
              {/* Etiquetas de tecnologías */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-bunker-500 text-bunker-50 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-bunker-500 text-bunker-50 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-bunker-500 text-bunker-50 rounded-full text-sm">
                  Vite
                </span>
              </div>
              {/* Botón */}
              <div className="flex justify-end pt-6">
                <button className="bg-bunker-600 text-bunker-50 w-full font-bold text-base p-3 rounded-lg hover:bg-bunker-700 active:scale-95 transition-transform transform">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
