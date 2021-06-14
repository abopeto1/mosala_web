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

import {addCreatedChildEntityToParent, ReducerAction} from "./helpers";

const byId = (entityName: string) => (
    state = {},
    action: ReducerAction) => {
    if (!action.type.startsWith('SUCCESS_')){
        return state
    }

    const { type, meta: { parentName }, payload: {result}} = action

    /**
     * If parent name from action is the entity name and create operation is success
     * add the created entity child to this entity
     */
    if (parentName === entityName && type.includes('SUCCESS_CREATE_')) {
        return addCreatedChildEntityToParent(state, action, entityName)
    }

    /**
     * If delete operation successes and parent of entityName is this entity,
     * remove the deleted entity in this entity children
     */
    // if (action.type.startsWith('SUCCESS_DELETE_') && parentOf(entityName).includes(action.meta.entityName)){
    //     return removeDeletedChildFromParent(state, action, entityName)
    // }
    //
    // if (type.startsWith('SUCCESS_ADD_') && parentName === entityName) {
    //     return addChildToParent(state, action, entityName)
    // }
    //
    // if(type.startsWith('SUCCESS_REMOVE_') && parentName === entityName) {
    //     return removeChildFromParent(state, action, entityName)
    // }
    //
    // if (result === null || result === undefined) {
    //     return state
    // }

    return mergeByIds(state, action.payload.entities[entityName])
}

export default byId