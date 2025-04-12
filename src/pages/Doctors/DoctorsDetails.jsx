import starIcon from "../../assets/images/Star.png";
import { useState } from "react";
import DoctorAbout from "../DoctorAbout";
import Feedback from "../Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from "./../../utils/config";
import useFetchData from "./../../hooks/useFetchData";
import Loader from "./../../components/Loader/Loading";
import Error from "./../../components/Error/Error";
import { useParams } from "react-router-dom";
import avatar from "../../assets/images/avatar-icon.png"; // Fallback para imagem

const DoctorsDetails = () => {
  const { id } = useParams(); // Pegando o ID da URL
  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && doctor && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:cols-span-2">
              {/* Informações do Médico */}
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img
                    src={doctor.photo || avatar}
                    alt={doctor.name}
                    className="w-full rounded-full"
                  />
                </figure>

                <div>
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {doctor.specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {doctor.name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                      <img src={starIcon} alt="Star Icon" />
                      {doctor.averageRating}
                    </span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-[400] text-textColor">
                      ({doctor.totalRating})
                    </span>
                  </div>

                  <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                    {doctor.bio}
                  </p>
                </div>
              </div>

              {/* Exibição dos horários disponíveis */}
              {doctor.timeSlot && doctor.timeSlot.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-headingColor text-lg font-bold">
                    Horários Disponíveis:
                  </h4>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {doctor.timeSlot.map((slot, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-600 py-1 px-3 text-sm rounded-lg border border-blue-300"
                      >
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Abas (About / Feedback) */}
              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about"
                      ? "border-b border-solid border-primaryColor"
                      : ""
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback"
                      ? "border-b border-solid border-primaryColor"
                      : ""
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>

              {/* Conteúdo das abas */}
              <div className="mt-[50px]">
                {tab === "about" && (
                  <DoctorAbout
                    name={doctor.name}
                    about={doctor.about}
                    qualifications={doctor.qualifications}
                    experiences={doctor.experiences}
                  />
                )}
                {tab === "feedback" && (
                  <Feedback
                    reviews={doctor.reviews || []}
                    totalRating={doctor.totalRating || 0}
                  />
                )}
              </div>
            </div>

            {/* Painel lateral */}
            <div>
              <SidePanel
                  doctorId={doctor._id}
                  ticketPrice={doctor.ticketPrice}
                  timeSlots={doctor.timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsDetails;
