/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
    grid: {
        margin: "0 -15px !important",
        width: "unset",
    },
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <Grid container {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

GridContainer.propTypes = {
    children: PropTypes.node,
};