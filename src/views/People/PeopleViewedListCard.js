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
import {
    Avatar,
    CardContent,
    CardHeader,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    Typography
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {People, PersonAdd} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import peopleStyle from "../../assets/jss/views/peopleStyle";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(peopleStyle)

const PeopleViewedCardList = () => {
    const classes = useStyles()

    return (
        <Card>
            <CardHeader
                title={<Typography className={classes.title}>People also viewed</Typography>}
            />
            <Divider />
            <CardContent className={classes.cardContent} style={{paddingBottom: 0,}}>
                <Grid container alignItems="center" justify={"space-around"} >
                    <div className={classes.stats}>
                        <span className={"title"}>Last 5 days</span>
                        <span className={"number"}>06</span>
                    </div>
                    <Divider flexItem orientation={"vertical"} />
                    <div className={classes.stats}>
                        <span className={"title"}>Since last Week</span>
                        <span className={"number"}>43%</span>
                    </div>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default PeopleViewedCardList