/*!
=========================================================
* mosala_web - v1.0.0
=========================================================
* Date 2021-06-13
* Copyright 2021
* Coded by Arnold Bopeto
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {combineReducers} from "redux";
import getByIdReducer from './byId'

const getReducers = (reducerName: string) => (
    combineReducers({
        byId: getByIdReducer(reducerName),
        // createIds: getCreateIdsReducer(reducerName),
        // readIds: getReadIdsReducer(reducerName),
        // updateIds: getUpdateIdsReducer(reducerName),
        // deleteIds: getDeleteIdsReducer(reducerName),
        // toggleIds: getToggleIdsReducer(reducerName)
    })
)

const entities = combineReducers({
    user: getReducers('user'),
    job: getReducers('job'),
})

const reducers = combineReducers({
    entities,
})

export default reducers