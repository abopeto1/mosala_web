/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, {useContext} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Grid} from "@material-ui/core";
import profileStyle from "../../assets/jss/views/profileStyle";
import image from "../../assets/images/avatar.png"
import {Link} from "@reach/router";
import ImageCard from "../../components/Card/ImageCard";
import {UserContext} from "../../layouts/App";

const useStyles = makeStyles(profileStyle)

const ProfileResume = () => {
    const classes = useStyles()
    const {currentUser} = useContext(UserContext)
    console.log(currentUser)

    return (
        <ImageCard
            image={currentUser.infos.profile_image ? currentUser.infos.profile_image.image.medium_square_crop : image}
            headTitle={<Link to={"/profile"}>{`${currentUser.first_name} ${currentUser.last_name}`}</Link>}
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
    )
}

export default ProfileResume