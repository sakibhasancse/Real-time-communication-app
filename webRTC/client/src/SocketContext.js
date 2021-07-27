import React, { useState, useRef, useEffect, createContext } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';


const SocketContext = createContext();

const socket = io('http://localhost:5000');

const ContextProvider = ({ children }) => {
    const [stream, setStream] = useState(null);
    const [me, setMe] = useState('');
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);

    const myVideo = useRef();
    const userVideo = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                setStream(currentStream);
                myVideo.current.srcObject = currentStream;
            })
            .catch(() => {
                console.log('Failed to get current stream')
            })

        socket.on('me', (id) => setMe(id));

        socket.on('callUser', ({ from, name: callerName, signal }) => {
            setCall({ isReceivedCall = true, from, name: callerName, signal })
        })
    }, [])

    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on('signal', function (data) {
            socket.emit('answercall', { signal: data, to: call.from })
        })
        peer.on('stream', function (currentStream) {
            userVideo.current.srcObject = currentStream;
        })
    }

    const callUser = () => {
        setCallEnded(true);
    }

    const leaveCall = () => {

    }
}