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

export const postStyle = (theme: Theme) => ({
    root: {
        padding: theme.spacing(3)
    },
    paddingHorizontal: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    feedback: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    }
})