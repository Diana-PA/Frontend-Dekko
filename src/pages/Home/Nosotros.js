import Grilla from "./grilla";
import './nosotros.scss'


const Nosotros = () => {


  return (

    <div className="grilla1">
      <div className="text-secondary pb-2 ps-5   text-center">
          <br />
          <br />
        <h4 className="fw-bold">Revisa aquí los diseños más solicitados de este mes</h4>
          <br />
          <br />
      </div>
      <div>
        <Grilla />
      </div>
      <div className="text-light pt-2 pb-2 ps-5 text-center"
        style={{
          fontWeight: 'bold',
          backgroundColor: 'black',
          opacity: 0.5
        }}
      >
        <br />
        <h4> EN SANTIAGO DESDE 2015</h4>
        <h4> Dekko Chile es una empresa familiar de madre e hijas que luego de vender por muchos años papel mural de distribución en Katzmania </h4>
        <h4> decidieron crear una línea propia de papeles murales con diseños exclusivos y la posibilidad de que el cliente tenga más opciones de diseños a elegir y semi personalizarlos.</h4>
        <br />
      </div>
    </div>
  )
}

export default Nosotros