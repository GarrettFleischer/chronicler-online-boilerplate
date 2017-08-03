import { createSelector } from 'reselect';
import { FindById } from '../../core';


/**
 * Direct selector to the node state domain
 */
const selectBaseDomain = (state) => state.getIn(['base', 'current', 'base']);
const selectViewDomain = (state) => state.getIn(['base', 'current', 'view']);
const selectHistoryDomain = (state) => state.get('base');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Node
 */

const makeSelectNode = () => createSelector(
  selectBaseDomain,
  selectViewDomain,
  selectHistoryDomain,
  (base, view, history) => ({
    node: FindById(base, view.get('id')),
    history: { canUndo: history.get('canUndo'), canRedo: history.get('canRedo') },
  }),
);

export default makeSelectNode;
// export {
//   selectNodeDomain,
// };
