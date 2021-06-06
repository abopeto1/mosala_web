/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {blueGradient} from "../mosala-web";

const homeMenuStyle = theme => ({
    indicator: {
        backgroundImage: blueGradient,
        height: theme.spacing(.5)
    },
    option: {
        minWidth: 96,
        "& .MuiTab-wrapper": {
            marginBottom: theme.spacing(2)
        },
        "& .Mui-selected .MuiTab-wrapper": {
            fontWeight: 600,
            background: "blue"
        }
    }
})

export default homeMenuStyle