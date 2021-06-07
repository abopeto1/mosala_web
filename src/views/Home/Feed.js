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
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PeopleViewedCardList from "../People/PeopleViewedListCard";
import ProfileResume from "../Profile/ProfileResume";
import makeStyles from "@material-ui/core/styles/makeStyles";
import feedStyle from "../../assets/jss/components/feedStyle";

const useStyles = makeStyles(feedStyle)

const Feed = () => {
    const classes = useStyles()

    return (
        <Grid container spacing={2}>
            <Grid item sm={3} className={classes.column}>
                <ProfileResume />
                <PeopleViewedCardList />
            </Grid>
            <Grid item sm={6}>Content</Grid>
            <Grid item sm={3}>Right Side</Grid>
        </Grid>
    )
}

export default Feed