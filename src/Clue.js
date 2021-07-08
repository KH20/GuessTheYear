import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'row',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
  }));

function Clue(props) {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
        <div className={classes.details}>
        <CardContent className={classes.content}>
            {props.type === "Music" && <div>
                <Typography component="h5" variant="h5">
                    {props.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {props.artist}
                </Typography></div>
            }
            {(props.type === "Movie" || props.type === "Game") && <div>
                <Typography component="h5" variant="h5">
                    {props.title}
                </Typography>
            </div>
            }
            {props.type === "Event" && <div>
                <Typography component="h6" variant="h6">
                    {props.title}
                </Typography>
            </div>
            }
        </CardContent>
        <div className={classes.controls}>
        </div>
        </div>
        <CardMedia
        className={classes.cover}
        image={"/static/images/cards/" + props.title + ".jpg"}
        title={props.title + " album cover"}
        />
        </Card>
    )
};

export default Clue;