import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DeleteIcon from '@material-ui/icons/Delete';
import pupper_logo_02 from '../pupper_logo_02.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
  },
}));

export default function ButtonAppBar() { console.log (pupper_logo_02)
  const classes = useStyles();

  return (
    
      <AppBar position="fixed"  >
        <Toolbar>
            <img src={pupper_logo_02} alt="A"/>
            <Typography variant="h6" className={classes.title}>
                 
            </Typography>

            <IconButton aria-label="MeetingRoomIcon"  color="inherit" className={classes.margin}>
            <MeetingRoomIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
   
  );
}