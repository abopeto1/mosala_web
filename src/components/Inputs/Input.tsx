/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Created at 2021-06-25
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {makeStyles, TextField, TextFieldProps} from "@material-ui/core";
import React from "react";
import {inputStyle} from "../../assets/jss/components/inputStyle";

const useStyles = makeStyles(inputStyle)

export const Input = (props: TextFieldProps) => {
    const classes = useStyles()

    return (
        <TextField {...props} classes={{root: classes.root}} />
    )
}