/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
    primaryColor,
    dangerColor,
    successColor,
    grayColor,
    defaultFont,
} from "assets/jss/mosala-web";

const customInputStyle = {
    disabled: {
        "&:before": {
            backgroundColor: "transparent !important",
        },
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderColor: grayColor[4] + " !important",
            borderWidth: "1px !important",
        },
        "&:after": {
            borderColor: primaryColor[0],
        },
    },
    underlineError: {
        "&:after": {
            borderColor: dangerColor[0],
        },
    },
    underlineSuccess: {
        "&:after": {
            borderColor: successColor[0],
        },
    },
    labelRoot: {
        ...defaultFont,
        color: grayColor[3] + " !important",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "1.42857",
        letterSpacing: "unset",
    },
    labelRootError: {
        color: dangerColor[0],
    },
    labelRootSuccess: {
        color: successColor[0],
    },
    feedback: {
        position: "absolute",
        top: "18px",
        right: "0",
        zIndex: "2",
        display: "block",
        width: "24px",
        height: "24px",
        textAlign: "center",
        pointerEvents: "none",
    },
    marginTop: {
        marginTop: "16px",
        borderColor: "white",
        fontSize: ".9rem",
    },
    formControl: {
        // paddingBottom: "10px",
        // margin: "27px 0 0 0",
        position: "relative",
        verticalAlign: "unset",
        borderColor: "white",
        // "& input":{
        //     borderColor: "white",
        // }
    },
    labelRTL: {
        right: 0,
        transition: "all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
        "&.MuiInputLabel-shrink": {
            transform: "translate(0, 1.5px)",
        },
    },
};

export default customInputStyle;