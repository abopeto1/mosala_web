/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, {useContext, useEffect, useState} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Grid} from "@material-ui/core";
import profileStyle from "../../assets/jss/views/profileStyle";
import image from "../../assets/images/avatar.png"
import {Link} from "@reach/router";
import ImageCard from "../../components/Card/ImageCard";
import {UserContext} from "../../layouts/App"
import axios from "axios";

const useStyles = makeStyles(profileStyle)

const ProfileResume = () => {
    const classes = useStyles()
    const {currentUser} = useContext(UserContext)
    const [userProfile, setUserProfile] = useState<UserState>({
        first_name: "", full_name: "", id: 0, infos: undefined, last_name: "", profile_views: 0, url: "",
        relationships_accepted_count: 0
    })

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}me/`).then(r => {
            setUserProfile(r.data)
        }).catch(e => console.log(e))
    }, [userProfile])


    return (
        <ImageCard
            image={currentUser.infos && currentUser.infos.profile_image ? currentUser.infos.profile_image.image.medium_square_crop : image}
            headTitle={<Link to={"/profile"}>{`${currentUser.first_name} ${currentUser.last_name}`}</Link>}
            subTitle={"Interaction Designer @Google"}
            action={
                <div>
                    <Grid container justify={"space-between"} className={classes.stats}>
                        <Grid item>Contacts</Grid>
                        <Grid item className={"number"}>{userProfile && userProfile.relationships_accepted_count}</Grid>
                    </Grid>
                    <Grid container justify={"space-between"} className={classes.stats}>
                        <Grid item>Profile Views</Grid>
                        <Grid item className={"number"}>{userProfile && userProfile.profile_views}</Grid>
                    </Grid>
                </div>
            }
        />
    )
}

export default ProfileResume