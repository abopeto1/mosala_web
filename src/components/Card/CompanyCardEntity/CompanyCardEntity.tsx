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
import React from "react";
import {Card, CardActions, CardMedia, makeStyles} from "@material-ui/core";
import image from 'assets/images/adele.jpg'
import cardStyle from "../../../assets/jss/components/cardStyle";

const useStyles = makeStyles(cardStyle)

export const CompanyCardEntity = () => {
    const classes = useStyles()

    return (
        <Card>
            <CardMedia
                title={"company_avatar"}
                image={image}
                className={classes.companyCardMedia}
            />
            <CardActions style={{display: "flex", justifyContent: "center"}}>
                <span className={classes.headTitle} style={{marginTop: 0}}>Google</span>
            </CardActions>
        </Card>
    )
}