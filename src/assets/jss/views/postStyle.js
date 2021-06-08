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
import {grayColor} from "../mosala-web";

export const postStyle = theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        "& .main-placeholder": {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            color: grayColor[0],
            fontWeight: 200,
        }
    },
})