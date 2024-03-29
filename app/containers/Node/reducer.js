/*
 *
 * Node reducer
 *
 */

import { fromJS } from 'immutable';


export const ADD_COMPONENT = 'app/Node/ADD_COMPONENT';
export const REORDER_COMPONENT_LIST = 'app/Node/REORDER_COMPONENT_LIST';

export default function nodeReducer(state = initialState, action, currentUid) {
  switch (action.type) {
    case ADD_COMPONENT:
      return state.push(fromJS({ ...action.payload.component, id: currentUid }));

    case REORDER_COMPONENT_LIST:
      return fromJS(action.payload.list);

    default:
      return state;
  }
}


export function componentListChanged(list) {
  return {
    type: REORDER_COMPONENT_LIST,
    payload: { list },
  };
}


export function addComponent(component) {
  return {
    type: ADD_COMPONENT,
    payload: { component },
  };
}


export const initialState = fromJS({ components: [] });
