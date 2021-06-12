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
import {blackColor, grayColor, title} from "../mosala-web";

export const listStyle = (theme: Theme) => ({
    root: {},
    title: {
        ...title,
        fontWeight: 600,
        color: blackColor,
        marginTop: 0,
        marginBottom: 0,
        fontSize: ".95rem",
    },
    subTitle: {
        fontSize: ".8rem",
        marginTop: 0,
        marginBottom: theme.spacing(1),
        color: grayColor[0]
    },
    container: {
        display: "grid",
        gridGap: "20px 0",
        alignContent: "start",
        gridTemplateColumns: "20px 1fr 20px",
        "& > *": {
            gridColumn: "2 / -2",
        },
        "& > .full": {
            gridColumn: "1 / -1",
        },
        "& .item": {
            scrollSnapAlign: "center",
            padding: "calc(10px / 2 * 1.5)",
            display:"flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        "& ul":{
            listStyle: "none",
            padding: 0,
        }
    },
    hs: {
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "10px",
        // gridTemplateRows: "minmax(150px, 1fr)",
        gridAutoFlow: "column",
        // gridAutoColumns: "calc(50% - 20px * 2)",
        "overflow-x": "scroll",
        scrollSnapType: "x proximity",
        "&:before,&:after": {
            content: "no-open-quote",
            width: "10px",
        }
    },
    noScrollbar: {
        // "scrollbar-width": "none",
        // marginBottom: 0,
        // paddingBottom: 0,
        // "&::-webkit-scrollbar":{
        //     display: "none",
        // }
    },
    skillNote:{
        ...title,
        fontWeight: 600,
        color: blackColor,
        marginTop: 0,
        marginBottom: 0,
        fontSize: ".95rem",
        "&::before": {
            // eslint-disable-next-line no-octal-escape
            content: "'\\2022'",
            margin: "0 6px",
            color: grayColor[0],
        }
    }
})