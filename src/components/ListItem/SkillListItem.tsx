/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Created at 2021-06-12
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from 'react'
import {Avatar, Grid, ListItem, ListItemAvatar} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {listStyle} from "../../assets/jss/components/listStyle";
import {blueColor} from "../../assets/jss/mosala-web";

const useStyles = makeStyles(listStyle)

const SkillListItem = () => {
    const classes = useStyles()

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>TB</Avatar>
            </ListItemAvatar>
            <Grid container direction={"column"}>
                <Grid item>
                    <span className={classes.title}>Illustrator</span>
                    <span
                        className={classes.skillNote}
                    >20</span>
                </Grid>
                <Grid item>
                    <div className={classes.subTitle}>Endorsed by <span style={{color: blueColor[1]}}>Jennifer Tran</span>, who is highly skilled at this</div>
                </Grid>
            </Grid>
        </ListItem>
    )
}

export default SkillListItem