import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Carrito from '../../Context/Carrito/Carrito';
import Catalogo from '../../pages/Catalogo/Catalogo';
import Contacto from '../../pages/Contacto/Contacto';
import Footer from '../../pages/Footer/Footer';
import Home from '../../pages/Home/Home';
import SignInSide from '../../pages/Login/Login1';
import Olvido from '../../pages/Olvido/Olvido';
import Pago from '../../pages/Pago/Pago';
import Perfil from '../../pages/Perfil/Perfil';
import Registro from '../../pages/Registro/Registro';
import Separador from '../../pages/Separador/Separador';
import Bebe from '../../pages/Bebe/Bebe';
import { useContext, useEffect } from 'react';
import UserContext from '../../Context/user/UserContext';
import Cart from '../../pages/Carro/Cart';
import ProductDetails from '../../pages/Catalogo/productDetails/ProductDetails';

function Rutas() {

  const {verifyToken, authStatus} = useContext(UserContext)

  console.log(authStatus)

  useEffect(() => {
    const getUser = async() => {
      await verifyToken()
    }
    getUser()
  }, [authStatus])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}> 
            <Route path='/' element={<Home />} /> 
            <Route path='/bebe' element={<Bebe />} />  
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/product/:id' element={<ProductDetails/>} />   
            <Route path='/carrito' element={<Carrito />} />  
            <Route path='/checkout' element={<Cart />} /> 
            <Route path='/contacto' element={<Contacto />} />           
            <Route path='/footer' element={<Footer />} /> 
            { !authStatus && <Route path='/login' element={<SignInSide />} /> }
            <Route path='/olvido' element={<Olvido />} />  
            <Route path='/pago' element={<Pago />} />   
            <Route path='/perfil' element={<Perfil />} />    
            <Route path='/registro' element={<Registro />} /> 
            <Route path='/separador' element={<Separador />} /> 
            <Route path='/carrito' element={<Carrito />} />  
            <Route path='*' element={<Navigate to="/" />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default Rutas;