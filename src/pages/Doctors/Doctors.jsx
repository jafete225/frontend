import { doctors } from "../../assets/data/doctors";
import DoctorsCard from "./../../components/Doctors/DoctorsCard";
import { BASE_URL } from "./../../utils/config";
import useFetchData from "./../../hooks/useFetchData";
import Loader from "./../../components/Loader/Loading";
import Error from "./../../components/Error/Error";
import { useEffect, useState } from "react";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());

    console.log("handle search");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700)

    return () => clearTimeout(timeout);
  }, [query])


  const {
    data: DoctorsList,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2
            className="text-[20px] leading-[46px] 
            text-headingColor font-[800] md:text-[40px]
            md:leading-[70px] text-center"
          >
            Encontrar Médico
          </h2>
          <div
            className="max-w-[570px] mt-[30px] bg-[#0066ff2c] rounded-md flex
            items-center justify-between mx-auto"
          >
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer
              placeholder:text-textColor"
              placeholder="Procurar Médico pelo nome ou especialização"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-l-none rounded-r-md"
              onClick={handleSearch}
            >
              Procurar
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && Array.isArray(DoctorsList) && (
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 ]">
              {DoctorsList.map((doctor) => (
                <DoctorsCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Doctors;
