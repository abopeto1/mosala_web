/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, {Fragment} from "react";

export const switchRoutes = (routes) => {
    return (
        <Fragment>
            {
                routes.map((prop, key) => (
                    <prop.component path={prop.layout + prop.path} key={key} />
                ))
            }
        </Fragment>
    )
}