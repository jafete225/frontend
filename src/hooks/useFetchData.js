import { useEffect, useState } from 'react';
import { token } from '../utils/config';

const useFetchData = (url) => {  
  const [data, setData] = useState(null);  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => { 
      setLoading(true);  // Inicia o carregamento

      try {
        if (!token) {
          throw new Error('Token está ausente 🤢');
        }

        const res = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        // Verificar se a resposta foi bem-sucedida antes de tentar fazer o parse
        if (!res.ok) {
          const errorText = await res.text(); 
          throw new Error(`Erro: ${res.status} - ${errorText}`);
        }

        // Tenta fazer o parse apenas se o conteúdo for JSON
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const result = await res.json();
          
          // Certifique-se de que existe um campo 'data' e atribua ao estado
          if (result && result.data) {
            setData(result.data);  
          } else {
            throw new Error('Estrutura de dados inválida 😔');
          }
        } else {
          throw new Error('Resposta não é JSON 🤢');
        }
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();  
  }, [url]); 

  return { data, loading, error };
};

export default useFetchData;
