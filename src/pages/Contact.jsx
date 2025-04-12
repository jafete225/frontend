
import { Link } from "react-router-dom"; 

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-12">
      <div className="px-6 mx-auto max-w-screen-lg">
        <h2 className="text-4xl font-extrabold text-white text-center mb-6 md:text-5xl">
          Contacte-nos
        </h2>
        <p className="text-lg font-light text-center text-white mb-12">
          Tem um problema técnico? Deseja enviar comentários sobre um recurso beta? Deixe-nos saber.
        </p>

        <form action="#" className="space-y-8 bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold text-lg mb-2">
                Seu Email
              </label>
              <input 
                type="email"
                id="email"
                placeholder="exemplo@gmail.com"
                className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-800 font-semibold text-lg mb-2">
                Assunto
              </label>
              <input 
                type="text"
                id="subject"
                placeholder="Diga-nos como podemos ajudar"
                className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-800 font-semibold text-lg mb-2">
                Sua Mensagem
              </label>
              <textarea 
                id="message"
                rows="6"
                placeholder="Escreva sua mensagem aqui"
                className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
                required
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Enviar Mensagem
            </button>
          </div>

          <div className="text-center mt-8">
            <Link to="/chatbot" className="px-10 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
              Explore ChatBot/Auto-Ajuda
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
