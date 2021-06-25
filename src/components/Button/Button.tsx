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
import {ButtonProps, makeStyles} from "@material-ui/core";
import MuiButton from "@material-ui/core/Button";
import React from "react";
import {buttonsStyle} from "../../assets/jss/components/buttonsStyle";

const useStyles = makeStyles(buttonsStyle)

export const Button = (props: ButtonProps) => {
    const classes = useStyles()

    return (
        <MuiButton
            {...props}
            classes={{
                ...classes
            }}
        />
    )
}