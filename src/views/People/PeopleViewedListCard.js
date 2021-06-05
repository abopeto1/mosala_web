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
import {Avatar, CardContent, CardHeader, Divider, IconButton, List, ListItem, ListItemAvatar} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {People, PersonAdd} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import peopleStyle from "../../assets/jss/views/peopleStyle";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const useStyles = makeStyles(peopleStyle)

const PeopleViewedCardList = () => {
    const classes = useStyles()

    return (
        <Card>
            <CardHeader
                title={"People also viewed"}
            />
            <Divider />
            <CardContent className={classes.cardContent}>
                <List>
                    {
                        [0, 1, 2, 3].map((a) => (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar><People /></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={a}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge={"end"} aria-label={"delete"}>
                                        <PersonAdd />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    }
                </List>
            </CardContent>
        </Card>
    )
}

export default PeopleViewedCardList