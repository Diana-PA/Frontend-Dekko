import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Catalogo from '../../pages/Catalogo/Catalogo';
import Contacto from '../../pages/Contacto/Contacto';
import Footer from '../../pages/Footer/Footer';
import Home from '../../pages/Home/Home';
import SignInSide from '../../pages/Login/Login1';
import Olvido from '../../pages/Olvido/Olvido';
import Perfil from '../../pages/Perfil/Perfil';
import Registro from '../../pages/Registro/Registro';
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
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/product/:id' element={<ProductDetails/>} />   
            <Route path='/contacto' element={<Contacto />} />           
            <Route path='/footer' element={<Footer />} /> 
            { !authStatus && <Route path='/login' element={<SignInSide />} /> }
            <Route path='/olvido' element={<Olvido />} />  
            <Route path='/perfil' element={<Perfil />} />    
            <Route path='/registro' element={<Registro />} /> 
            <Route path='/carrito' element={<Cart />} />  
            <Route path='*' element={<Navigate to="/" />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default Rutas;