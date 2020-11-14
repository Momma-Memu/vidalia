import React, { useContext, useState } from 'react';
import { survivalPlayer } from '../../Context';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import PlayerCard from './PlayerCard';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'black',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: 'rgb(149, 197, 219, 0.8)',
    },
  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { playerData } = useContext(survivalPlayer);
  const [points, setPoints] = useState(5);

  const handleClickOpen = () => {
    setOpen(true);
    console.log(playerData)
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className='level-up-button' onClick={handleClickOpen}>
        Level Up
      </div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Level Up
            </Typography>
            <Button className={classes.buttonStyle} onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
            <div className='points-container'>
                <div>{`Points left: ${points}`}</div>
            </div>
            <PlayerCard data={playerData[0]} />
      </Dialog>
    </>
  );
}