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
import {Search} from "@material-ui/icons";
import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import {InputAdornment} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(headerLinksStyle)

const SearchBar = () => {
    const classes = useStyles()

    return (
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
                    startAdornment: (<InputAdornment position={"start"}>
                        <IconButton edge={"start"}><Search style={{color: "#54626e"}} /></IconButton>
                    </InputAdornment>),
                }}
            />
        </div>
    )
}

export default SearchBar