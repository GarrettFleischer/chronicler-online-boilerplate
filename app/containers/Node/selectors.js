import { List } from 'immutable';
import { createSelector } from 'reselect';
import { makeText } from '../../components/Component/types';


/**
 * Direct selector to the node state domain
 */
const selectNodeDomain = (state) => state.getIn(['base', 'present', 'node'], List([makeText('error')]));

/**
 * Other specific selectors
 */


/**
 * Default selector used by Node
 */

const makeSelectNode = () => createSelector(
  selectNodeDomain,
  (substate) => substate.toJS(),
);

export default makeSelectNode;
export {
  selectNodeDomain,
};
