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
import Grid from "@material-ui/core/Grid";
import PeopleViewedCardList from "../../components/People/PeopleViewedListCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import feedStyle from "../../assets/jss/components/feedStyle";
import {Post} from "../../components/Post/Post";
import CreatePost from "../../components/Post/CreatePost";
import AppCard from "../../components/Card/AppCard";
import ProfileResume from "../Profile/ProfileResume";
import SuggestPeople from "../../components/People/SuggestPeople";

const useStyles = makeStyles(feedStyle)

const Feed = () => {
    const classes = useStyles()

    return (
        <Grid container spacing={4}>
            <Grid item sm={3} className={classes.column}>
                <ProfileResume />
                <PeopleViewedCardList />
            </Grid>
            <Grid item sm={6} className={classes.column}>
                <CreatePost />
                    {
                        [0,1,2,3,4].map(a => (
                            <Post key={a} />
                        ))
                    }
            </Grid>
            <Grid item sm={3}>
                <AppCard title={"People you might know"}>
                    <SuggestPeople />
                </AppCard>
            </Grid>
        </Grid>
    )
}

export default Feed