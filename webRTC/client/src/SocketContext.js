import React, { useState, useRef, useEffect, createContext } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';


const SocketContext = createContext();

const socket = io('http://localhost:5000');

const ContextProvider = ({ children }) => {
    const [strem, setStrem] = useState(null);
    const [me, setMe] = useState('');
    const myVideo = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                setStrem(currentStream);
                myVideo.current.srcObject = currentStream;
            })
            .catch(() => {
                console.log('Failed to get current stream')
            })

        socket.on('me', (id) => setMe(id))
    })

    const answerCall = () => {

    }
    const callUser = () => {

    }

    const leaveCall = () => {

    }
}