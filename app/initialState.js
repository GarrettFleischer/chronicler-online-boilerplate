import { CNext, CText } from 'components/Component';
import { Stack } from 'immutable';


export const initialState = {
  base: {
    past: [],
    present: {
      guid: {
        guid: 1,
        uid: 1,
        released: Stack(),
      },
      node: [
        {
          id: '0',
          type: CText,
          data: {
            text: 'Text component',
          },
        },
        {
          id: '1',
          type: CNext,
          data: {
            text: 'Next component',
          },
        },
      ],
    },
    future: [],
  },
};
