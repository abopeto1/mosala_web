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
    CardContent,
    CardHeader,
    Divider,
    Typography
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import peopleStyle from "../../assets/jss/views/peopleStyle";
import Grid from "@material-ui/core/Grid";
import ChartistGraph from "react-chartist";

let Chartist = require("chartist");

const useStyles = makeStyles(peopleStyle)

const PeopleViewedCardList = () => {
    const classes = useStyles()

    const data = {
        labels: ['','TUE', 'WED', 'THU', ""],
        series: [
            [2, 3, 5, 2, 3]
        ]
    }
    const options = {
        low: 0,
        fullWidth: true,
        showArea: true,
        axisY: {
            showLabel: false,
            offset: 0,
        },
        // axisX: {
        //     offset: 30,
        // },
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0,
        }),
        high: 10,
        chartPadding: {
            left: 0, bottom: 0, top: 0, right: 0
        },
        // animation
        animation: {
            draw: function (d) {
                if (d.type === "line" || d.type === "area"){
                    d.element.animate({
                        d: {
                            begin: 600,
                            dur: 700,
                            from: d.path.clone().scale(1,0).translate(0, d.chartRect.height()).stringify(),
                            to: d.path.clone().stringify(),
                            easing: Chartist.Svg.Easing.easeOutQuint,
                        }
                    })
                } else {
                    d.element.animate({
                        opacity: {
                            begin: (d.index +1) * 80,
                            dur: 500,
                            from: 0,
                            to: 1,
                            easing: "ease"
                        }
                    })
                }
            }
        }
    }
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
                    <Divider />
                </Grid>
                <Divider />
                <div className={classes.chart}>
                    <Typography className={classes.subtitle} style={{marginBottom: -32,}}>Overall activity</Typography>
                    <ChartistGraph className={"ct-chart"} type={"Line"} data={data} options={options} listener={options.animation} />
                </div>
            </CardContent>
        </Card>
    )
}

export default PeopleViewedCardList