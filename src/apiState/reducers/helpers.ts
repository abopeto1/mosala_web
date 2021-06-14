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

import {clone} from 'lodash'
import {entitiesSchema, ISchema} from "../";

export interface ReducerAction {
    type: string;
    meta: {
        parentName: string;
        parentId: string | number;
        entityName?: string;
    };
    payload: {
        result?: {},
        entities: any,
    };
}

export const mergeByIds = (state, entities) => {
    // When nested entity is empty in normalizr it does not appear under entities therefore
    // we need to check for undefined. Also if entities is null or empty just return state
    if (
        typeof entities === 'undefined'
        || entities == null
        || isEmpty(entities)
    ) {
        return state;
    }

    // Merge entities and state common keys as they might have different fields
    const mergedEntities = Object.keys(entities).reduce(
        (result, current) => {
            const item = clone(result);
            item[current] = current in state
                ? { ...state[current], ...entities[current] }
                : entities[current];
            return item;
        },
        {},
    );
    return { ...state, ...mergedEntities };
};

export const nameOfChildKey = (
    parentEntityName: string,
    childEntityName: string,
) => {
    const parentSchema = entitiesSchema[parentEntityName as keyof ISchema].schema;
    return Object.keys(parentSchema).find(
        /* eslint-disable-next-line */
        key => parentSchema[key].schema._key === childEntityName,
    );
};

export const addCreatedChildEntityToParent = (
    state: any,
    action: ReducerAction,
    entityName: string) => {
    const { parentName, parentId } = action.meta
    if (entityName === parentName) {
        if(!state[parentId]){
            return state
        }

        let stateWithUpdatedChildren: any
        const childKey = nameOfChildKey(entityName, action.meta.entityName)

        // OneToMany relation
        const childrenArray = parentId ? (state[parentId][childKey] || []) : []
        const updatedParentState = {
            ...state[action.meta.parentId], [childKey]: mergeWithArray(childrenArray, action.payload.result)
        }

        stateWithUpdatedChildren = {
            ...state, [action.meta.parentId]: updatedParentState,
        }

        return mergeByIds(stateWithUpdatedChildren, action.payload.entities[entityName])
    }

    return state
}

export const removeDeletedChildFromParent = (
    state,
    action,
    entityName,
) => Object.keys(state).reduce((result, key) => {
    const childKey = nameOfChildKey(entityName, action.meta.entityName);

    if (!state[key][childKey]) {
        return { ...result, [key]: state[key] };
    }

    // TODO: Write test. This is to reduce the number of count when deleting an entity.

    return {
        ...result,
        [key]: {
            ...state[key],
            [childKey]: state[key][childKey].filter(
                (id) => {
                    const { identifier } = action.meta;
                    if (Array.isArray(identifier)) {
                        return identifier.indexOf(id) === -1;
                    }
                    return id !== identifier;
                },
            ),
        },
    };
}, {});