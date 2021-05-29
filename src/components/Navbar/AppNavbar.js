/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import makeStyles from "@material-ui/core/styles/makeStyles";
import headerLinksStyle from "../../assets/jss/components/headerLinksStyle";
import {Mic, Search} from "@material-ui/icons";
import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import {InputAdornment} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(headerLinksStyle)

const AppNavbar = () => {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.searchWrapper}>
                <CustomInput
                    type={"outlined"}
                    formControlProps={{
                        className: classes.margin + " " + classes.search
                    }}
                    inputProps={{
                        placeholder: "Search",
                        inputProps: {
                            "aria-label": "Search",
                        },
                        endAdornment: (<InputAdornment position={"end"}>
                            <IconButton edge={"end"}><Mic /></IconButton>
                        </InputAdornment>),
                        startAdornment: (<InputAdornment position={"start"}>
                            <IconButton edge={"start"}><Search /></IconButton>
                        </InputAdornment>),
                        style: {
                            borderRadius: "36px",
                            width: "60vw"
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default AppNavbar