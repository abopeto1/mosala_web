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

import {schema} from "normalizr";
import {ISchema} from "../index";

// interface INormalizrSchema {
//     job: any;
//     user: any;
// }

/**
 * Returns the plural of an entity name
 */
const pluralizeEntityName = ( key: string, plural?: string): string => (
    plural || `${key}s`
);

/**
 * Computes entity.define({ ... }) for normalizr library
 */
const getDefinition = (definitions: Array<any>, entities: any) => (
    definitions.reduce((result, definition) => {
        if (typeof definition === 'object') {
            const key = Object.keys(definition)[0];
            const value = definition[key];
            return { ...result, [key]: entities[value] };
        }
        return { ...result, [definition]: entities[definition] };
    }, {})
);

/**
 * Compute schema using normalizr Entity and Array
 **/
export const computeSchema = (userSchema: ISchema) => {
    const entities = Object.keys(userSchema).reduce((result, key) => {
        const keySchema = userSchema[key as keyof ISchema]
        const entitySchema = new schema.Entity(key)
        const entitiesSchema = new schema.Array(entitySchema)
        const pluralKey = pluralizeEntityName(key, keySchema.plural)
        return { ...result, [key]: entitySchema, [pluralKey]: entitiesSchema}
    }, {})

    Object.keys(userSchema).forEach((key) => {
        const keySchema = userSchema[key as keyof ISchema]
        const definition = getDefinition(keySchema.define, entities)
        // @ts-ignore
        entities[key].define(definition)
    })

    return entities
}