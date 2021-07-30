import React from 'react'
import { Grid, Typography, Container, Paper } from '@material-ui/core';
import { copyToClipboard } from 'react-copy-to-clipboard'
import { makeStyles } from '@material-ui/core/styles';
import { Assignment, Phone, phoneDisabled } from '@material-ui/icons'

const Options = ({ children }) => {
    return (
        <div>
            Hello
            { children}
        </div>

    )
}

export default Options
