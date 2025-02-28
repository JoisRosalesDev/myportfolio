import { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuración de EmailJS
    emailjs
      .send(
        "service_nkpzq9i", // Reemplaza con tu Service ID de EmailJS
        "template_3hsjivd", // Reemplaza con tu Template ID de EmailJS
        formData,
        "eiHgbHLVnJczebI1-" // Reemplaza con tu User ID de EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result);
          // Limpiar el formulario después de enviarlo
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section id="ContactMe" className="relative bg-bunker-50 pt-24 pb-16">
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
            }}
          >
            <path d="M1200 120L0 16.48V0h1200v120z" />
          </svg>
        </div>
      </div>

      {/* Contenedor principal con ancho personalizado y márgenes amplios */}
      <div className="mx-auto max-w-4xl px-8 w-full">
        {/* Título de la sección */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-bunker-950 italic mb-16">
          Send me an Email
        </h1>

        {/* Formulario de contacto */}
        <form
          onSubmit={handleSubmit}
          className="bg-bunker-800 rounded-2xl p-8 shadow-lg"
        >
          {/* Campo: Nombre */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-bunker-50 text-lg font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-bunker-500 bg-bunker-700 text-bunker-50 focus:outline-none focus:ring-2 focus:ring-bunker-500"
              required
            />
          </div>

          {/* Campo: Correo */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-bunker-50 text-lg font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-bunker-500 bg-bunker-700 text-bunker-50 focus:outline-none focus:ring-2 focus:ring-bunker-500"
              required
            />
          </div>

          {/* Campo: Asunto */}
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-bunker-50 text-lg font-bold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-bunker-500 bg-bunker-700 text-bunker-50 focus:outline-none focus:ring-2 focus:ring-bunker-500"
              required
            />
          </div>

          {/* Campo: Mensaje */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-bunker-50 text-lg font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-bunker-500 bg-bunker-700 text-bunker-50 focus:outline-none focus:ring-2 focus:ring-bunker-500"
              rows="5"
              required
            />
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            className="bg-bunker-500 text-bunker-50 font-bold text-lg p-3 rounded-lg w-full hover:bg-bunker-600 active:scale-95 transition-transform transform"
          >
            Send Message
          </button>
        </form>

        {/* Iconos de redes sociales */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://github.com/JoisRosalesDev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gradient-to-br from-gray-700 to-black hover:from-black hover:to-gray-700 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
                <g fill="#fff">
                  <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
                  <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
                </g>
              </mask>
              <g
                fill="none"
                stroke="#f0fafb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="32"
                  strokeDashoffset="32"
                  d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.7s"
                    values="32;0"
                  />
                </path>
                <path
                  strokeDasharray="10"
                  strokeDashoffset="10"
                  d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                >
                  <animate
                    attributeName="d"
                    dur="3s"
                    repeatCount="indefinite"
                    values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.8s"
                    dur="0.2s"
                    values="10;0"
                  />
                </path>
              </g>
              <rect
                width="8"
                height="4"
                x="8"
                y="11"
                fill="#f0fafb"
                mask="url(#lineMdGithubLoop0)"
              >
                <animate
                  attributeName="y"
                  dur="10s"
                  keyTimes="0;0.45;0.46;0.54;0.55;1"
                  repeatCount="indefinite"
                  values="11;11;7;7;11;11"
                />
              </rect>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jois-rosales-fernández-260baa24b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 hover:from-blue-900 hover:to-blue-600 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="4" cy="4" r="2" fill="#f0fafb" fillOpacity="0">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  dur="0.15s"
                  values="0;1"
                />
              </circle>
              <g
                fill="none"
                stroke="#f0fafb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              >
                <path strokeDasharray="12" strokeDashoffset="12" d="M4 10v10">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.15s"
                    dur="0.2s"
                    values="12;0"
                  />
                </path>
                <path strokeDasharray="12" strokeDashoffset="12" d="M10 10v10">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.45s"
                    dur="0.2s"
                    values="12;0"
                  />
                </path>
                <path
                  strokeDasharray="24"
                  strokeDashoffset="24"
                  d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.65s"
                    dur="0.2s"
                    values="24;0"
                  />
                </path>
              </g>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/joisfrontdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="17" cy="7" r="1.5" fill="#f0fafb" fillOpacity="0">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.3s"
                  dur="0.15s"
                  values="0;1"
                />
              </circle>
              <g
                fill="none"
                stroke="#f0fafb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="72"
                  strokeDashoffset="72"
                  d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="72;0"
                  />
                </path>
                <path
                  strokeDasharray="28"
                  strokeDashoffset="28"
                  d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.6s"
                    values="28;0"
                  />
                </path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
