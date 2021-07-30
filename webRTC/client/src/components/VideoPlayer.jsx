import React, { useContext } from 'react'
import { Grid, Typography, Paper, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../SocketContext'
const useStyles = makeStyles((theme) => ({
    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '300px'
        },
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    paper: {
        padding: '10px',
        border: '2px solid green',
        margin: '10px'
    }
}))

const VideoPlayer = () => {
    const classes = useStyles();
    const { call, callAccepted, callEnded, name, me, myVideo, userVideo, connectionRef, stream, setName, callUser, leaveCall, answerCall } = useContext(SocketContext);
    console.log(myVideo)
    return (
        <Grid container className={classes.gridContainer}>
            {/* own video */}

            {
                stream && (

                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom> {name || 'Name'}</Typography>
                            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                        </Grid>
                    </Paper>
                )
            }
            {/* Outher video */}

            {
                callAccepted && !callEnded && (

                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom> {call.name || 'Name'}</Typography>
                            <video playsInline ref={userVideo} autoPlay className={classes.video} />
                        </Grid>
                    </Paper>
                )
            }
        </Grid>

    )
}

export default VideoPlayer
