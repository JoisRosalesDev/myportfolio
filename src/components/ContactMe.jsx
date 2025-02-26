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
    <section id="contact" className="relative bg-bunker-50 pt-24 pb-16">
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
            href="https://github.com/joisrosafer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bunker-950 hover:text-bunker-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.289 0 .322.216.694.825.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="www.linkedin.com/in/jois-rosales-fernández-260baa24b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bunker-950 hover:text-bunker-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/joisrosafer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bunker-950 hover:text-bunker-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
