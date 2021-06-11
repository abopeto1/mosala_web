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
    root:{},
    indicator: {
        backgroundImage: blueGradient,
        height: theme.spacing(.5)
    },
    option: {
        minWidth: 96,
        "& .MuiTab-wrapper": {
            marginBottom: theme.spacing(0),
            display: "flex",
            alignContent:"center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignItems: "center",
            textTransform: "none",
            fontSize: "1rem"
        },
        "&.Mui-selected .MuiTab-wrapper": {
            fontWeight: 600,
        },
        // "&.Mui-selected .MuiSvgIcon-root": {
        //     color: blueGradient,
        //     "-webkit-background-clip": "text",
        //     "-webkit-text-fill-color": "transparent",
        //     backgroundSize: "100%",
        //     backgroundRepeat: "repeat",
        // }
    }
})

export default homeMenuStyle