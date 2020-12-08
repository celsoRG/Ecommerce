/****************************************
* Componente tonto que recibe una funcion como props
*  y devuelve una categoria a su componente padre
*
 ***********************************/

 //Importaciones nativas
import React, { Component } from 'react';


class Buscador extends Component {
    //función que permite leer valores de inputs
    cajaBusqueda = React.createRef();

    //Función que extrae la palabra
    //del input 
    obtenerDato = (e) => {
        e.preventDefault();
        //se extrae el contenido del input 
        const termino = this.cajaBusqueda.current.value;

        //se envia el valor al componente principal
        this.props.datosBusqueda(termino);
    }//fin función "obtenerDato"



    render() { 
        return ( //El onSubmit para atrapar el evento del click en el boto'n buscar y que debe de hacer
            <form onSubmit = {this.obtenerDato}> 
                <div className= "row">
            
                    <div className= "form-group col-md-8">
                            <input //Se indica que aqui se utiliza la funcio'n ref
                                ref = {this.cajaBusqueda} 
                                type="text" 
                                className="form-control form-control-lg" 
                                placeholder ="Inserta el nombre del producto"
                            />     
                    </div>

                    <div className= "form-group col-md-4">
                            <input 
                                type="submit" 
                                className="btn btn-lg btn-danger btn-block" 
                                value= "Buscar..."
                            />     
                    </div>

                </div>
            </form>
         );
    }
}
 
export default Buscador;