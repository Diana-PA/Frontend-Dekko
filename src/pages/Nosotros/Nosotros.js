import Carousel from 'react-bootstrap/Carousel';
const Nosotros = () => {
 
  let urls=[
    {url:'/home/HOME02.png', descripcion:'Papel1'},

];

 return (
 
 <div>
        <div cla ssName="bg-dark text-bg-dark pb-2 ps-5   text-center">
            <h1>DEKKO CHILE </h1>
         </div> 
        <Carousel className="bg-dark text-bg-dark pb-2 ps-5 " >
        { urls.map((p,idx)=>
          ( 
            <Carousel.Item p={p} key={idx}>
          <img
              className="d-block w-100 image-responsive justify-content-center ps-5"
              alt={p.descripcion}
              src ={p.url}
            />
            <Carousel.Caption>
              <h5>{p.descripcion}</h5>
            </Carousel.Caption>
          </Carousel.Item>
               ) )
              }
      </Carousel>
      <div className="bg-dark text-bg-dark pt-2 pb-2 ps-5 text-center">
            <h3> EN SANTIAGO DESDE 2015</h3>
            <p> Dekko Chile es una empresa familiar de madre e hijas que decidieron luego de vender por muchos años papel mural de distribución en Katzmania </p>
            <p> crear una línea propia de papeles murales con diseños exclusivos y la posibilidad para el cliente de tener opciones de diseños más específicos para elegir y semi personalizarlos.</p>
        </div>
      </div>  
    )
}

export default Nosotros