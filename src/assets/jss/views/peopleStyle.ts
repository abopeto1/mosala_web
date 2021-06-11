/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {blackColor, blueColor, goodBlackColor, grayColor, title} from "../mosala-web";
import {Theme} from "@material-ui/core";

const peopleStyle = (theme: Theme) => ({
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
            fontSize: '1.2rem',
        },
    },
    title: {
        ...title,
        fontWeight: 600,
        color: blackColor,
        marginTop: 0,
        marginBottom: 0,
        fontSize: ".95rem",
    },
    subtitle: {
        ...title,
        fontWeight: 400,
        color: grayColor[0],
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        fontSize: ".8rem",
    },
    chart: {
        "& .ct-area": {
            fill: "blue"
        },
        "& .ct-label": {
            color: grayColor[0],
            fontSize: ".8rem",
        },
        "& .ct-line": {
            stroke: blueColor[0],
            strokeWidth: 2,
        }
    },
    listItem: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    name: {
        fontWeight: 600,
        color: goodBlackColor,
        marginTop: 0,
        marginBottom: 0,
        fontSize: "1rem",
    },
    buttonGradient: {
        // overflow: "hidden",
        // borderImageSource: blueGradient,
        // borderImageSlice: 1,
        // borderWidth: "3px",
        // borderRadius: "4px",
        width: "100%",
        "& .MuiButton-label": {
            fontSize: ".7rem",
            color: blueColor[1],
            fontWeight: 600,
        }
    }
})

export default peopleStyle