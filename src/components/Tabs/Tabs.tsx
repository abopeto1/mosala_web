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

import React, {ChangeEvent} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Tab, Tabs} from "@material-ui/core";
import homeMenuStyle from "../../assets/jss/components/homeMenuStyle";

type AppTabsProps = {
    width: "standard" | "fullWidth" | "scrollable";
    value: string;
    setValue: (newValue: string) => void;
    options: Array<{
        name: string;
        icon?: any;
    }>;
}

const useStyles = makeStyles(homeMenuStyle)

const AppTabs = ({width = "standard", ...props}: AppTabsProps) => {
    const {value, setValue, options} = props
    const classes = useStyles()

    const handleChange = (e: ChangeEvent<{}>,newValue: string) => setValue(newValue)

    return (
        <Tabs
            value={value} variant={width}
            onChange={handleChange}
            className={classes.root}
            classes={{
                indicator: classes.indicator
            }}
        >
            {
                options.map((menu, key) => (
                    <Tab icon={menu.icon && <menu.icon />} label={menu.name} key={key} className={classes.option} value={menu.name.toLowerCase()} />
                ))
            }
        </Tabs>
    )
}

export default AppTabs