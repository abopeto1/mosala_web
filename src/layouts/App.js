import Header from "../components/Navbar/Header";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import appStyle from "../assets/jss/layout/appStyle";

const useStyles = makeStyles(appStyle)

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <Header />
            <div>containr</div>
        </div>
  );
}

export default App;
