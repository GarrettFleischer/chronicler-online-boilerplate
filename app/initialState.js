import { CNext, CText } from 'components/Component';
import { List, Map, Stack } from 'immutable';


export const initialState = {
  base: {
    guid: Map({
      guid: 1,
      uid: 1,
      released: Stack(),
    }),
    node: List([
      Map({
        id: '0',
        type: CText,
        data: Map({
          text: 'Text component',
        }),
      }),
      Map({
        id: '1',
        type: CNext,
        data: Map({
          text: 'Next component',
        }),
      }),
    ]),
  },
};
