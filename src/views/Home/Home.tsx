/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {Container, Toolbar} from "@material-ui/core";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import homeStyle from "../../assets/jss/views/homeStyle";
import HomeMenu from "../../components/Navbar/HomeMenu";
import Feed from "./Feed";
import Jobs from "./Jobs";
import {TabsContent} from "../../components/Tabs/TabsContent";
import {RouteComponentProps} from "@reach/router";

const useStyles = makeStyles(homeStyle)

const Home = (props: RouteComponentProps) => {
    const classes = useStyles()
    const [value, setValue] = useState("feed")

    return (
        <div>
            <Toolbar className={classes.toolbar}>
                <HomeMenu value={value} setValue={(v: string) => setValue(v)} />
            </Toolbar>
            <Container>
                <TabsContent value={value} index={"feed"}>
                    <Feed />
                </TabsContent>
                <TabsContent value={value} index={"jobs"}>
                    <Jobs />
                </TabsContent>
                <TabsContent value={value} index={"trending"}>
                    <span>Trending</span>
                </TabsContent>
                <TabsContent value={value} index={"discover"}>
                    <span>Discover</span>
                </TabsContent>
            </Container>
        </div>
    )
}

export default Home