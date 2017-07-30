/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import nodeReducer, { ADD_COMPONENT } from './containers/Node/reducer';
import { acquireUid, currentUid } from './uniqueId';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    base: baseReducer,
    ...asyncReducers,
  });
}

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});


/*
 * Base Reducer
 *
 * The reducer updates guid as necessary and passes the current uid to further reducers
 *
 */
function baseReducer(state = baseInitialState, action) {
  const jstate = state.toJS();

  const guid = guidReducer(state.get('guid'), action);
  const node = nodeReducer(state.get('node'), action, currentUid(guid));

  return fromJS({
    ...jstate,
    guid,
    node,
  });
}

const baseInitialState = fromJS({});


/*
 * Guid Reducer
 *
 * The reducer updates guid for adding and removing elements
 *
 */
function guidReducer(state = guidInitialState, action) {
  switch (action.type) {
    case ADD_COMPONENT:
      return acquireUid(state);
    default:
      return state;
  }
}

const guidInitialState = fromJS({});
