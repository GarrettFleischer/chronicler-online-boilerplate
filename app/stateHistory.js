import { fromJS } from 'immutable';

export const UNDO = 'app/UNDO';
export const REDO = 'app/REDO';

export function undo(changes = 1) {
  return {
    type: UNDO,
    payload: changes,
  };
}

export function redo(changes = 1) {
  return {
    type: REDO,
    payload: { changes },
  };
}


export default function history(reducer) {
  return function historyReducer(state = initialState, action) {
    const jstate = state.toJS();
    const { past, present, future, canUndo, canRedo } = jstate;

    let newPast = past;
    let newPresent = present;
    let newFuture = future;
    let newCanUndo = canUndo;
    let newCanRedo = canRedo;

    switch (action.type) {
      case UNDO:
        if (canUndo) {
          newPresent = past[past.length - 1];
          newPast = past.slice(0, past.length - 1);
          newCanUndo = newPast.length > 1;
          newFuture = [present, ...future];
          newCanRedo = true;
        }
        break;

      case REDO:
        if (canRedo) {
          newPresent = future[0];
          newPast = [...past, present];
          newCanUndo = true;
          newFuture = future.slice(1);
          newCanRedo = newFuture.length > 0;
        }
        break;

      default:
        newPresent = reducer(state.get('present'), action);
        if (newPresent === state.get('present')) {
          return state;
        }
        newPast = [...past, present];
        newCanUndo = true;
        newFuture = [];
        newCanRedo = false;
        break;
    }

    return fromJS({
      past: newPast,
      present: newPresent,
      future: newFuture,
      canUndo: newCanUndo,
      canRedo: newCanRedo,
    });
  };
}


const initialState = fromJS({ past: [], present: {}, future: [], canUndo: false, canRedo: false });
