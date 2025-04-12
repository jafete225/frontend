import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';


const socialLinks = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-6 h-6" />,
  },
  {
    path: "https://www.github.com",
    icon: <AiFillGithub className="group-hover:text-white w-6 h-6" />,
  },
  {
    path: "https://www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-6 h-6" />,
  },
  {
    path: "https://www.linkedin.com",
    icon: <RiLinkedinFill className="group-hover:text-white w-6 h-6" />,
  },
];

const quickLinks01 = [
  { path: "/home", display: "Início" },
  { path: "/", display: "Sobre nós" },
  { path: "/services", display: "Serviços" },
  { path: "/", display: "Blog" },
];

const quickLinks02 = [
  { path: "/doctors", display: "Encontrar um Médico" },
  { path: "/", display: "Agendar Consulta" },
  { path: "/", display: "Encontrar uma Localização" },
  { path: "/", display: "Obter uma Opção" },
];

const quickLinks03 = [
  { path: "/", display: "Doe" },
  { path: "/contact", display: "Fale Conosco" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 bg-gray-900 text-gray-300">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-10">
          <div>
            <div className="bg-white p-2 inline-block rounded">
              <img src={logo} alt="Logo" className="w-32" />
            </div>
            <p className="text-[16px] leading-7 font-[400] mt-4">
              Copyright &copy; {year} desenvolvido por Jafete Pedro Comé. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="w-10 h-10 border border-solid border-gray-500 rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[22px] font-bold mb-6 text-white">Links Rápidos</h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] hover:text-white transition-all duration-300">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[22px] font-bold mb-6 text-white">Eu quero:</h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] hover:text-white transition-all duration-300">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[22px] font-bold mb-6 text-white">Suporte</h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] hover:text-white transition-all duration-300">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
