import React from 'react'

import classes from './Modal.module.css'
import Auxiliary from '../../hoc/Auxiliary'
import BackDrop from '../Ui/BackDrop/BackDrop'

export default function Modal(props) {
    return (
        <Auxiliary>
            <BackDrop show = {props.show}/>
            <div className={classes.Modal}
            style ={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
            </div>
        </Auxiliary>
        
    )
}
