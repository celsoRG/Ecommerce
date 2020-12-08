import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider} from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';



//componentes creados
 import theme from   '../temaConfig';
 



 


    
    function Body({welcome}){
        const classes =useStyle();
        return(
            <div className= {classes.container}>
                <ThemeProvider theme = {theme}>
            <div>
              <Typography variant="h5" color="initial" align = "center">
                 {welcome}
              </Typography>
            </div>
               

           
            <Box display="flex" justifyContent="center">            
               <Button    
                    color="primary"
                    variant= "contained"
                    
                    >Continuar    
                </Button> 
                
            </Box>               
            </ThemeProvider> 

            </div>
            
        );
    }
    
   
//Estilos
const useStyle = makeStyles({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
        
    }
}) 


 
export default Body;