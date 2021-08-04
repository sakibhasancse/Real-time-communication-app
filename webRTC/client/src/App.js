import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}))

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <AppBar position="static" color="inherit">
                <Typography variant="h3" align="center">Video Chat</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
            <div id="info"></div>
        </div>
    );
};
export default App;