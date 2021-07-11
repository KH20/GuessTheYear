import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button id="options" onClick={handleOpen}>
        <i class="fas fa-cog" id="options-icon"></i>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1 id="transition-modal-title">Settings</h1>
            <p id="transition-modal-description">Year Range: <input id="lowerLimit" type="number" min="1970" max="2019" size="10"></input> - <input id="upperLimit" type="number" min="1970" max="2019" size="10"></input></p>
            <div><Button style={{ background: green[500] }}><CheckIcon style={{ color: "white" }}/></Button><Button style={{ background: red[500], marginLeft:"1em" }}><CloseIcon style={{ color: "white"}}/></Button></div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}