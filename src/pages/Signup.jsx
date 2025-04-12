import signupImg from "../assets/images/signup.gif";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadImageCloudinary from "../../uploadCloudinary";
import { BASE_URL } from "../utils/config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const data = await uploadImageCloudinary(file);
      setPreviewURL(data.url);
      setFormData({ ...formData, photo: data.url });
      setSelectedFile(file);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-[1170px] mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/*================= Image BOX ============== */}
          <div className="rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={signupImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </figure>
          </div>

          {/*================= Sign Up Form ============== */}
          <div className="bg-white rounded-r-lg lg:pl-16 py-10 px-5 lg:px-16">
            <h3 className="text-headingColor text-[24px] leading-9 font-bold mb-10 text-center">
              Criar uma <span className="text-primaryColor">Conta</span>
            </h3>

            <form onSubmit={submitHandler}>
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

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Exemplo@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full py-4 px-5 border-b border-solid border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[16px] leading-7 text-gray-800 placeholder-gray-400"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full py-4 px-5 border-b border-solid border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-[16px] leading-7 text-gray-800 placeholder-gray-400"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Eu sou um:
                  <select
                    value={formData.role}
                    onChange={handleInputChange}
                    name="role"
                    className="text-textColor font-semibold text-[16px] leading-7 px-4 py-3 focus:outline-none border rounded-lg border-gray-300 transition-all"
                  >
                    <option value="patient">Paciente</option>
                    <option value="doctor">Médico</option>
                  </select>
                </label>

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

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img
                      src={previewURL}
                      alt="Avatar"
                      className="w-full rounded-full"
                    />
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
                    Carregar Foto
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 text-white text-[18px] font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "Inscrever-se"
                  )}
                </button>
              </div>

              <p className="mt-5 text-center text-gray-600 text-[15px]">
                Tem uma conta aqui?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-all"
                >
                  Entre
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
