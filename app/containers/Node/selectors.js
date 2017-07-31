import { List } from 'immutable';
import { createSelector } from 'reselect';


/**
 * Direct selector to the node state domain
 */
const selectNodeDomain = (state) => state.getIn(['base', 'present', 'node'], List());
const selectHistoryDomain = (state) => state.get('base');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Node
 */

const makeSelectNode = () => createSelector(
  selectNodeDomain,
  selectHistoryDomain,
  (node, history) => ({
    node: node.toJS(),
    history: { canUndo: history.get('canUndo'), canRedo: history.get('canRedo') },
  }),
);

export default makeSelectNode;
export {
  selectNodeDomain,
};
