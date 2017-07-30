import { CNext, CText } from './index';

export function makeText(text) {
  return {
    id: -1,
    type: CText,
    data: {
      text,
    },
  };
}

export function makeNext(text) {
  return {
    id: -1,
    type: CNext,
    data: {
      text,
    },
  };
}
