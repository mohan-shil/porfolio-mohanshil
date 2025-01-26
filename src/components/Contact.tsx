const Contact = () => {
  return (
    <div id="contact" className="bg-gray-900 text-white p-4 sm:p-16">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <div className="text-sm sm:text-lg leading-relaxed">
        <p className="mb-4">
          Email:{" "}
          <a href="mailto:mohan.shil.007@gmail.com" className="text-blue-400">
            mohan.shil.007@gmail.com
          </a>
        </p>
        <p className="mb-4">
          Phone:{" "}
          <a href="tel:+48451680186" className="text-blue-400">
            +48 451680186
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
