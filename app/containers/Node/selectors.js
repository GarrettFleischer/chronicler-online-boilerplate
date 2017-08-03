import { createSelector } from 'reselect';
import { FindById } from '../../core';


/**
 * Direct selector to the node state domain
 */
const selectModelDomain = (state) => state.getIn(['base', 'present', 'model']);
const selectViewDomain = (state) => state.getIn(['base', 'present', 'view']);
const selectHistoryDomain = (state) => state.get('base');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Node
 */

const makeSelectNode = () => createSelector(
  selectModelDomain,
  selectViewDomain,
  selectHistoryDomain,
  (model, view, history) => ({
    node: findNode(model, view.get('id')),
    history: { canUndo: history.get('canUndo'), canRedo: history.get('canRedo') },
  }),
);

export default makeSelectNode;
// export {
//   selectNodeDomain,
// };

function findNode(model, id) {
  const found = FindById(model, id);
  return found.toJS();
}
