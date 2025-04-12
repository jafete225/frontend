import React from "react";
import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-5">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
          Nossos Serviços
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Descubra a variedade de serviços médicos que oferecemos, cuidadosamente
         projetados para garantir o melhor atendimento e saúde para você.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, index) => (
            <ServiceCard item={item} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
