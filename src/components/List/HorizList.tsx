/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Created at 2021-06-10
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import makeStyles from "@material-ui/core/styles/makeStyles";
import {listStyle} from "../../assets/jss/components/listStyle";
import React from "react";
import {Button} from "@material-ui/core";

const useStyles = makeStyles(listStyle)

export const HorizList = () => {
    const classes = useStyles()

    return (
        <div className={classes.container} >
                <ul className={classes.hs+ " full "  + classes.noScrollbar } >
                    <li className={"item"}>
                        <Button variant={"outlined"}>All</Button>
                    </li>
                    <li className={"item"}>
                        <Button variant={"outlined"}>Design</Button>
                    </li>
                    <li className={"item"}>
                        <Button variant={"outlined"}>React</Button>
                    </li>
                    <li className={"item"}>
                        <Button variant={"outlined"}>IT</Button>
                    </li>
                    <li className={"item"}>
                        <Button variant={"outlined"}>Community Manager</Button>
                    </li>
                    <li className={"item"}>
                        <Button variant={"outlined"}>Design</Button>
                    </li>
                    <li className={"item"}>
                        <Button variant={"outlined"}>Design</Button>
                    </li>
                    <li className={"item"}>
                        <Button variant={"outlined"}>Design</Button>
                    </li>
                </ul>
            </div>
    )
}