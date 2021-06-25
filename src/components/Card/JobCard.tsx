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
import moment from "moment";
import {Link} from "@reach/router";

interface IJobCard {
    job: IJob
}

const useStyles = makeStyles(cardStyle)

export const JobCard = (props: IJobCard) => {
    const {job} = props

    const classes = useStyles()

    return (
        <Paper classes={{root: classes.jobCard,}} variant={"outlined"}>
            <Grid container justify={"space-between"}>
                <Grid item>
                    <div className={classes.jobInfos}>
                        <Link to={`/jobs/${job.id}`} className={classes.headTitle}>{job.title}</Link>
                        <span className={classes.company}>{job.company.name}</span>
                        <span className={classes.subTitle}>Shangai, CN</span>
                    </div>
                </Grid>
                <Grid item>
                    <Avatar src={job.company.profile_picture} variant={"square"}><LocalActivity /></Avatar>
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
                    <span className={classes.company}>18 Candidates</span>
                </Grid>
            </Grid>
            <Divider />
            <time>Posted {moment(job.date_posted, 'YYYYMMDD').fromNow()}</time>
        </Paper>
    )
}