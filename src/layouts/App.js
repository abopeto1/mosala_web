import Header from "../components/Navbar/Header";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import appStyle from "../assets/jss/layout/appStyle";
import CssBaseline from "@material-ui/core/CssBaseline";
import {switchRoutes} from "../utils/switchRoutes";
import {appRoutes} from "../routes";

const useStyles = makeStyles(appStyle)

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <CssBaseline />
            <Header />
            <div style={{paddingTop: "64px",}}>{switchRoutes(appRoutes)}</div>
        </div>
  );
}

export default App;
