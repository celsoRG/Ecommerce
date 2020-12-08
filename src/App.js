
//Componentes externas
import React, { Component } from 'react';
import {makeStyles} from '@material-ui/core/styles';



//Componentes creadas

import Body from './components/Body';
import Footer from './components/Footer'
import AppTienda from './AppTienda'




class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      dato: []
    }
  }
  
 
  componentDidMount(){
    fetch('https://node-red-nxdup.mybluemix.net/visitor', {method: 'post'})
    .then(response =>  response.json())
    .then(response2 => {
      this.setState({
        dato : response2.data
      })
    })
    
  }
  


  render() { 
    const {dato} = this.state;
    
    return ( 
       <div className={useStyle.container} >       
          <Body welcome ={dato.welcome}/>
          <Footer version ={dato.version}/>
          <AppTienda/>
       </div>
      
      
     
     );
  }
}
 

//Estilos
const useStyle = makeStyles({
  container:{
      flex: 1,
      height: "100%",
      flexDirection: 'column',
      justifyContent: 'space-between',
      
  },
  bienvenida:{
    width: "100%", 
    height: 300,
    padding: '0 30px',
    background: '#16697a',
  },
  vertion:{
    width: "100%", 
    height: "50%",
    
}
}) 



export default App;
