import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { BASE_URL } from "../utils/config";
import { toast } from 'react-toastify';
import { AuthContext } from "../../context/AuthContext.jsx";  
import HashLoader from 'react-spinners/HashLoader';

const Login = () => {

  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,  
          role: result.role,
        },
      });

      toast.success(result.message);
      setTimeout(() => {
        window.location.href = '/home';
      }, 3000); 

      setLoading(false);
      toast.success(result.message);
      navigate('/home');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 flex items-center justify-center px-5 lg:px-0">
      <div className="relative w-full max-w-[570px] bg-white rounded-xl shadow-lg p-8 md:p-10 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-[4px] before:border-transparent before:rounded-xl before:animate-spin-border before:z-[-1]">
        <h3 className="text-gray-900 text-[26px] leading-9 font-extrabold text-center mb-10">
          Olá! <span className="text-blue-600">Bem-Vindo(a)</span> de volta 😁
        </h3>

        <form className="py-4 md:py-0 space-y-6" onSubmit={submitHandler}>
          <div className="relative">
            <input
              type="email"
              placeholder="📧  Exemplo@gmail.com"
              name="email"
              value={formData.email}  
              onChange={handleInputChange}
              className="w-full py-4 px-5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[16px] leading-7 text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="🔒 Senha"
              name="password"
              value={formData.password} 
              onChange={handleInputChange}
              className="w-full py-4 px-5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[16px] leading-7 text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full py-4 text-white text-[18px] font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            
            >
              {loading ? <HashLoader size={25} color='#fff' /> : 'Entrar'}
            </button>
          </div>

          <p className="mt-5 text-center text-gray-600 text-[15px]">
            Não tem uma conta?{" "}
            <Link to='/register' className="text-blue-600 font-medium hover:text-blue-700 transition-all">
              Inscrever-se
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
