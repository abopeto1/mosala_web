/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {blackColor, blueColor, grayColor, title} from "../mosala-web";

const profileStyle = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        paddingBottom: theme.spacing(2),
    },
    image: {
        width: "100%",
        paddingBottom: "100%",
        height: 0,
    },
    profileTitle: {
        ...title,
        fontWeight: 600,
        color: blackColor,
        marginTop: theme.spacing(1),
        marginBottom: 0,
        fontSize: "1rem",
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
    profileFunction: {
        ...title,
        fontSize: ".8rem",
        marginTop: 0,
        marginBottom: theme.spacing(1),
        color: grayColor[0]
    },
    statsDivided: {
        padding: theme.spacing(2),
        flexGrow: 2,
    },
})

export default profileStyle