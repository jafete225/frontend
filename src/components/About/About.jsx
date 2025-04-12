
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div
          className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col
                lg:flex-row"
        >
          {/*===================== about img ==================*/}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div
              className="absolute z-20 botton-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] 
                    lg:right-[22%]"
            >
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/*======================== About Content ================*/}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2
              className="text-[20px] leading-[46px] text-headingColor font-[800] 
                    md:text-[40px] md:leading-[70px] text-center"
            >
              Somos os melhores do mundo
            </h2>
            <p className="text__para">
              Na nossa clínica, buscamos sempre oferecer o melhor atendimento
              aos nossos pacientes. Com profissionais altamente qualificados e
              equipamentos de última geração, garantimos que você esteja sempre
              em boas mãos. Nosso compromisso é com a sua saúde e bem-estar,
              proporcionando um ambiente acolhedor e de confiança.
            </p>

            <p className="text__para mt-[30px]">
              Nosso objetivo é proporcionar a você uma experiência única e um
              cuidado personalizado. Estamos constantemente inovando para
              oferecer os melhores tratamentos e garantir resultados eficientes
              e satisfatórios para cada um de nossos pacientes.
            </p>

            <Link to="/">
              <button className="btn">Saiba Mais</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
