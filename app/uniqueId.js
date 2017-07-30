import { Map } from 'immutable';

export function acquireUid(state) {
  const jstate = state.toJS();
  const released = state.get('released');
  if (released.peek()) {
    return Map({ ...jstate, uid: released.peek(), released: released.pop() });
  }

  const nextGuid = state.get('guid') + 1;
  return Map({ ...jstate, guid: nextGuid, uid: nextGuid });
}

export function releaseUid(state, uid) {
  return Map({ ...state.toJS(), released: state.get('released').push(uid) });
}

export function currentUid(state) {
  return state.get('uid');
}
