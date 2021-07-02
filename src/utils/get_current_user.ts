/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Date 2021-06-27
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import axios from "axios";

export const get_current_user = () => {
    const url = `${process.env.REACT_APP_API_URL}users/me/`;

    // const headers = method === 'GET'
    //     ? {}
    //     : {
    //         'Content-Type': 'application/json',
    //     };

    const config = {
        method: 'GET',
        // data: {token: localStorage.access_token},
        url,
    };

    // @ts-ignore
    return axios.request(config)
        .then(response => response.data);
}