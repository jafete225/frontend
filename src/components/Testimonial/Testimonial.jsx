import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { Pagination } from 'swiper/modules';
import { HiStar } from 'react-icons/hi';
import '../Testimonial/shimmer.css';

const Testimonial = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [userComments, setUserComments] = useState([]);

  // Simula o tempo de carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newComment = {
      name,
      text: comment,
    };

    setUserComments([newComment, ...userComments]);
    setName('');
    setComment('');
  };

  return (
    <div className="mt-[30px] lg:mt-[55px] px-4">
      {/* Formulário de comentário */}
      <div className="mb-8 bg-white rounded-xl shadow-md p-5">
        <h3 className="text-xl font-bold mb-4 text-blue-600">Deixe seu comentário 📝</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Escreva seu comentário aqui..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all"
          >
            Enviar
          </button>
        </form>
      </div>

      {/* Carrossel de comentários */}
      <Swiper 
        modules={[Pagination]} 
        spaceBetween={30} 
        slidesPerView={1}
        pagination={{ clickable: true }} 
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {/* Shimmer enquanto carrega */}
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
            {/* Comentários adicionados pelo usuário */}
            {userComments.map((c, index) => (
              <SwiperSlide key={index}>
                <div className="py-[30px] px-5 rounded-3 bg-white shadow">
                  <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="Avatar" />
                    <div>
                      <h4 className="text-[18px] font-semibold">{c.name}</h4>
                      <div className="flex gap-[2px]">
                        {[...Array(5)].map((_, i) => (
                          <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] mt-4 text-textColor">{c.text}</p>
                </div>
              </SwiperSlide>
            ))}

            {/* Comentários fixos */}
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img src={patientAvatar} alt="Patient Avatar" />
                  <div>
                    <h4 className="text-[18px] font-semibold">Carlos Silva</h4>
                    <div className="flex items-center gap-[2px]">
                      {[...Array(5)].map((_, i) => (
                        <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[16px] mt-4 text-textColor">
                  O atendimento foi excelente. A equipe é muito atenciosa e dedicada, garantindo que todas as minhas dúvidas fossem esclarecidas.
                </p>
              </div>
            </SwiperSlide>

            {/* (Adicione os outros SwiperSlide fixos aqui, como estavam no seu código) */}
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Testimonial;
