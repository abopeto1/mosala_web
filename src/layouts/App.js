import Header from "../components/Navbar/Header";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import appStyle from "../assets/jss/layout/appStyle";
import {Container} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(appStyle)

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <CssBaseline />
            <Header />
            <Container style={{paddingTop: "200px",}}>container</Container>
        </div>
  );
}

export default App;
