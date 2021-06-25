/**
 * Higher order component for reading a single entity
 */

/* Dependencies */
import {connect} from 'react-redux';

/* Actions */
import { readEntity } from '../../../../redux/actions';

/* Selectors */
import { selectEntity, selectReadEntityStatus } from '../../../../redux/selectors';
import {Dispatch} from "react";

const Container: ({children, ...rest}: { children: any; [p: string]: any }) => any = ({ children, ...rest }) => children(rest);

const mapStateToProps = (state: any, ownProps: IEntityProps) => ({
  entity: selectEntity(state, ownProps.entityName, ownProps.id),
  status: selectReadEntityStatus(state, ownProps.entityName, ownProps.id),
});

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: IEntityProps) => ({
  read(options?: any) {
    dispatch(
      readEntity(ownProps.entityName, ownProps.id, options),
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
