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
import PeopleToConnectListItem from "../../components/People/PeopleToConnectListItem";
import {List} from "@material-ui/core";
import ImageCard from "../../components/Card/ImageCard";
import image from "../../assets/images/adele.jpg"
import {Link} from "@reach/router";

const useStyles = makeStyles(feedStyle)

const Feed = () => {
    const classes = useStyles()

    return (
        <Grid container spacing={4}>
            <Grid item sm={3} className={classes.column}>
                <ImageCard
                    image={image}
                    headTitle={<Link to={"/profile"}>Adele Adkins</Link>}
                    subTitle={"Interaction Designer @Google"}
                    action={
                        <div>
                            <Grid container justify={"space-between"} className={classes.stats}>
                                <Grid item>Connection</Grid>
                                <Grid item className={"number"}>564</Grid>
                            </Grid>
                            <Grid container justify={"space-between"} className={classes.stats}>
                                <Grid item>Profile Views</Grid>
                                <Grid item className={"number"}>81</Grid>
                            </Grid>
                        </div>
                    }
                />
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
                    <List dense>
                        {
                            [0,1,2,3].map(a => (
                                <PeopleToConnectListItem key={a} />
                            ))
                        }
                    </List>
                </AppCard>
            </Grid>
        </Grid>
    )
}

export default Feed