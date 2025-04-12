import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";

import DoctorsList from "../components/Doctors/DoctorsList";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/*==================== Hero Section ==============*/}
      <section className="hero__section pt-[60px] 2xl:h-[800px] bg-gradient-to-r from-blue-500 to-blue-300 text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*====================== Hero Content ====================*/}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] font-bold md:text-[60px] md:leading-[70px]">
                  Ajudamos os pacientes a viver uma vida longa e saudável.
                </h1>
                <p className="text-lg mt-4">
                  Estamos comprometidos em transformar o cuidado com a saúde em
                  uma experiência acessível e de qualidade. Nossa missão é
                  garantir que cada paciente tenha acesso a tratamentos de ponta
                  e uma vida mais plena.
                </p>

                <button  className="btn bg-yellow-500 hover:bg-yellow-600 text-white  font-bold py-2 px-4 mt-6 rounded-full shadow-lg transition ease-in-out duration-300">
                <Link to="/doctors" className="w-full h-full block">
                  Solicitar Consulta
                  </Link>
                </button>
              </div>

              {/*================ Hero Counter =================*/}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-bold">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]"></span>
                  <p className="mt-2">Anos de experiência</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-bold">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purple-400 rounded-full block mt-[-14px]"></span>
                  <p className="mt-2">Clínicas Locais</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-bold">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-blue-400 rounded-full block mt-[-14px]"></span>
                  <p className="mt-2">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>

            {/* ==================== Hero Images =================*/}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img
                  src={heroImg01}
                  alt="Hero Image 1"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-[30px]">
                <img
                  src={heroImg02}
                  className="w-full mb-[30px] rounded-lg shadow-lg"
                  alt="Hero Image 2"
                />
                <img
                  src={heroImg03}
                  className="w-full rounded-lg shadow-lg"
                  alt="Hero Image 3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================== Hero Section End ===================*/}

      {/*================== Serviços Médicos Section ================*/}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-[40px] font-bold text-headingColor animate-bounce">
              Fornecendo os melhores serviços médicos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Atendimento de classe mundial para todos. Nosso sistema de saúde
              oferece assistência médica incomparável e especializada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <img src={icon01} alt="" />
              </div>

              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Achar Médico
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Encontre o especialista ideal para suas necessidades em poucos
                cliques. Nossos médicos estão prontos para oferecer o melhor
                atendimento, sempre focados no seu bem-estar.
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>

            <div className="py-[30px] px-5 transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <img src={icon02} alt="" />
              </div>

              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Achar Localização
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Precisa de uma clínica perto de você? Encontre rapidamente as
                melhores opções em sua área e marque sua consulta com
                facilidade.
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>

            <div className="py-[30px] px-5 transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <img src={icon03} alt="" />
              </div>

              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Livro de Agendamento
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Organize sua agenda de forma prática e eficiente. Nosso sistema
                de agendamento é simples e intuitivo, permitindo que você
                gerencie suas consultas de forma rápida e segura.
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/*=================== Services Section ====================*/}
      <section className="bg-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Nossos Serviços Médicos</h2>
          <p className="text-lg text-gray-600 mb-12">
            Atendimento de classe mundial para todos. Nosso sistema de saúde
            oferece cuidados de saúde incomparáveis.
          </p>
          <ServiceList />
        </div>
      </section>

      {/*=================== Features Section ====================*/}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-300 text-white">
        <div className="container flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Obtenha tratamento virtual a qualquer momento
            </h2>
            <ul className="list-disc ml-5">
              <li className="mb-2">
                Agende a consulta diretamente com o médico de sua escolha para
                um atendimento rápido e eficiente.
              </li>
              <li className="mb-2">
                Procure seu médico aqui e entre em contato com o consultório,
                facilitando a comunicação e o agendamento de maneira simples e
                prática.
              </li>
              <li className="mb-2">a
                Use a ferramenta de agendamento online para selecionar um
                horário que melhor se encaixe na sua rotina, garantindo mais
                flexibilidade para você.
              </li>
              <li className="mb-2">
                Receba orientações personalizadas e acompanhamento contínuo, sem
                sair de casa, com o conforto e segurança do atendimento remoto.
              </li>
     
            </ul>
            <Link
              to="/chatbot"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full inline-block mt-6 shadow-lg transition ease-in-out duration-300"
            >
              Agende agora
            </Link>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src={featureImg}
              alt="Feature"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ================== Doctors Section ================= */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-headingColor">
              Nossos Médicos
            </h2>
          </div>
          <DoctorsList />
        </div>
      </section>

      {/*================== Perguntas Frequentes Section =================*/}
      <section className="py-16">
        <div className="container flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-[470px] w-full">
            <img src={faqImg} alt="" className="rounded-lg shadow-lg" />
          </div>

          <div className="lg:w-[570px] w-full mt-10 lg:mt-0">
            <h2 className="text-[36px] font-bold">Perguntas Frequentes</h2>
            <FaqList />
          </div>
        </div>
      </section>

      {/*================== Testimonial Section =================*/}
      <section className="bg-blue-50 py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-headingColor">
              O que nossos pacientes dizem
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Veja as avaliações de nossos clientes satisfeitos.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
