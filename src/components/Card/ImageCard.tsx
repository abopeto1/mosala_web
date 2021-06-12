/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Date 2021-06-10
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import {Divider, Grid, Paper, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import cardStyle from "../../assets/jss/components/cardStyle";

type ImageCardProps = {
    image: string;
    headTitle: string | JSX.Element;
    subTitle?: string;
    action?: React.ReactNode,
}
// @ts-ignore
const useStyles = makeStyles(cardStyle)

const ImageCard = ({image, headTitle, subTitle, action}: ImageCardProps) => {
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
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <Typography component={"span"} className={classes.headTitle}>{headTitle}</Typography>
                        {
                            subTitle && (
                                <Typography component={"span"} className={classes.subTitle}>{subTitle}</Typography>
                            )
                        }
                    </div>
                </Grid>
                { action && <Divider />}
                {
                    action && (
                        <Grid item>
                            {
                                action
                            }
                        </Grid>
                    )
                }
            </Grid>
        </Paper>
    )
}

export default ImageCard