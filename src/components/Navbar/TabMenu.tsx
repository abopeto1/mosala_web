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

export type Menu = {
    name: string;
    component?: JSX.Element | string;
}

type Props = {
    menus: Array<Menu>;
    value: string;
    setValue: (e: string) => void;
}

const TabMenu = (props: Props) => {
    const {value, setValue, menus} = props
    const classes = useStyles()

    const handleChange = (e: React.ChangeEvent<{}>, newValue: string) => setValue(newValue)

    return (
        <Tabs value={value} onChange={handleChange} className={classes.root} classes={{
            indicator: classes.indicator
        }}>
            {
                menus.map((menu, key) => (
                    <Tab label={menu.name} key={key} className={classes.option} value={menu.name.toLowerCase()} />
                ))
            }
        </Tabs>
    )
}

export default TabMenu