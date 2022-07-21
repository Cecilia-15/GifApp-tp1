import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
import { useState } from "react";

import PropTypes from 'prop-types';

export const GifGrid = ({category, deleteCategory}) => {

  const {imagenes, loading} = useFetchGif(category);

  const [show, setShow] = useState(true)

  const handleShow = () => setShow(!show)

  return (
    <>
    <div className="card-title-container">
        <h3 style={{color: 'white'}}>{category}</h3>  
        <div>
          <button name='btnDeleteCategory' onClick={() => deleteCategory(category)}>Eliminar</button>
          <button name="btnShow" onClick={handleShow}>{show ? 'Ocultar' : 'Mostrar'}</button>
        </div>   
    </div>
        
        {/* Desplegar Listado */}
        <div className="card-grid" style={{visibility: show ? 'visible' : 'hidden'}}>
          {
            loading ? <h2 >Cargando...</h2> :
            imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
          }
        </div>            
    </>
  )
}

// GifGrid.propTypes = {
//   category: PropTypes.string.isRequire
// }