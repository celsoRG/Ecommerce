/****************************************
* Componente inteligente que  renderiza
* componentes: 
*               Buscador 
*               Mostrador. 
*
 ***********************************/

 // nativas
import React, {Component} from 'react';

//importación de componentes
import Buscador from './components/Buscador';
import Mostrador from './components/Mostrador';

class AppTienda extends  Component {
  state = {
    categoria: '',
    lista: [],
    pagina : ''
  }

  
 //Funciones para de paginación 
  regresar = () =>{
      //Se lee como se encuentra la pagina actual
      let pagina = this.state.pagina;

      //si la pagina ya es uno  no seguir atras
      if(pagina === 1) return null;

      //Restar 1 pagina mas a la pagina actual
      pagina--;

      //Actualizar el cambio de estado
      this.setState({
        pagina
      }, () =>{
              this.consultaGet();
      });
  }//Fin función "regresar"


  adelante = () => {
    //Se lee como se encuentra la pagina actual
    let pagina = this.state.pagina;

    //si la pagina ya es tres  no seguir adelante
    if(pagina === 3) return null;

    //Agregarle una pagina mas a la pagina actual
     pagina++;

    //Actualizar el cambio de estado
    this.setState({
      pagina
    }, () => {
      this.consultaGet();
    });
    

  } //Fin función "adelante"

  
  //Funcion que realiza petición get 
  // donde categoria es la palabra escrita por usuario
  consultaGet = ()=>{
    const categoria = this.state.categoria;
    const pagina = this.state.pagina;

    const url = `https://node-red-nxdup.mybluemix.net/productos/${categoria}/${pagina}`;
    
    fetch(url, {method: 'get'})
    .then(respuesta =>  respuesta.json())
    .then(dato => {
      this.setState({
        lista : dato.data.products
      })
    })
  }//Fin función consultaGet



  //Función que recibe datos enviados por componentes hijos 
  datosBusqueda = (categoria) =>{
    this.setState({
      categoria : categoria,
      pagina : 1
    }, () => {
      this.consultaGet();
    })
  }

  render(){
    return (
      <div className="App container">
            {/*componente */}
            <div className = "jumbotron">
              <p className ="lead text-center">Buscar articulo</p>
                  <Buscador
                      datosBusqueda = {this.datosBusqueda}
                  />
            </div>
        
            {/*componente */}
            <div className="row justify-content-center">
                <Mostrador 
                    lista = {this.state.lista}
                    adelante = {this.adelante}
                    regresar = {this.regresar} 
                />   
            </div>
        
      </div>
    );
  }
}


export default AppTienda;
