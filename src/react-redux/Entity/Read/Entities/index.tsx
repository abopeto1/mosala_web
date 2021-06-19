/**
 * Higher order component for reading multiple entities
 */

/* Dependencies */
import { connect } from 'react-redux';

/* Actions */
import { readEntities } from '../../../../redux/actions';

/* Selectors */
import { selectReadEntities, selectReadEntitiesStatus } from '../../../../redux/selectors';

interface IContainerProps {
  children: JSX.Element | JSX.Element[]
}

// @ts-ignore
const Container = ({ children, ...rest }: IContainerProps) => children(rest);

// @ts-ignore
const mapStateToProps = (state, ownProps) => ({
  entities: selectReadEntities(state, ownProps.entityName, ownProps.params),
  status: selectReadEntitiesStatus(state, ownProps.entityName, ownProps.params),
});

// @ts-ignore
const mapDispatchToProps = (dispatch, ownProps) => ({

// @ts-ignore
  read(options) {
    dispatch(
      readEntities(ownProps.entityName, ownProps.params, options),
    );
  },
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Container);