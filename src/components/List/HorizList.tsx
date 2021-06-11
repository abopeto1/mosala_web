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
import React, {useEffect, useRef} from "react";
import {Button} from "@material-ui/core";
import PerfectScrollbar from "perfect-scrollbar";

let ps

const useStyles = makeStyles(listStyle)

export const HorizList = () => {
    const classes = useStyles()
    const panel = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1){

            // @ts-ignore
            ps = new PerfectScrollbar(panel.current, {
                suppressScrollX: false,
                suppressScrollY: true
            })
            document.body.style.overflow = "hidden"
        }
    }, [panel])
    return (
        <div className={classes.container} ref={panel}>
                <ul className={classes.hs+ " full "  + classes.noScrollbar }>
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