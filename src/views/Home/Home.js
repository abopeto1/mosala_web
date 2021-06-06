/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {Grid, Menu, Toolbar} from "@material-ui/core";
import React from "react";
import ProfileResume from "../Profile/ProfileResume";
import PeopleViewedCardList from "../People/PeopleViewedListCard";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import homeStyle from "../../assets/jss/views/homeStyle";
import HomeMenu from "../../components/Navbar/HomeMenu";

const useStyles = makeStyles(homeStyle)

const Home = () => {
    const classes = useStyles()

    return (
        <div>
            <Toolbar className={classes.toolbar}>
                <HomeMenu />
            </Toolbar>
            <Container>
                <Grid container spacing={4}>
                    <Grid item sm={3}>
                        <Grid container spacing={2} direction={"column"}>
                            <Grid item>
                                <ProfileResume />
                            </Grid>
                            <Grid item>
                                <PeopleViewedCardList />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6}>Content</Grid>
                    <Grid item sm={3}>Right Side</Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home