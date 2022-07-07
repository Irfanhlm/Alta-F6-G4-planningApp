import React, { Component } from 'react'
import TextField from '@mui/material/TextField';

const Input = (props) => {

    return (
        <div className='flex flex-col gap-1'>
            <TextField className={props.className} id={props.id} type={props.type} value={props.value} label={props.label} variant={props.outline} onChange={(e) => props.handleEmail(e)}/>
        </div>

    )

}

export default Input;