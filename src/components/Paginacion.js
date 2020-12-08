import React from 'react';

const Paginacion = (props) => {
   
    return(
        <div className = "py-3">
            <button onClick={props.regresar} type = "button "  className = "btn-info mr-1">Atras</button>
            <button onClick={props.adelante} type = "button "  className = "btn-info mr-1">Adelante</button>

        </div>
        
    );
}



export default Paginacion;