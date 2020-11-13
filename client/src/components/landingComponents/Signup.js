import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { loginStyles } from '../../styles/landing/landing'


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [headers, setHeaders] = useState('')

  const classes = loginStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <div className='sign-up-button' onClick={handleClickOpen}>Sign Up</div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Begin your adventure</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter some basic adventurer info!
                </DialogContentText>
                <div className='login-text-fields-container'>
                    <TextField id="outlined-basic-email" label="Email" variant="outlined"/>
                    <TextField id="outlined-basic-password" label="Password" type='Password' variant="outlined" className={classes.login}/>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Sign Up
                </Button>
            </DialogActions>
        </Dialog>
    </>
  );
}
