/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Created at 2021-06-11
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from 'react'
import {Avatar, Divider, Grid, Paper} from "@material-ui/core";
import {AvatarGroup} from '@material-ui/lab'
import makeStyles from "@material-ui/core/styles/makeStyles";
import cardStyle from "../../assets/jss/components/cardStyle";
import {LocalActivity} from "@material-ui/icons";

const useStyles = makeStyles(cardStyle)

export const JobCard = () => {
    const classes = useStyles()

    return (
        <Paper classes={{root: classes.jobCard,}} variant={"outlined"}>
            <Grid container justify={"space-between"}>
                <Grid item>
                    <div className={classes.jobInfos}>
                        <span className={classes.headTitle}>Interaction Designer</span>
                        <span className={classes.company}>Google</span>
                        <span className={classes.subTitle}>Shangai, CN</span>
                    </div>
                </Grid>
                <Grid item>
                    <Avatar  variant={"square"}><LocalActivity /></Avatar>
                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems={"center"}>
                <Grid item>
                    <AvatarGroup>
                        <Avatar alt={"R"} className={classes.smallAvatar} />
                        <Avatar alt={"R"} className={classes.smallAvatar} />
                        <Avatar alt={"R"} className={classes.smallAvatar} />
                        <Avatar alt={"R"} className={classes.smallAvatar} />
                    </AvatarGroup>
                </Grid>
                <Grid item>
                    <span className={classes.company}>18 Connections</span>
                </Grid>
            </Grid>
            <Divider />
            <time>Posted 3 days ago</time>
        </Paper>
    )
}