import Header from "../components/Navbar/Header";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import appStyle from "../assets/jss/layout/appStyle";
import CssBaseline from "@material-ui/core/CssBaseline";
import PerfectScrollbar from "perfect-scrollbar";

type Props = {
    path: string;
    children: JSX.Element | JSX.Element[];
}

let ps: PerfectScrollbar
// @ts-ignore
const useStyles = makeStyles(appStyle)

export const App: React.VoidFunctionComponent<Props> = ({children}: Props) => {
    const classes = useStyles()

    console.log(children)
    const mainPanel = React.createRef<HTMLDivElement>();

    // initialize and destroy the PerfectScrollbar plugin
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            // @ts-ignore
            ps = new PerfectScrollbar(mainPanel.current, {
                suppressScrollX: true,
                suppressScrollY: false,
            });
            document.body.style.overflow = "hidden";
        }

        // Specify how to clean up after this effect:
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
            }
        };
    }, [mainPanel]);

    return (
        <div className={classes.wrapper} ref={mainPanel}>
            <CssBaseline />
            <Header />
            <div style={{paddingTop: "64px",}} >
                {/*{switchRoutes(appRoutes)}*/}
                {children}
            </div>
        </div>
  );
}
