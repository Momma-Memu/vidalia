import React, { useState, useEffect, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Drop from './Drop';
import { survivalPlayer } from '../../Context';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function AlertDialogSlide({name, depth, setWeapon}) {
  const [open, setOpen] = React.useState(false);
  const [loot, setLoot] = useState([])

  const { playerData, getEnemies, killSets, setKillSets, initiativeRollButn, setTurn, turn, setTurnList, turnList } = useContext(survivalPlayer);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let cost;

  if(depth === 0 || depth < 3){
    cost = 30;
  } else {
      cost = depth * 10;
  }

  useEffect(() => {
    getLoot()
    setKillSets(killSets + 1);
    setTurnList([])
    setTurn(null);
  }, [])

  const getLoot = async() => {
    const res = await fetch('/api/item-drop', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json' ,
        },
        body: JSON.stringify({ name, cost })
    })
    const data = await res.json();
    setLoot(data)
  }

  const drops = loot.map((data) => <Drop setWeapon={setWeapon} data={data} />)

  const handleContinue = () => {
    initiativeRollButn.current.classList.remove('hide')
    getEnemies();
    handleClose();
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Loot the carnage
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"You loot the room."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className='drop-container'>
                {drops}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleContinue} color="primary">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
