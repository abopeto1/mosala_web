/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Created at 2021-06-09
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import {Avatar, Button, Grid, ListItemText} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import peopleStyle from "../../assets/jss/views/peopleStyle";
import {Add} from "@material-ui/icons";

// @ts-ignore
const useStyles = makeStyles(peopleStyle)

type SuggestPeopleCardState = {
    user: UserState
}

const SuggestPeopleCard = ({user}: SuggestPeopleCardState) => {
    const classes = useStyles()

    return (
            <Grid container spacing={2} alignItems={"center"}>
                <Grid item xs={3} sm={3} md={3}><Avatar style={{width: 60, height: 60,}}>T</Avatar></Grid>
                <Grid item sm={9}>
                    <ListItemText
                        classes={{
                            primary: classes.name,
                        }}
                        primary={user.full_name}
                        secondary={"Product Designer at Yelp"}
                    />
                    <Button variant={"outlined"} size={"small"} className={classes.buttonGradient} startIcon={<Add />}>Add</Button>
                </Grid>
                {/*<Grid item sm={4}>*/}
                {/*    <div>*/}
                {/*        <Button variant={"outlined"} size={"small"} className={classes.buttonGradient} startIcon={<Add />}>Add</Button>*/}
                {/*    </div>*/}
                {/*</Grid>*/}
            </Grid>
    )
}

export default SuggestPeopleCard