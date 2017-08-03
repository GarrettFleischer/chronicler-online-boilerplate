import {
  LinkType,
  makeBase,
  makeChoice,
  makeGotoScene,
  makeLabel,
  makeLink,
  makeNext,
  makeNode,
  makeScene,
  makeSet,
  makeText,
  NodeType,
} from './nodes';


export const initialState = {
  base: {
    past: [],
    present: {
      view: initialViewState(),
      guid: initialGuidState(),
      model: initialModelState(),
    },
    future: [],
    canUndo: false,
    canRedo: false,
  },
};


function initialViewState() {
  return ({
    type: NodeType.NODE,
    id: 8,
  });
}


function initialGuidState() {
  return ({
    guid: 19,
    uid: 11,
    released: [7, 9],
  });
}


function initialModelState() {
  return (
    makeBase(0, [
      // SCENE 1
      makeScene(1, 'startup', [
        // NODE 2
        makeNode(2, 'Start', [
          makeText(3, 'A knight...'),
          makeChoice(4, [
            makeLink(5, LinkType.NORMAL, 'Fly...', 17, [
              makeSet(6, 'disdain', '%+', '10'),
            ]),
            makeLink(18, LinkType.NORMAL, 'Charge...', 10, null),
          ]),
        ]),
        // NODE 8
        makeNode(8, null, [
          makeNext(19, 'End Act 1', 12),
        ]),
        // NODE 10
        makeNode(10, null, [
          makeNext(11, null, 8),
        ]),
        // NODE 12
        makeNode(12, null, [
          makeGotoScene(13, 14, 8),
        ]),
      ]),
      // SCENE 14
      makeScene(14, 'scene_2', [
        // NODE 15
        makeNode(15, null, [
          makeText(16, '...'),
          // LABEL 17
          makeLabel(17, 'middle'),
        ]),
      ]),
    ]));
}
