/****************************************
*Componente tonto
*
*renderiza un articulo               
*
 ***********************************/

//importaciones nativas
import React  from 'react';

const Articulo = (props)=>{ 
    const { IMAGE,  NAME, PRICE, DESCRIPTION } = props.imagen
    return (
        <div className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4">   
            <div className= "card">
                   <img src= {IMAGE}     alt = {"imagen"} className="card-img-top"/>
                   <div className ="card-body">
                       <p className = " card-text"> {NAME}  </p>
                       <p className = " card-text"> $  {PRICE}  $</p>
                       <p className = " card-text"> {DESCRIPTION}</p>
                    </div>    
                
            </div>   
        </div>
    )

}

export default Articulo;


