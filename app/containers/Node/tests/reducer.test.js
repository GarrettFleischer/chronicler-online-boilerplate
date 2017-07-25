import { fromJS } from 'immutable';
import nodeReducer from '../reducer';


describe('nodeReducer', () => {
  it('returns the initial state', () => {
    expect(nodeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
