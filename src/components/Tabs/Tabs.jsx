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
import PropTypes from 'prop-types'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Tab, Tabs} from "@material-ui/core";
import homeMenuStyle from "../../assets/jss/components/homeMenuStyle";

const useStyles = makeStyles(homeMenuStyle)

const AppTabs = ({width = "standard", ...props}) => {
    const {value, setValue, options} = props
    const classes = useStyles()

    const handleChange = (e, newValue) => setValue(newValue)

    return (
        <Tabs
            value={value} variant={width}
            onChange={handleChange}
            className={classes.root}
            classes={{
                indicator: classes.indicator
            }} {...props}
        >
            {
                options.map((menu, key) => (
                    <Tab icon={menu.icon && <menu.icon />} label={menu.name} key={key} className={classes.option} value={menu.name.toLowerCase()} />
                ))
            }
        </Tabs>
    )
}

AppTabs.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ),
    width: PropTypes.oneOf(["fullWidth", "standard", "scrollable"]),
}
export default AppTabs