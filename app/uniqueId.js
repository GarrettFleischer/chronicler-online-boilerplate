import { Map, Stack } from 'immutable';

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
