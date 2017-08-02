import { fromJS, is } from 'immutable';


export const UNDO = 'app/UNDO';
export const REDO = 'app/REDO';

export default function history(reducer) {
  return function historyReducer(state = initialState, action) {
    const { past, present, future, canUndo, canRedo } = state.toJS();

    let newPast = past;
    let newPresent = present;
    let newFuture = future;
    let newCanUndo = canUndo;
    let newCanRedo = canRedo;

    switch (action.type) {
      case UNDO:
        for (let i = 0; i < action.payload.changes; i += 1) {
          if (!newCanUndo) {
            return state;
          }

          newFuture = [newPresent, ...newFuture];
          newPresent = newPast[past.length - 1];
          newPast = newPast.slice(0, past.length - 1);
          newCanUndo = newPast.length > 0;
          newCanRedo = true;
        }
        break;

      case REDO:
        for (let i = 0; i < action.payload.changes; i += 1) {
          if (!newCanRedo) {
            return state;
          }

          newPast = [...newPast, newPresent];
          newPresent = newFuture[0];
          newFuture = newFuture.slice(1);
          newCanUndo = true;
          newCanRedo = newFuture.length > 0;
        }
        break;

      default:
        newPresent = reducer(state.get('present'), action);
        if (is(newPresent, state.get('present'))) {
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


export function undo(changes = 1) {
  return {
    type: UNDO,
    payload: { changes },
  };
}


export function redo(changes = 1) {
  return {
    type: REDO,
    payload: { changes },
  };
}


export const initialState = fromJS({ past: [], present: {}, future: [], canUndo: false, canRedo: false });
