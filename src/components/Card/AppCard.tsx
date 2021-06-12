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
import {Card, CardContent, CardHeader, Divider, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import cardStyle from "../../assets/jss/components/cardStyle";

type AppCardProps = {
    title?: string,
    children?: React.ReactNode,
    action?: React.ReactNode,
}

// @ts-ignore
const useStyles = makeStyles(cardStyle)

const AppCard = ({title, children, action}: AppCardProps) => {
    const classes = useStyles()

    return (
        <Card className={classes.root} variant={"outlined"}>
            {
                (title || action) && (
                    <CardHeader
                        title={<Typography className={classes.title}>{title}</Typography>}
                        action={action}
                        classes={{
                            root: classes.headerRoot,
                        }}
                    />
                )
            }
            {
                (title || action) && <Divider />
            }
            <CardContent className={classes.content}>
                {children}
            </CardContent>
        </Card>
    )
}

export default AppCard