import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Carrito from '../../pages/Carrito/Carrito';
import Catalogo from '../../pages/Catalogo/Catalogo';
import Checkout from '../../pages/Checkout/Checkout';
import Contacto from '../../pages/Contacto/Contacto';
import Footer from '../../pages/Footer/Footer';
import Garantias from '../../pages/Garantias/Garantias';
import Home from '../../pages/Home/Home';
import Login1 from '../../pages/Login/Login1';
import Nosotros from '../../pages/Nosotros/Nosotros';
import Olvido from '../../pages/Olvido/Olvido';
import Pago from '../../pages/Pago/Pago';
import Perfil from '../../pages/Perfil/Perfil';
import Prueba from '../../pages/Prueba/Prueba';
import Registro from '../../pages/Registro/Registro';
import Separador from '../../pages/Separador/Separador';
import Bebe from '../../pages/Bebe/Bebe';
import { useContext, useEffect } from 'react';
import UserContext from '../../Context/user/UserContext';

function Rutas() {

  const {verifyToken, authStatus} = useContext(UserContext)
  useEffect(() => {
    const getUser = async() => {
          await verifyToken()
   }
          getUser()
    }, [authStatus])

//  async function verifyToken(token = null) {
//    try {
//      const response = await fetch('/api/verify-token', {
//        headers: { Authorization: `Bearer ${token || localStorage.getItem('token')}` }
//      });
//      const data = await response.json();
//      return data;
//    } catch (error) {
//      throw new Error('Token inválido');
//    }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}> 
            <Route path='/' element={<Home />} /> 
 
            <Route path='/bebe' element={<Bebe />} />  
            <Route path='/catalogo' element={<Catalogo />} />  
            <Route path='/carrito' element={<Carrito />} />  
            <Route path='/checkout' element={<Checkout />} /> 
            <Route path='/contacto' element={<Contacto />} />           
            <Route path='/footer' element={<Footer />} /> 
            <Route path='/garantias' element={<Garantias />} />  
            <Route path='/login' element={<Login1 />} />  
            <Route path='/nosotros' element={<Nosotros />} />  
            <Route path='/olvido' element={<Olvido />} />  
            <Route path='/pago' element={<Pago />} />   
            <Route path='/perfil' element={<Perfil />} /> 
            <Route path='/prueba' element={<Prueba />} />       
            <Route path='/registro' element={<Registro />} /> 
            <Route path='/separador' element={<Separador />} /> 
            <Route path='/carrito' element={<Carrito />} />  
            <Route path='*' element={<Navigate to="/" />} /> 

        </Route>
      </Routes>
    </div>
  );
}

export default Rutas;