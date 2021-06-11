/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {blueColor} from "../mosala-web";

const feedStyle = theme => ({
    column: {
        "& > div": {
            marginBottom: theme.spacing(3)
        }
    },
    stats: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
        "& .number": {
            color: blueColor[1],
        }
    },
})

export default feedStyle
