/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
const profileStyle = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    profileTitle: {
        textTransform: "capitalize",
        fontWeight: 600,
    },
    divider: {
        margin: "0 -16px",
    },
    largeAvatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    stats: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "& .number": {
            fontWeight: 600,
        }
    },
    statsDivided: {
        padding: theme.spacing(2),
        flexGrow: 2,
    }
})

export default profileStyle