/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import {AppBar, Hidden, Toolbar} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import headerStyle from "../../assets/jss/components/headerStyle";
import PropTypes from 'prop-types'
import classNames from "classnames";
import Button from 'components/CustomButton/Button'
import AppNavbar from "./AppNavbar";
import logo from 'logo.svg'
import AccountToolbar from "./AccountToolbar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(headerStyle)

const Header = (props) => {
    const { color } = props
    const classes = useStyles()

    const appBarClasses = classNames({
        [" " + classes[color]]: color
    })
    return (
        <AppBar className={classes.appBar + appBarClasses}>
            <Toolbar className={classes.container} style={{background: "white"}}>
                <div className={classes.flex}>
                    <Grid container alignItems={"center"}>
                        {/* logo */}
                        <Button color={"transparent"} href={"#"} className={classes.title}>
                            <img src={logo} width={64} alt={"logo"} />
                            Mosala
                        </Button>
                        <Divider orientation={"vertical"} flexItem />
                    </Grid>
                </div>
                <Hidden implementation={"css"} smDown>
                    <AppNavbar className={classes.flex} />
                </Hidden>
                <div className={classes.flex}>
                    {/* Account Toolbar */}
                    <AccountToolbar classes={classes} />
                </div>
            </Toolbar>
            <Toolbar className={classes.container}>
                Menu
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
}

export default Header