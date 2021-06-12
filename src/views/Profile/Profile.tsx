/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, {useEffect, useState} from "react";
import {RouteComponentProps} from "@reach/router";
import {Container, Toolbar} from "@material-ui/core";
import {TabsContent} from "../../components/Tabs/TabsContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import homeStyle from "../../assets/jss/views/homeStyle";
import TabMenu, {Menu} from "../../components/Navbar/TabMenu";
import ProfileHome from "./ProfileHome";

const useStyles = makeStyles(homeStyle)

export const Profile: React.VFC<RouteComponentProps> = () => {
    const classes = useStyles()
    const [value, setValue] = useState<string>("profile")

    useEffect(() => {
        document.title = "Mosala | Profile"
    })

    const menus: Array<Menu> = [
        {
            name: "Profile",
            component: <ProfileHome />,
        },
        {
            name: "Update",
        },
        {
            name: "Dashboard",
        },
    ]

    return (
        <div>
            <Toolbar className={classes.toolbar}>
                <TabMenu menus={menus} value={value} setValue={(v: string) => setValue(v)} />
            </Toolbar>
            <Container>
                {
                    menus.map((menu, key) => {
                        return (
                            <TabsContent value={value} index={menu.name.toLowerCase()} key={key}>
                                {menu.component}
                            </TabsContent>
                        )
                    })
                }
            </Container>
        </div>
    )
}