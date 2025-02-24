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

      {/* Contenedor principal con ancho personalizado y márgenes amplios */}
      <div className="mx-auto max-w-4xl px-8 w-full">
        {/* Título principal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-bunker-950 italic mb-16">
          Services
        </h1>

        {/* Contenedor de las cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-bunker-50">
          {/* Card 1: User Experience */}
          <div className="flex flex-col items-center bg-bunker-900 rounded-2xl p-6 shadow-lg shadow-bunker-800">
            {/* Icono dentro de la card */}
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                className="w-14 h-14"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="#f0fafb"
                    d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m6.5-2c-.195 0-.444.124-.606.448a1 1 0 0 1-1.788-.896C6.542 8.68 7.413 8 8.5 8s1.957.68 2.394 1.552a1 1 0 0 1-1.788.896C8.944 10.124 8.696 10 8.5 10m7 0c-.195 0-.444.124-.606.448a1 1 0 1 1-1.788-.896C13.543 8.68 14.413 8 15.5 8s1.957.68 2.394 1.552a1 1 0 0 1-1.788.896c-.162-.324-.41-.448-.606-.448m-6.896 4.338a1 1 0 0 1 1.412-.088c.53.468 1.223.75 1.984.75s1.455-.282 1.984-.75a1 1 0 1 1 1.324 1.5A4.98 4.98 0 0 1 12 17a4.98 4.98 0 0 1-3.308-1.25a1 1 0 0 1-.088-1.412"
                  />
                </g>
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-6 text-center">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                className="w-14 h-14"
              >
                <path
                  fill="#f0fafb"
                  d="M21.95 4.903a1 1 0 0 0-.06-.166a1.2 1.2 0 0 0-.31-.425a1.2 1.2 0 0 0-.29-.197l-4.118-1.994a1.27 1.27 0 0 0-.75-.103a1.26 1.26 0 0 0-.672.347L9.106 9.75L5.228 6.553l-.337-.281a.8.8 0 0 0-.413-.19q-.033-.006-.066-.007q-.029-.004-.059-.003q-.046 0-.09.003a.3.3 0 0 0-.079.013a.7.7 0 0 0-.156.046l-1.515.629a.87.87 0 0 0-.372.306a.85.85 0 0 0-.141.463v8.936c0 .163.05.325.14.463c.091.134.222.24.373.306l1.515.638a.85.85 0 0 0 .45.056a.85.85 0 0 0 .413-.19l.337-.294l3.878-3.198l6.644 7.386q.034.033.072.066q.004.005.01.006a1.25 1.25 0 0 0 1.34.172l4.119-1.994a1 1 0 0 0 .153-.088c.097-.065.187-.147.262-.231q.057-.07.103-.144c.125-.2.191-.431.191-.669V5.247q0-.175-.05-.344M4.5 14.874V9.126l2.584 2.876zm7.334-2.873L17 7.742v8.518z"
                />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-6 text-center">
              Web Development
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-center mt-4">
              I build robust and functional websites using the latest
              technologies and frameworks such as Tailwind CSS, React, and
              others.
            </p>
          </div>

          {/* Card 3: Responsive */}
          <div className="flex flex-col items-center bg-bunker-900 rounded-2xl p-6 shadow-lg shadow-bunker-800">
            {/* Icono dentro de la card */}
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                className="w-14 h-14"
              >
                <path
                  fill="#f0fafb"
                  d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6zM0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1zm-2-8v7h5v-7z"
                />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-6 text-center">
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
