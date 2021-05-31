/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import {Avatar, Divider, Grid, Typography} from "@material-ui/core";
import profileStyle from "../../assets/jss/views/profileStyle";

const useStyles = makeStyles(profileStyle)

const ProfileResume = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.paper}>
            <Grid container direction={"column"} alignItems={"center"}>
                <Avatar alt={"Arnold Bopeto"} className={classes.largeAvatar} />
                <Typography variant={'h6'} gutterBottom className={classes.profileTitle}>Hugo boss</Typography>
                <Typography gutterBottom>Graphic Designer</Typography>
            </Grid>
            <Divider className={classes.divider} />
            <Typography className={classes.stats}>
                <span className={"number"}>2589</span> connections
            </Typography>
            <Divider className={classes.divider} />
            <Grid container alignItems={"center"}>
                <Grid item className={classes.stats+" "+classes.statsDivided}>
                    <span className={"number"}>3450</span><br /> Profile Views
                </Grid>
                <Divider orientation={"vertical"} flexItem />
                <Grid item className={classes.stats+" "+classes.statsDivided}>
                    <span className={"number"}>987</span><br /> Post Views
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            View my profile
        </Paper>
    )
}

export default ProfileResume