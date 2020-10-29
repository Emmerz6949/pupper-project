import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import pupper_logo_02 from '../pupper_logo_02.svg';
import { Check } from '@material-ui/icons';
import { Close } from '@material-ui/icons';
import Pupper_walker_icon_02 from '../Pupper_walker_icon_02.svg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
   
    <div>
      <Button 
      variant="contained" color="primary"  onClick={handleClickOpen}  >
        Go for a walk 
      </Button>


      <Dialog  open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <center><img class="popoverIcon-image" src={Pupper_walker_icon_02} alt="A"/></center>
        <DialogTitle id="alert-dialog-title"> {"We have a match!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Joe Walker is available to walk your dog. Please except or dismiss your match. If your walker also excepts, they will reach out to you via email.
          </DialogContentText>
        </DialogContent>
        
        <Grid container direction="row" justify="center" alignItems="center">
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary" endIcon={<Check/>}>
                    Agree
                </Button>
                <Button onClick={handleClose} variant="outlined"color="primary" autoFocus endIcon={<Close/>}>
                    Decline
                </Button>
            </DialogActions>
        </Grid>
      </Dialog>
    </div>


  );
}