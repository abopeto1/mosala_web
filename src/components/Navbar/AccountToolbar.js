/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Dashboard, Notifications, Search} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {Avatar, Hidden} from "@material-ui/core";

const AccountToolbar = ({classes = {}}) => {
    return (
        <div className={classes.displayFlex +" "+ classes.flexEnd}>
            <Hidden implementation={"css"} mdUp>
                <IconButton><Search /></IconButton>
                <IconButton><Dashboard /></IconButton>
                <IconButton><Notifications /></IconButton>
                <IconButton><Avatar /></IconButton>
            </Hidden>
            <Hidden implementation={"css"} smDown>
                <IconButton><Dashboard /></IconButton>
                <IconButton><Notifications /></IconButton>
                <IconButton><Avatar /></IconButton>
            </Hidden>
        </div>
    )
}

export default AccountToolbar