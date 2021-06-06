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
    container,
    defaultFont,
    primaryColor,
    defaultBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    whiteColor,
    grayColor,
} from "assets/jss/mosala-web";

const headerStyle = () => ({
    appBar: {
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "0",
        marginBottom: "0",
        width: "100%",
        // paddingTop: "10px",
        zIndex: "1029",
        color: grayColor[7],
        border: "0",
        // borderRadius: "3px",
        // padding: "0 0 10px 0",
        transition: "all 150ms ease 0s",
        minHeight: "50px",
        display: "block",
    },
    container: {
        ...container,
        minHeight: "50px",
    },
    flex: {
        flex: 1,
    },
    flexEnd: {
        justifyContent: "flex-end"
    },
    flexCenter: {
        justifyContent: "center"
    },
    displayFlex:{
        display: "flex"
    },
    title: {
        ...defaultFont,
        letterSpacing: "unset",
        lineHeight: "30px",
        fontSize: "14px",
        borderRadius: "3px",
        textTransform: "none",
        color: "white",
        margin: "0",
        "&:hover,&:focus": {
            background: "transparent",
        },
        padding: 0,
    },
    appResponsive: {
        top: "8px",
    },
    primary: {
        backgroundColor: primaryColor[0],
        color: whiteColor,
        ...defaultBoxShadow,
    },
    info: {
        backgroundColor: infoColor[0],
        color: whiteColor,
        ...defaultBoxShadow,
    },
    success: {
        backgroundColor: successColor[0],
        color: whiteColor,
        ...defaultBoxShadow,
    },
    warning: {
        backgroundColor: warningColor[0],
        color: whiteColor,
        ...defaultBoxShadow,
    },
    danger: {
        backgroundColor: dangerColor[0],
        color: whiteColor,
        ...defaultBoxShadow,
    },
});

export default headerStyle;