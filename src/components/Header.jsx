import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton:{
      marginRight: theme.spacing(2),
  },
  title: {
      flex: 1
  }
}));


function Header() {
  const classes = useStyles()
  return (
    <div>   
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <Typography className= {classes.title} variant="h6" >
                   E-commerce
                </Typography>

                <IconButton 
                   color ="inherit"                      
                >
                    <MoreVertIcon></MoreVertIcon>
                </IconButton>
            </Toolbar>
        </AppBar>

        <div className= {classes.offset}>

        </div>
    </div>
    
  );
}
export default Header;