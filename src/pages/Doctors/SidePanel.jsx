/* eslint-disable react/prop-types */
import { toast } from 'react-toastify';
import { token, BASE_URL } from './../../utils/config';
import { useNavigate } from 'react-router-dom';

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const navigate = useNavigate();
  

  // Handler para o agendamento
  const bookingHandler = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        }
      );
  
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
  
      if (!response.ok) {
        throw new Error(data.message || 'Erro ao agendar');
      }
  
      toast.success('Agendamento realizado com sucesso!');
  
      // Redireciona para a tela de pagamento
      navigate('/pagamento');
    } catch (err) {
      console.error('Erro no agendamento:', err);
      toast.error(`Falha: ${err.message}`);
    }
  };
  

  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className="flex items-center justify-between">
        <p className='text__para mt-0 font-semibold'>Preço de bilhete</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
          {ticketPrice ? `${ticketPrice} MT` : 'Preço não disponível'}
        </span>
      </div>

      <div className="mt-[30px]">
        <p className='text__para mt-0 font-semibold text-headingColor'>
          Horários disponíveis:
        </p>

        <ul className='mt-3'>
          {timeSlots && timeSlots.length > 0 ? (
            timeSlots.map((item, index) => (
              <li key={index} className='flex items-center justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>
                  {item.day || 'Dia não especificado'}
                </p>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>
                  {item.startingtime ? item.startingtime : 'Hora de início não especificada'} - 
                  {item.endingtime ? item.endingtime : 'Hora de término não especificada'}
                </p>
              </li>
            ))
          ) : (
            <li className="text-textColor">Nenhum horário disponível</li>
          )}
        </ul>
      </div>

      <button className='btn px-2 w-full rounded-md mt-5' onClick={bookingHandler}>
        Agendar Consulta
      </button>
    </div>
  );
};

export default SidePanel;
