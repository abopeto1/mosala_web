/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {Toolbar} from "@material-ui/core";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import homeStyle from "../../assets/jss/views/homeStyle";
import HomeMenu from "../../components/Navbar/HomeMenu";
import HomeContent from "./HomeContent";
import Feed from "./Feed";

const useStyles = makeStyles(homeStyle)

const Home = () => {
    const classes = useStyles()
    const [value, setValue] = useState("feed")

    return (
        <div>
            <Toolbar className={classes.toolbar}>
                <HomeMenu value={value} setValue={v => setValue(v)} />
            </Toolbar>
            <HomeContent value={value} index={"feed"}>
                <Feed />
            </HomeContent>
            <HomeContent value={value} index={"jobs"}>
                Jobs
            </HomeContent>
            <HomeContent value={value} index={"trending"}>
                Trending
            </HomeContent>
            <HomeContent value={value} index={"discover"}>
                Discover
            </HomeContent>
        </div>
    )
}

export default Home