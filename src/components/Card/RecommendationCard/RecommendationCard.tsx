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
import {Card, CardContent, CardMedia, makeStyles} from "@material-ui/core";
import cardStyle from "../../../assets/jss/components/cardStyle";
import image from 'assets/images/adele.jpg'

const useStyles = makeStyles(cardStyle)

const RecommendationCard = () => {
    const classes = useStyles()

    return (
        <Card classes={{ root: classes.root}} style={{display: "flex",padding: 0}} variant={"outlined"}>
            <CardMedia
                className={classes.cardMedia}
                title={"profile-avatar"}
                image={image}
            />
            <CardContent>
                <div>Tobia Maravilla</div>
                <div>
                    Ulysse est très impliqué et autonome dans son travail. C'est un plaisir de travailler avec lui. Il a toujours à coeur de trouver la meilleure solution et de repousser
                    Nous avons pu établir les premières bases du système de BI chez OpenClassrooms grâce à Ulysse...
                </div>
            </CardContent>
        </Card>
    )
}

export default RecommendationCard