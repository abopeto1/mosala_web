import Header from "../components/Navbar/Header";
import React, {Fragment, useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import appStyle from "../assets/jss/layout/appStyle";
import CssBaseline from "@material-ui/core/CssBaseline";
import PerfectScrollbar from "perfect-scrollbar";
import Login from "../views/Login/Login";

type Props = {
    path: string;
    children: JSX.Element | JSX.Element[];
    getUser: (o?: any) => void
}

let ps: PerfectScrollbar
// @ts-ignore
const useStyles = makeStyles(appStyle)

export const UserContext = React.createContext<any>({})

export const App: React.VoidFunctionComponent<Props> = ({children, getUser}: Props) => {
    // const [open, setOpen] = useState(false)
    const classes = useStyles()
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.currentUser))

    // get_current_user
    useEffect(() => {
        getUser({
            onSuccess: (r: any) => {
                localStorage.currentUser = JSON.stringify(r)
                setCurrentUser(r)
            },
            onFail: (e: any) => console.log(e)
        })
    }, [])

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
            <UserContext.Provider value={{ currentUser, setCurrentUser }} >
                {
                    currentUser ? (
                        <Fragment>
                            <Header />
                            <div style={{paddingTop: "54px",}} >
                                {/*{switchRoutes(appRoutes)}*/}
                                {children}
                            </div>
                        </Fragment>
                    ) : (
                        <Login />
                    )
                }
            </UserContext.Provider>
        </div>
  );
}
