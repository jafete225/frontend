/* eslint-disable react/prop-types */

import {formateDate} from '../../utils/formateDate';



const Appointment = ({ appointments }) => {
  console.log("Appointments:", appointments);
  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">Nome</th>
          <th scope="col" className="px-6 py-3">Gênero</th>
          <th scope="col" className="px-6 py-3">Pagamento</th>
          <th scope="col" className="px-6 py-3">Preço do Bilhete</th>
          <th scope="col" className="px-6 py-3">Agendamento</th>
        </tr>
      </thead>

      <tbody>
        {appointments?.length > 0 ? (
          appointments.map((item) => (
            <tr key={item._id}>
              <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                {item.user?.photo && (
                  <img
                    src={item.user.photo}
                    className="w-10 h-10 rounded-full"
                    alt="Foto do usuário"
                  />
                )}
                <div className="pl-3">
                  <div className="text-base font-semibold">
                    {item.user?.name || "Usuário desconhecido"}
                  </div>
                  <div className="text-normal text-gray-500">
                    {item.user?.email || "Sem e-mail"}
                  </div>

                  
                </div>
              </td>
              <td className="px-6 py-4">{item.user?.gender || "Não informado"}</td>
              
              <td className="px-6 py-4">
                {item.isPaid ? (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-3"></div>
                    Pago
                  </div>
                ) : (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-3"></div>
                    Processo de pagamento incompleto!
                  </div>
                )}
              </td>
              <td className="px-6 py-4">{item.ticketPrice ? `${item.ticketPrice} MT` : "Não informado"}</td>

              <td className="px-6 py-4">
                {item.createdAt ? formateDate(item.createdAt) : "Data indisponível"}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="px-6 py-4 text-center">
              Nenhum agendamento encontrado.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};



export default Appointment;
