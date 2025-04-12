import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useEffect, useRef, useContext } from "react";


import { BiMenu } from 'react-icons/bi';
import { AuthContext } from "../../../context/AuthContext";

const navLinks = [
  { path: '/home', display: 'Casa' },
  { path: '/doctors', display: 'Achar Médicos' },
  { path: '/services', display: 'Serviços' },
  { path: '/contact', display: 'Contactos' },
];


const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, token, role } = useContext(AuthContext); 




  
  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/*================= LOGO ===================*/}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* ================ MENU =================*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => isActive 
                      ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                      : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*============ Nav Direita =================*/}
          <div className='flex items-center gap-4'>
            {
              token && user ? (
                <div className="flex items-center gap-2">
                 <Link to={role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'} className="flex items-center gap-2">

                    <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                      <img src={user.photo} className='w-full rounded-full' alt='User Avatar' />
                    </figure>
                    {/* Exibe o nome do usuário */}
                    <span className="text-textColor font-semibold sm:hidden">{user.name}</span>
                  </Link>
                </div>
              ) : (
                <Link to='/login'>
                  <button className='bg-primaryColor py-2 px-4 text-white font-[600] h-[44px] flex items-center 
                    justify-center rounded-[50px]'>
                    Entrar
                  </button>
                </Link>
              )
            }

            {/* Botão de Menu para dispositivos móveis */}
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
