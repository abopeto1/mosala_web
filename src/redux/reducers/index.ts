// @ts-ignore
import { combineReducers } from 'redux';
import getByIdReducer from './byId';
import getReadIdsReducer from './read';
import getUpdateIdsReducer from './update';
import getDeleteIdsReducer from './delete';
import getToggleIdsReducer from './toggle';
import getCreateIdsReducer from './create';

export interface ISubReducer{
    byId: any
    createIds: any
    readIds: any
    updateIds: any
    deleteIds: any
    toggleIds: any
}

const getReducers = (reducerName: string) => (
  combineReducers({
    byId: getByIdReducer(reducerName),
    createIds: getCreateIdsReducer(reducerName),
    readIds: getReadIdsReducer(reducerName),
    updateIds: getUpdateIdsReducer(reducerName),
    deleteIds: getDeleteIdsReducer(reducerName),
    toggleIds: getToggleIdsReducer(reducerName),
  })
);

const entities = combineReducers({
    job: getReducers('job'),
    user: getReducers('user'),
});

const reducers = combineReducers({
  entities,
});

export default reducers;
