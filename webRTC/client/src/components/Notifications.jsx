import React, { useContext } from 'react'
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>

                        <h2>{call.name} is calling:</h2>
                    </div>
                    {/* <div> */}

                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </Button>
                    {/* </div> */}

                </div>
            )}
        </>
    );
}

export default Notifications
