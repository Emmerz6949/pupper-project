import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function EditButton() {
  const classes = useStyles();

  return (
    <div>
      <Button 
        variant="text"
        color="primary"
        className={classes.button}
        /*startIcon={<ArrowBackIcon />}*/
      >
        edit profile
      </Button>
      
    </div>
  );
}