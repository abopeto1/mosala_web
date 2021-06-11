/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Date 2021-06-10
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {Theme} from "@material-ui/core";
import {blackColor, grayColor} from "../mosala-web";

const jobsStyle = (theme: Theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    content: {
        padding: theme.spacing(2),
    },
    headTitle: {
        fontWeight: 600,
        color: blackColor,
        marginTop: theme.spacing(1),
        marginBottom: 0,
        fontSize: "1rem",
    },
    subTitle: {
        fontSize: ".8rem",
        marginTop: 0,
        marginBottom: theme.spacing(1),
        color: grayColor[0],
        "margin-bottom": theme.spacing(2)
    },
})

export default jobsStyle