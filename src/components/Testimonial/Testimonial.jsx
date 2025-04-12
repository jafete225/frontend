import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { Pagination } from 'swiper/modules';
import { HiStar } from 'react-icons/hi';
import '../Testimonial/shimmer.css'

const Testimonial = () => {
  const [loading, setLoading] = useState(true);

  // Simula um tempo de carregamento
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 segundos para simular o carregamento

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper 
        modules={[Pagination]} 
        spaceBetween={30} 
        slidesPerView={1}
        pagination={{ clickable: true }} 
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {/* Exibindo o shimmer effect enquanto os dados estão carregando */}
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="py-[30px] px-5 rounded-lg shimmer">
                <div className="flex items-center gap-[13px]">
                  <div className="shimmer-avatar w-[60px] h-[60px] rounded-full bg-gray-300"></div>
                  <div className="flex-1">
                    <div className="shimmer-line h-[20px] w-[150px] bg-gray-300 mb-2"></div>
                    <div className="shimmer-line h-[14px] w-[100px] bg-gray-300"></div>
                  </div>
                </div>
                <div className="shimmer-line mt-4 h-[16px] w-full bg-gray-300"></div>
                <div className="shimmer-line mt-2 h-[16px] w-3/4 bg-gray-300"></div>
                <div className="shimmer-line mt-2 h-[16px] w-1/2 bg-gray-300"></div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img src={patientAvatar} alt="Patient Avatar" />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor"> 
                     Carlos Silva
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  O atendimento foi excelente. A equipe é muito atenciosa e dedicada, garantindo que todas as minhas dúvidas fossem esclarecidas.
                </p>
              </div>
            </SwiperSlide>

            {/* Adicione mais SwiperSlides com os dados reais */}
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img src={patientAvatar} alt="Patient Avatar" />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor"> 
                     Jafete Pedro Comé
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  As consultas são feitas com muita atenção. O atendimento é rápido e eficaz, proporcionando um ambiente de confiança e segurança.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img src={patientAvatar} alt="Patient Avatar" />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor"> 
                      João Martins
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  O atendimento é de alta qualidade. Os médicos são muito profissionais e a infraestrutura da clínica é excelente.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img src={patientAvatar} alt="Patient Avatar" />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor"> 
                     Maria Souza
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  Fui muito bem tratada. A equipe é excelente e o atendimento de ponta. Recomendo de olhos fechados!
                </p>
              </div>
            </SwiperSlide>

          </>
        )}
      </Swiper>
    </div>
  );
};

export default Testimonial;
