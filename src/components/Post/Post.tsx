/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Created at 2021-06-08
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from 'react'
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    IconButton,
    Typography
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {postStyle} from "../../assets/jss/components/postStyle";
import {
    Chat,
    ChatBubbleOutlineOutlined,
    Favorite,
    MoreVertOutlined,
    ShareOutlined, ThumbUp,
} from "@material-ui/icons";

const useStyles = makeStyles(postStyle)

export const Post = () => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar aria-label={"recipe"}>R</Avatar>}
                action={<IconButton><MoreVertOutlined /></IconButton>}
                title={"Tobia Crivelia"}
                subheader={"Product Designer at Yelp"}
                classes={{
                    title: classes.name,
                }}
            />
            <CardContent>
                <Divider />
                <Typography
                    variant={"body1"} color={"textSecondary"} component={"p"} className={classes.paddingHorizontal}
                    classes={{
                        body1: classes.textContent,
                    }}
                >
                    Join in the Product Expert Competition of Xinhua Silk Road, a famous media institution in China. See what the winner can get here: https://lnkd.in/fJh8XYz
                </Typography>
                <Grid container alignItems={"center"} spacing={2} className={classes.paddingHorizontal}>
                    <Grid item>
                        <div className={classes.feedback}>
                            <Favorite color={"secondary"} /> 3
                        </div>
                    </Grid>
                    <Grid item>
                        <div className={classes.feedback}>
                            <ChatBubbleOutlineOutlined /> 2
                        </div>
                    </Grid>
                </Grid>
                <Divider />
            </CardContent>
            <CardActions disableSpacing>
                <Grid container alignItems={"center"} spacing={2}>
                    <Grid item xs={4}>
                        <div className={classes.feedback}>
                            <ThumbUp color={"primary"} /> Like
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.feedback}>
                            <Chat /> Comment
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.feedback}>
                            <ShareOutlined /> Share
                        </div>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}