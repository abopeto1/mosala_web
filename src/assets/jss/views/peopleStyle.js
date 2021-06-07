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

const peopleStyle = theme => ({
    cardContent: {
        padding: 0,
    },
    stats: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        "& .title": {
            color: grayColor[1],
        },
        "& .number": {
            color: blueColor[1],
            fontSize: '1.2rem'
        },
    },
    title: {
        ...title,
        fontWeight: 600,
        color: blackColor,
        marginTop: 0,
        marginBottom: 0,
        fontSize: "1rem",
    }
})

export default peopleStyle