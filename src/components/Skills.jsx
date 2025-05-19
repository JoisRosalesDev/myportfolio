const Services = () => {
  return (
    <section id="Services" className="relative bg-bunker-50 pt-24 pb-16">
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
            style={{ fill: "#071013", width: "125%", height: "75px" }} // Cambia el fill al color de tu fondo
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

      {/* Contenedor principal con bento grid - Ajustado para centrar correctamente */}
      <div className="container mx-auto p-4 sm:px-6 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-bunker-950 italic mb-8 md:mb-12 lg:mb-16">
          Skills
        </h1>

        {/* Bento grid responsivo - Recuperando diseño original pero centrado */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-5 gap-4 text-bunker-50">
          {/* Card 1: Web development */}
          <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-3  rounded-xl p-4 md:p-6 flex flex-col bg-bunker-600 hover:bg-bunker-700 hover:scale-105 transition duration-300">
            <div className="mb-3 md:mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-10 md:h-10"
              >
                <path
                  fill="#f0fafb"
                  d="M21.95 4.903a1 1 0 0 0-.06-.166a1.2 1.2 0 0 0-.31-.425a1.2 1.2 0 0 0-.29-.197l-4.118-1.994a1.27 1.27 0 0 0-.75-.103a1.26 1.26 0 0 0-.672.347L9.106 9.75L5.228 6.553l-.337-.281a.8.8 0 0 0-.413-.19q-.033-.006-.066-.007q-.029-.004-.059-.003q-.046 0-.09.003a.3.3 0 0 0-.079.013a.7.7 0 0 0-.156.046l-1.515.629a.87.87 0 0 0-.372.306a.85.85 0 0 0-.141.463v8.936c0 .163.05.325.14.463c.091.134.222.24.373.306l1.515.638a.85.85 0 0 0 .45.056a.85.85 0 0 0 .413-.19l.337-.294l3.878-3.198l6.644 7.386q.034.033.072.066q.004.005.01.006a1.25 1.25 0 0 0 1.34.172l4.119-1.994a1 1 0 0 0 .153-.088c.097-.065.187-.147.262-.231q.057-.07.103-.144c.125-.2.191-.431.191-.669V5.247q0-.175-.05-.344M4.5 14.874V9.126l2.584 2.876zm7.334-2.873L17 7.742v8.518z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-bunker-50 mb-2 md:mb-4">
              Web development
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl text-bunker-50 flex-grow text-pretty">
              Programming websites from scratch with HTML, CSS, JavaScript and
              modern frameworks such as React, Tailwind or Astro.
            </p>
          </div>

          {/* Card 2: Responsive websites */}
          <div className="col-span-1 md:col-span-2 md:col-start-3 row-span-1 md:row-span-2 rounded-xl p-4 md:p-6 flex flex-col hover:shadow-lg bg-bunker-600 hover:bg-bunker-700 hover:scale-105 transition duration-300">
            <div className="mb-3 md:mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-10 md:h-10"
              >
                <path
                  fill="#f0fafb"
                  d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6zM0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1zm-2-8v7h5v-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-bunker-50 mb-2 md:mb-4">
              Responsive websites
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl text-bunker-50 flex-grow text-pretty">
              Creation of sites adaptable to any screen, from computers to
              mobile devices.
            </p>
          </div>

          {/* Card 3: Web performance optimization */}
          <div className="col-span-1 md:col-span-2 md:col-start-1 md:row-start-4 row-span-1 md:row-span-2  rounded-2xl p-4 md:p-6 flex flex-col hover:shadow-lg bg-bunker-600 hover:bg-bunker-700 hover:scale-105 transition duration-300">
            <div className="mb-3 md:mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-10 md:h-10"
              >
                <path
                  fill="none"
                  stroke="#f0fafb"
                  strokeWidth="2"
                  d="M2 22h4v-4H2zM22 2L12 12m10-2V2h-8m8 11h-4v9h4zm-12 9h4v-6h-4z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-bunker-50 mb-2 md:mb-4">
              Web performance optimization
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl text-bunker-50 flex-grow text-pretty">
              Improve load times, optimize images and reduce unnecessary scripts
              to make sites faster and more efficient.
            </p>
          </div>

          {/* Card 4: Maintenance and improvement */}
          <div className="col-span-1 md:col-span-2 md:col-start-3 md:row-start-3 row-span-1 md:row-span-3 rounded-2xl p-4 md:p-6 flex flex-col hover:shadow-lg bg-bunker-600 hover:bg-bunker-700 hover:scale-105 transition duration-300">
            <div className="mb-3 md:mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                className="w-8 h-8 md:w-10 md:h-10"
              >
                <path
                  fill="#f0fafb"
                  d="M1.313 0L0 1.313l2.313 4l1.5-.22l9.156 9.157l-.781.75c-.4.4-.4 1.006 0 1.406l.406.407c.4.4 1.012.4 1.312 0L15.094 18c-.1.6 0 1.313.5 1.813L21 25.188c1.1 1.1 2.9 1.1 4 0c1.3-1.2 1.288-2.994.188-4.094l-5.375-5.407c-.5-.5-1.213-.7-1.813-.5L16.687 14c.3-.4.3-1.012 0-1.313l-.375-.374a.974.974 0 0 0-1.406 0l-.656.656l-9.156-9.156l.218-1.5l-4-2.313zm19.5.031C18.84-.133 16.224 1.175 15 2.312c-1.506 1.506-1.26 3.475-.063 5.376l-2.124 2.125l1.5 1.687c.8-.7 1.98-.7 2.78 0l.407.406l.094.094l.875-.875c1.808 1.063 3.69 1.216 5.125-.219c1.4-1.3 2.918-4.506 2.218-6.406L23 7.406c-.4.4-1.006.4-1.406 0L18.687 4.5a.974.974 0 0 1 0-1.406L21.595.188c-.25-.088-.5-.133-.782-.157m-11 12.469l-3.626 3.625A5.3 5.3 0 0 0 5 16c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5c0-.513-.081-1.006-.219-1.469l2.125-2.125l-.312-.406c-.8-.8-.794-2.012-.094-2.813L9.812 12.5zm7.75 4.563c.125 0 .243.024.343.125l5.907 5.906c.2.2.2.518 0 .718s-.52.2-.72 0l-5.905-5.906c-.2-.2-.2-.518 0-.718c.1-.1.25-.125.375-.125M5.688 18.405l1.906 1.907l-.688 2.593l-2.593.688l-1.907-1.907l.688-2.593z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-bunker-50 mb-2 md:mb-4">
              Maintenance and improvement of existing websites
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl text-bunker-50 flex-grow text-pretty">
              Code refactoring, design improvements and technology upgrades in
              already developed projects, optimizing their performance and
              scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
