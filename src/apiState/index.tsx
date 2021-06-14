/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Created at 2021-06-13
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore, PreloadedState} from "redux";
import reducers from "./reducers";
import {computeSchema} from "./utils";

interface ISchemaProperty {
    define: Array<any>;
    plural?: string;
}

// Schema Interfaces
export interface ISchema {
    job: ISchemaProperty;
    user: ISchemaProperty;
}
// Add entities here
// define all nested relationship under the key

export const schema: ISchema = {
    job: {
        define: [{created_by: 'user'}], plural: 'jobs'
    },
    user: {
        define: ['jobs'], plural: 'users'
    },
}

export const entitiesSchema = computeSchema(schema)

const getStore = (initialState: PreloadedState<any>, options = { debug: false}) => {
    if(options.debug) {
        // const reduxLogger = createLogger({
        //     collapsed: true,
        // })
        // middlewares.push(reduxLogger)
        console.log('debug')
    }

    return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)))
}

export default getStore