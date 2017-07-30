import { createSelector } from 'reselect';


/**
 * Direct selector to the node state domain
 */
const selectNodeDomain = () => (state) => state.getIn(['base', 'node'], []);

/**
 * Other specific selectors
 */


/**
 * Default selector used by Node
 */

const makeSelectNode = () => createSelector(
  selectNodeDomain(),
  (substate) => substate.toJS(),
);

export default makeSelectNode;
export {
  selectNodeDomain,
};
