const Services = () => {
  return (
    <section id="services" className="relative bg-bunker-50 pt-24 pb-16">
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
            style={{ fill: "#071013", width: "125%", height: "75px", transform: "scaleX(-1)" }}
          >
            <path d="M1200 120L0 16.48V0h1200v120z" />
          </svg>
        </div>
      </div>

      {/* Contenedor principal con ancho personalizado y márgenes amplios */}
      <div className="mx-auto max-w-4xl px-8 w-full">
        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-bunker-950 italic mb-16">
          Services
        </h1>

        {/* Contenedor de las cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-bunker-50">
          {/* Card 1: User Experience */}
          <div className="flex flex-col items-center bg-bunker-900 rounded-2xl p-6 shadow-lg shadow-bunker-800">
            {/* Icono dentro de la card */}
            <div className="flex justify-center">
              <img
                src="/src/assets/user-experience.png"
                alt="User Experience"
                className="w-14 h-auto"
              />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mt-6 text-center">
              User Experience
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-center mt-4">
              I design user-centric digital experiences, where every interaction
              is intuitive, efficient, and memorable.
            </p>
          </div>

          {/* Card 2: Web Development */}
          <div className="flex flex-col items-center bg-bunker-900 rounded-2xl p-6 shadow-lg shadow-bunker-800">
            {/* Icono dentro de la card */}
            <div className="flex justify-center">
              <img
                src="/src/assets/vs-code.png"
                alt="Web Development"
                className="w-14 h-auto"
              />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mt-6 text-center">
              Web Development
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-center mt-4">
              I build robust and functional websites using the latest technologies
              and frameworks such as Tailwind CSS, React, and others.
            </p>
          </div>

          {/* Card 3: Responsive */}
          <div className="flex flex-col items-center bg-bunker-900 rounded-2xl p-6 shadow-lg shadow-bunker-800">
            {/* Icono dentro de la card */}
            <div className="flex justify-center">
              <img
                src="/src/assets/responsive.png"
                alt="Responsive"
                className="w-14 h-auto"
              />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mt-6 text-center">
              Responsive
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-center mt-4">
              Your website will look and function perfectly on mobile devices,
              tablets, and desktop computers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;