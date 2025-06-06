import DoctorsCard from "./DoctorsCard";
import { BASE_URL } from "./../../utils/config";
import useFetchData from "./../../hooks/useFetchData";
import Loader from "./../../components/Loader/Loading";
import Error from "./../../components/Error/Error";

const DoctorsList = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && doctors && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {doctors.map((doctor) => (
            <DoctorsCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorsList;
