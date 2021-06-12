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
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import appMenuStyle from "../../assets/jss/components/appMenuStyle";
import MenuList from "@material-ui/core/MenuList";
import {
    DashboardOutlined, MessageOutlined, NotificationsOutlined, PeopleOutlineOutlined,
    SettingsOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles(appMenuStyle)

const menus = [
    {
        title: "My Network",
        icon: PeopleOutlineOutlined,
        path: "/network",
    },
    {
        title: "Messages",
        icon: MessageOutlined,
        path: "/messages"
    },
    {
        title: "Jobs",
        icon: NotificationsOutlined,
    },
    {
        title: "Messaging",
        icon: SettingsOutlined,
    },
    {
        title: "Notifications",
        icon: DashboardOutlined,
    },
]
const AppMenu = () => {
    const classes = useStyles()

    return (
        <MenuList className={classes.root}>
            {
                menus.map((menu, key) => (
                    <MenuItem className={classes.menuItem} key={key}>
                        <menu.icon className={classes.icon}/>
                        {/*{menu.title}*/}
                    </MenuItem>
                ))
            }
        </MenuList>
    )
}

export default AppMenu