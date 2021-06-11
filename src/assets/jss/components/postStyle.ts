/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Date 2021-06-08
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {Theme} from "@material-ui/core";
import {blackColor} from "../mosala-web";

export const postStyle = (theme: Theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    paddingHorizontal: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(0.5),
    },
    feedback: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        "& svg": {
            marginRight: theme.spacing(1),
        }
    },
    name: {
        fontWeight: 600,
        color: blackColor,
        marginTop: 0,
        marginBottom: 0,
        fontSize: "1rem",
    },
    textContent: {
        color: "rgba(0,0,0,0.9)",
    }
})