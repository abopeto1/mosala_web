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
import {Divider, Grid, Typography} from "@material-ui/core";
import profileStyle from "../../assets/jss/views/profileStyle";
import image from "assets/images/adele.jpg"

const useStyles = makeStyles(profileStyle)

const ProfileResume = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.paper}>
            <Grid container direction={"column"}>
                <Grid
                    item className={classes.image}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                    }}
                />
                <Grid item>
                    <Typography className={classes.profileTitle}>Adele Adkins</Typography>
                    <Typography className={classes.profileFunction}>Interaction Designer @Google</Typography>
                </Grid>
            </Grid>
            <Divider />
            <Grid item>
                <Grid container justify={"space-between"} className={classes.stats}>
                    <Grid item>Connection</Grid>
                    <Grid item className={"number"}>564</Grid>
                </Grid>
                <Grid container justify={"space-between"} className={classes.stats}>
                    <Grid item>Profile Views</Grid>
                    <Grid item className={"number"}>81</Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ProfileResume