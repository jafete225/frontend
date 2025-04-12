/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadImageCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../utils/config";
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import bcrypt from 'bcryptjs'; 

const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender: '',
    bloodType: '',
  });

  const navigate = useNavigate();

  // Preenche os dados do formulário com base nas informações do usuário
  useEffect(() => {
    setFormData({
      name: user.name || '',
      email: user.email || '',
      photo: user.photo || null,
      gender: user.gender || '',
      bloodType: user.bloodType || ''
    });
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const data = await uploadImageCloudinary(file);
      setFormData({ ...formData, photo: data.url });
      setSelectedFile(file);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Copia os dados do formulário para remover a senha se não for alterada
    const updatedFormData = { ...formData };

    // Criptografa a senha se fornecida
    if (formData.password) {
      const hashedPassword = bcrypt.hashSync(formData.password, 10); // Criptografando a senha
      updatedFormData.password = hashedPassword;
    } else {
      delete updatedFormData.password; // Caso a senha não tenha sido alterada, remova o campo
    }

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFormData),
      });

      // Verifica o tipo de conteúdo da resposta
      const contentType = res.headers.get('content-type');
      
      if (!res.ok) {
        throw new Error('Falha na requisição');
      }

      if (contentType && contentType.includes('application/json')) {
        const { message } = await res.json();
        toast.success(message);
      } else {
        throw new Error('Resposta não é JSON');
      }

      setLoading(false);
      navigate('/users/profile/me');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* Campo de nome completo */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Nome Completo"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full py-4 px-5 border-b border-solid border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[16px] leading-7 text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Campo de email (somente leitura) */}
        <div className="mb-5">
          <input
            type="email"
            placeholder="Exemplo@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full py-4 px-5 border-b border-solid border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[16px] leading-7 text-gray-800 placeholder-gray-400"
            aria-readonly
            readOnly
          />
        </div>

        {/* Campo de senha (opcional) */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full py-4 px-5 border-b border-solid border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[16px] leading-7 text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Campo de tipo sanguíneo */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Tipo sanguíneo"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full py-4 px-5 border-b border-solid border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[16px] leading-7 text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Campo de seleção de gênero */}
        <div className="mb-5 flex items-center justify-between">
          <label className="text-headingColor font-bold text-[16px] leading-7">
            Gênero:
            <select
              value={formData.gender}
              onChange={handleInputChange}
              name="gender"
              className="text-textColor font-semibold text-[16px] leading-7 px-4 py-3 focus:outline-none border rounded-lg border-gray-300 transition-all"
            >
              <option value="">Selecionar</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </label>
        </div>

        {/* Upload de imagem de perfil */}
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img src={formData.photo} alt="Avatar" className="w-full rounded-full" />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              accept=".jpg, .png"
              onChange={handleFileInputChange}
              className="absolute top-0 left-0 w-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              {selectedFile ? selectedFile.name : "Carregar Foto"}
            </label>
          </div>
        </div>

        {/* Botão de envio */}
        <div className="mt-7">
          <button
            disabled={loading}
            type="submit"
            className="w-full py-4 text-white text-[18px] font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {loading ? <HashLoader size={35} color="#ffffff" /> : 'Atualizar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
