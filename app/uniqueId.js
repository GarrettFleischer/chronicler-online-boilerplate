import { fromJS, Map, Stack } from 'immutable';
import { ADD_COMPONENT } from './containers/Node/reducer';

/*
 * Guid Reducer
 *
 * The reducer updates guid for adding and removing elements
 *
 */
export default function guidReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMPONENT:
      return acquireUid(state);
    default:
      return state;
  }
}


export function acquireUid(state) {
  const guid = state.get('guid');
  const released = Stack(state.get('released'));
  if (released.peek()) {
    return Map({ guid, uid: released.peek(), released: released.pop() });
  }

  const nextGuid = guid + 1;
  return Map({ guid: nextGuid, uid: nextGuid, released });
}


export function releaseUid(state, uid) {
  return Map({ ...state.toJS(), released: state.get('released').push(uid) });
}


export function currentUid(state) {
  return state.get('uid');
}


export const initialState = fromJS({ guid: 0, uid: 0 });
