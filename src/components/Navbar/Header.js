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
import {AppBar, Container, Hidden, Toolbar} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import headerStyle from "../../assets/jss/components/headerStyle";
import PropTypes from 'prop-types'
import classNames from "classnames";
import Button from 'components/CustomButton/Button'
import SearchBar from "./SearchBar";
import logo from 'logo.svg'
// import AccountToolbar from "./AccountToolbar";
import Grid from "@material-ui/core/Grid";
import AppMenu from "./AppMenu";

const useStyles = makeStyles(headerStyle)

const Header = (props) => {
    const { color } = props
    const classes = useStyles()

    const appBarClasses = classNames({
        [" " + classes[color]]: color
    })
    return (
        <AppBar className={classes.appBar + appBarClasses} style={{background: "#1d2f38",}} position={"fixed"}>
            <Container className={classes.container}>
                <Toolbar className={classes.container}>
                    <Grid container>
                        <Grid item sm={2} style={{alignSelf: "center"}}>
                            <Grid container>
                                {/* logo */}
                                <Button color={"transparent"} href={"#"} className={classes.title}>
                                    <img src={logo} width={48} alt={"logo"} />
                                    Mosala
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item sm={4} style={{alignSelf: "center"}}>
                            <Hidden implementation={"css"} smDown>
                                <SearchBar />
                            </Hidden>
                        </Grid>
                        <Grid item sm={6}>
                            {/*    /!* Account Toolbar *!/*/}
                            <AppMenu />
                        </Grid>
                    </Grid>
                    {/*<div className={classes.flex}>*/}

                    {/*    /!*<AccountToolbar classes={classes} />*!/*/}
                    {/*</div>*/}
                </Toolbar>
                {/*<Toolbar className={classes.container + " " + classes.flexCenter} style={{paddingTop: 0, paddingBottom: 0}}>*/}
                {/*    <AppMenu />*/}
                {/*</Toolbar>*/}
            </Container>
        </AppBar>
    )
}

Header.propTypes = {
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
}

export default Header