import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
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

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [tutorialOpen, setTutorialOpen] = React.useState(false);
  const {setMinimumYear} = props;
  const {setMaximumYear} = props;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleTutorialOpen = () => {
    setTutorialOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTutorialClose = () => {
    setTutorialOpen(false);
  };

  const saveSettings = () => {
    let minYear = document.getElementById("lowerLimit").value;
    let maxYear = document.getElementById("upperLimit").value;
    if(minYear != "")
      setMinimumYear(minYear);
    if(maxYear != "")
      setMaximumYear(maxYear);
    console.log(minYear);
    console.log(maxYear);
    setOpen(false);
  }

  return (
    <div>
      <div id="options-buttons-container">
        <button class="options-buttons" onClick={handleOpen}>
          <i class="fas fa-cog" id="options-icon"></i>
        </button>
        <button class="options-buttons" onClick={handleTutorialOpen}>
          <i class="fas fa-question-circle" id="tutorial-icon"></i>
        </button>
      </div>

      <Dialog
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
            <p id="transition-modal-description">Year Range: <input id="lowerLimit" type="number" min="1970" max="2019" size="10" placeholder="Lower Limit"></input> - <input id="upperLimit" type="number" min="1970" max="2019" size="10" placeholder="Upper Limit"></input></p>
            <div><Button onClick={saveSettings} id="saveSettings" style={{ background: green[500] }}><CheckIcon style={{ color: "white" }}/></Button><Button onClick={handleClose} id="closeSettings" style={{ background: red[500], marginLeft:"1em" }}><CloseIcon style={{ color: "white"}}/></Button></div>
          </div>
        </Fade>
      </Dialog>

      <Dialog
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={tutorialOpen}
        onClose={handleTutorialClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={tutorialOpen}>
          <div className={classes.paper}>
            <MuiDialogContent dividers><MuiDialogTitle>Guess The Year Tutorial</MuiDialogTitle></MuiDialogContent>
            
            <h2>Single Player</h2>
            <p>1. Press the Get Clues button to get a randomly generated year between 1970 - Today.</p>
            <center><img src="static/images/tutorial/guessbutton.png"></img></center>
            <p>2. Press one of the clue buttons to load a clue.</p>
            <center><img src="static/images/tutorial/cluebuttons.png"></img></center>
            <p>3. The clue will be loaded into the respective clue category.</p>
            <center><img src="static/images/tutorial/clue.png"></img></center>
            <p>4. You can cycle between clue categories by swiping, clicking the arrows in the header, or using the arrow keys on a keyboard.</p>
            <p>5. When you think you know the year that the clues are referring to. Type the year into the Guess input and press Submit. You may also Give Up if you don't know the answer</p>
            <center><img src="static/images/tutorial/submit.png"></img></center>
            <p>6. If you are incorrect, you will be told that you're incorrect, and to keep guessing.</p>
            <center><img src="static/images/tutorial/incorrect.png"></img></center>
            <p>7. However, if you are right you will be told You Win!</p>
            <center><img src="static/images/tutorial/win.png"></img></center>
            <MuiDialogContent dividers>
            <h2>Multiplayer</h2>
            <p>1. In Multiplayer, you are the quizmaster. Type a year between 1970 - Today in the Year Input and press Get Clues.</p>
            <center><img src="static/images/tutorial/yearinput.png"></img></center>
            <p>2. You can click the music clues to be linked to YouTube where you can play music from songs instead of giving them the title and artist</p>
            </MuiDialogContent>
            <h2>Options</h2>
            <p>1. You can set a year range within the options so that a randomly generated year is between a specific year range. e.g. 1980-2000.</p>
            <center><img src="static/images/tutorial/settings.png"></img></center>

            <div style={{"float":"right"}}><Button onClick={handleTutorialClose} id="closeSettings" style={{ background: red[500], marginLeft:"1em" }}><CloseIcon style={{ color: "white"}}/></Button></div>
          </div>
        </Fade>
      </Dialog>
    </div>
  );
}