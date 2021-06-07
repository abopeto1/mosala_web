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
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Tab, Tabs} from "@material-ui/core";
import homeMenuStyle from "../../assets/jss/components/homeMenuStyle";

const useStyles = makeStyles(homeMenuStyle)

const homeMenu = [
    {
        name: "Feed",
    },
    {
        name: "Jobs",
    },
    {
        name: "Trending",
    },
    {
        name: "Discover",
    },
]

const HomeMenu = (props) => {
    const {value, setValue} = props
    const classes = useStyles()

    const handleChange = (e, newValue) => setValue(newValue)

    return (
        <Tabs value={value} onChange={handleChange} className={classes.root} classes={{
            indicator: classes.indicator
        }}>
            {
                homeMenu.map((menu, key) => (
                    <Tab label={menu.name} key={key} className={classes.option} value={menu.name.toLowerCase()} />
                ))
            }
        </Tabs>
    )
}

export default HomeMenu