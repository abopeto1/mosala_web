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
import {Theme} from "@material-ui/core";

const profileStyle = (theme: Theme) => ({
    root: {
        'flex-grow': 1,
    },
    // paper: {
    //     "text-align": 'center',
    //     color: theme.palette.text.secondary,
    //     'padding-bottom': theme.spacing(2),
    // },
    // image: {
    //     width: "100%",
    //     'padding-bottom': "100%",
    //     height: 0,
    // },
    // profileTitle: {
    //     ...title,
    //     'font-weight': 400,
    //     color: blackColor,
    //     'margin-top': theme.spacing(1),
    //     'margin-bottom': 0,
    //     'font-size': "1rem",
    // },
    stats: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
        "& .number": {
            color: blueColor[1],
        }
    },
    // profileFunction: {
    //     ...title,
    //     "font-size": ".8rem",
    //     'margin-top': 0,
    //     'margin-bottom': theme.spacing(1),
    //     color: grayColor[0]
    // },
    // statsDivided: {
    //     padding: theme.spacing(2),
    //     flexGrow: 2,
    // },
})

export default profileStyle
