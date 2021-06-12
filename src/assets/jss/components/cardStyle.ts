/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Date 2021-06-09
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {blackColor, blueColor, grayColor, title} from "../mosala-web";

const cardStyle = (theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    headerRoot: {
        padding: 0,
    },
    title: {
        ...title,
        fontWeight: 600,
        color: blackColor,
        marginTop: 0,
        marginBottom: 0,
        fontSize: "1rem",
    },
    content: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    paper: {
        "text-align": 'center',
        color: theme.palette.text.secondary,
        paddingBottom: theme.spacing(2),
    },
    image: {
        width: "100%",
        paddingBottom: "100%",
        height: 0,
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
        color: grayColor[0]
    },
    company:{
        color: blueColor[0],
        fontWeight: 600,
        fontSize: ".85rem"
    },
    jobInfos: {
        display: "flex",
        "flex-direction": "column",
    },
    smallAvatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    jobCard: {
        padding: theme.spacing(2),
        "& hr": {
            "margin-right": "50%",
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        }
    },
    cardMedia: {
        width: 450,
    },
    companyCardMedia: {
        height: 250,
    }
})

export default cardStyle