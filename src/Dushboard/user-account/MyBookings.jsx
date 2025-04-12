import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../utils/config";
import DoctorCard from "../../components/Doctors/DoctorsCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyBooking = () => {
    // Hook para buscar as consultas agendadas do usuário
    const {
        data: appointments,
        loading,
        error,
    } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

    return (
        <div>
            {/* Exibe um loader enquanto os dados estão sendo carregados */}
            {loading && <Loading />} 

            {/* Exibe uma mensagem de erro caso haja algum erro na requisição */}
            {error && <Error errMessage={error} />} 
            
            {/* Verifica se há dados antes de tentar mapear */}
            {!loading && !error && appointments && appointments.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {appointments.map(doctor => (
                        <DoctorCard doctor={doctor} key={doctor._id} />
                    ))}
                </div>
            )}

            {/* Mensagem para o caso de não haver consultas */}
            {!loading && !error && appointments && appointments.length === 0 && (
                <div className="text-center text-headingColor text-lg">
                    <h2 className="text-center text-primaryColor font-semibold">
                        <p>Você ainda não possui consultas agendadas.</p>
                    </h2>
                </div>
            )}
        </div>
    );
};

export default MyBooking;
