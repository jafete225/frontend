import {useContext} from "react";
import {BiMenu} from "react-icons/bi"
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



// eslint-disable-next-line react/prop-types
const Tabs = ({tab, setTab}) => {

    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
        navigate("/");
        toast("Desconectado...", {autoClose: 3000})
    }
    return (
        <div>
            <span className="lg:hidden">
                 <BiMenu className="w-6 h-6 cursor-pointer"/>
                 </span>
            <div className="hideen lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
                <button
                onClick={()=> setTab('overview')}
                className={`${tab === "overview"
                 ? "bg-indigo-100 text-primaryColor"
                : "bg-transparent text-headingColor" }
                w-full btn mt-0 rounded-md`}
                >
                   Visão geral
                    </button>

                    <button
                    onClick={()=> setTab('appointments')}
                    className={`${tab === "appointments"
                 ? "bg-indigo-100 text-primaryColor"
                : "bg-transparent text-headingColor" }
                w-full btn mt-0 rounded-md`}
                >
                   Consultas agendadas
                    </button>

                    <button
                    onClick={()=> setTab('settings')}
                    className={`${tab === "settings"
                 ? "bg-indigo-100 text-primaryColor"
                : "bg-transparent text-headingColor" }
                w-full btn mt-0 rounded-md`}
                >
                    Perfil
                    </button>

                    <div className="mt-[100px] w-full">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                >
                 SAIR
                </button>
                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                  Excluir Conta
                </button>
              </div>
            </div>
        </div>
    )
}

export default Tabs; 