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

type TabsContentProps = {
    value: string;
    index: string|number;
    children: any; // JSX.Element | JSX.Element[] | undefined
}

export const TabsContent: React.VFC<TabsContentProps> = (props) => {
    const {children, value, index} = props

    return (
        <div
            role={"tabpanel"}
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tabpanel-${index}`}
        >
            {
                value === index && children
            }
        </div>
    )
}