import { Map, Stack } from 'immutable';
import { acquireUid, currentUid, releaseUid } from '../uniqueId';

describe('Unique Id', () => {
  it('increments guid when released is empty', () => {
    const initialState = Map({
      guid: 5,
      uid: 2,
      released: Stack(),
    });

    const expected = Map({
      guid: 6,
      uid: 6,
      released: Stack(),
    });

    const result = acquireUid(initialState);

    expect(result.toJS()).toEqual(expected.toJS());
  });


  it('pops the last value off of released when it is not empty', () => {
    const initialState = Map({
      guid: 5,
      uid: 2,
      released: Stack.of(3, 4, 1),
    });

    const expected = Map({
      guid: 5,
      uid: 3,
      released: Stack.of(4, 1),
    });

    const result = acquireUid(initialState);

    expect(result.toJS()).toEqual(expected.toJS());
  });


  it('puts the released value on top of released', () => {
    const initialState = Map({
      guid: 5,
      uid: 2,
      released: Stack.of(3, 4, 1),
    });

    const expected = Map({
      guid: 5,
      uid: 2,
      released: Stack.of(2, 3, 4, 1),
    });

    const result = releaseUid(initialState, 2);

    expect(result.toJS()).toEqual(expected.toJS());
  });


  it('gets the current uid', () => {
    const initialState = Map({
      guid: 5,
      uid: 2,
      released: Stack.of(3, 4, 1),
    });

    const expected = 2;

    const result = currentUid(initialState);

    expect(result).toEqual(expected);
  });
});
