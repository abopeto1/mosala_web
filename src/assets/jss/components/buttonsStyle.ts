/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Date 2021-06-25
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {Theme} from "@material-ui/core";
import {whiteColor} from "../mosala-web";

export const buttonsStyle = (theme: Theme) => ({
    root: {
        boxShadow: 'none',
        'text-transform': 'none',
        padding: '6px',
        lineHeight: 1.5,
        fontSize: theme.spacing(4),
        fontFamily: [
            'Gotham',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    containedPrimary: {
        color: whiteColor,
        backgroundColor: '#0a66c2',
        '&:hover': {
            backgroundColor: '#00a0dc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#8b5bdc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
    containedSecondary: {
        color: whiteColor,
        backgroundColor: '#ff7400',
        '&:hover': {
            backgroundColor: '#ec4339',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#ec4339',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    }
})