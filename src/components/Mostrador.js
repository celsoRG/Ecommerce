/****************************************
*Componente que emula un mostrador 
*
*  Renderiz componentes: 
*       Articulo      Paginación 
*               
*
 ***********************************/

 //importaciones nativas
import React, { Component } from 'react';

//importaciones externas


//importaciones de componentes
import Articulo from './Articulo';
import Paginacion from './Paginacion';



class Mostrador extends Component {
    constructor(props){
        super(props)
    }

    render() { 
       const {lista} = this.props
        return ( 
           <>
               {/*Componente*/}
               
               <div className = "col-12 p-5 row">
                    {
                    lista.map(c => (
                                      <Articulo 
                                        key = {c.id}
                                        imagen = {c}
                                    />
                                ) )
                    }                            
                 </div>

              
                

                {/*Componente*/}
                <Paginacion
                  adelante = {this.props.adelante}
                  regresar = {this.props.regresar} 
                />
           </>
         );
    }
}
 
export default Mostrador;

