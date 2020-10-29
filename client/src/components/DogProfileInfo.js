import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `2px 0px 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `2px 0 0 ${theme.spacing(9)}px`,
  },
}));

export default function DogProfileInfo() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        <h1>Dog Profile</h1>
      <ListItem>
        <ListItemText primary="CoCo" secondary="Dog Name" />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
        </Typography>

      </li>
      <ListItem>
        <ListItemText primary="Laab" secondary="Last Name" />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
        </Typography>

      </li>
      <ListItem>
        <ListItemText primary="Lab" secondary="Dog breed" />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
        </Typography>
      </li>

      <ListItem>
        <ListItemText primary="CocoLaab@gmail.com" secondary="Email" />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
        </Typography>
      </li>

      <ListItem>
        <ListItemText primary="21217" secondary="ZipCode" />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
        </Typography>
      </li>

      <ListItem>
        <ListItemText primary="Medium" secondary="Dog Size" />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
        </Typography>
      </li>




    </List>
  );
}
