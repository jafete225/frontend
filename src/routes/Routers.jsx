import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorsDetails from '../pages/Doctors/DoctorsDetails';
import ChatBot from '../pages/python/ChatBot';
import { Routes, Route } from 'react-router-dom';
import MyAccount from '../Dushboard/user-account/MyAccount';
import Dashboard from '../Dushboard/doctor-account/Dashboard'; 
import ProtectedRoute from './ProtectedRoute';
import CheckoutSucess from '../pages/Doctors/CheckoutSucess';
import Pagamentos from '../pages/Pagamentos'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorsDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="/checkout-success" element={<CheckoutSucess />} />
      <Route path="/pagamento" element={<Pagamentos />} />
    

      
      {/* Rotas protegidas com base no role */}
      <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}>  
        <MyAccount /> 
      </ProtectedRoute>} />
      
      <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}> 
        <Dashboard /> 
      </ProtectedRoute>} />
    </Routes>
  );
};

export default Routers;
