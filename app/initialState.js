import { CNext, CText } from 'components/Component';
import { List, Map } from 'immutable';


export const initialState = {
  node: List([
    Map({
      id: '1',
      type: CText,
      options: Map({
        text: 'Text component',
      }),
    }),
    Map({
      id: '2',
      type: CNext,
      options: Map({
        text: 'Next component',
      }),
    }),
  ]),
};
