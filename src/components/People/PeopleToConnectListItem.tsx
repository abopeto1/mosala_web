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
import {Avatar, Button, Grid, ListItem, ListItemText} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import peopleStyle from "../../assets/jss/views/peopleStyle";

// @ts-ignore
const useStyles = makeStyles(peopleStyle)

const PeopleToConnectListItem = () => {
    const classes = useStyles()

    return (
        <ListItem className={classes.listItem}>
            <Grid container spacing={2} alignItems={"center"}>
                <Grid item xs={2} sm={2} md={2}><Avatar>T</Avatar></Grid>
                <Grid item sm={6}>
                    <ListItemText
                        classes={{
                            primary: classes.name,
                        }}
                        primary={"Tobia Capello"}
                        secondary={"Product Designer at Yelp"}
                    />
                </Grid>
                <Grid item sm={4}>
                    <div>
                        <Button variant={"outlined"} size={"small"} className={classes.buttonGradient}>Connect</Button>
                    </div>
                </Grid>
            </Grid>
            {/*<ListItemAvatar>*/}
            {/*    <Avatar>R</Avatar>*/}
            {/*</ListItemAvatar>*/}

            {/*<ListItemSecondaryAction>*/}
            {/*    <Button variant={"outlined"}>Connect</Button>*/}
            {/*</ListItemSecondaryAction>*/}
        </ListItem>
    )
}

export default PeopleToConnectListItem