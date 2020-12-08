import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles';





class Footer  extends Component {
   constructor(props){
       super(props)
   }
  
    render() {
       const {version} = this.props;
       

      
        return (  
            <div>
                <Typography variant="h6" color="initial" align = "right">                
                 {version}
                 
                
                </Typography>
            </div>
        );
    }
}


export default Footer ;

