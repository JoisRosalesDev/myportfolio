const Services = () => {
  return (
    <section
      id="services"
      className="py-32 px-6 flex flex-col items-center justify-center"
    >
      {/* Título principal */}
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-bunker-950 italic mb-16">
        Services
      </h1>

      {/* Contenedor de las cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl text-bunker-50">
        {/* Card 1: User Experience */}
        <div className="flex flex-col items-center bg-bunker-900 rounded-2xl p-6 shadow-lg shadow-bunker-800">
          {/* Icono dentro de la card */}
          <div className="flex justify-center">
            <img
              src="/src/assets/user-experience.svg"
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
              src="/src/assets/vs-code.svg"
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
              src="/src/assets/responsive.svg"
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
    </section>
  );
};

export default Services;