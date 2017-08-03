export const NodeType = {
  BASE: 'BASE',
  SCENE: 'SCENE',
  NODE: 'NODE',
  LINK: 'LINK',
  IF_LINK: 'IF_LINK',
  NEXT: 'NEXT',
  TEXT: 'TEXT',
  CHOICE: 'CHOICE',
  FAKE_CHOICE: 'FAKE_CHOICE',
  CREATE: 'CREATE',
  TEMP: 'TEMP',
  SET: 'SET',
  IF: 'IF',
  LABEL: 'LABEL',
  GOTO: 'GOTO',
  GOTO_SCENE: 'GOTO_SCENE',
  GOSUB: 'GOSUB',
  GOSUB_SCENE: 'GOSUB_SCENE',
};

export const LinkType = {
  NORMAL: 'NORMAL',
  DISABLE: 'DISABLE',
  HIDE: 'HIDE',
  ALLOW: 'ALLOW',
};


export function makeBase(id, scenes = []) {
  return { type: NodeType.BASE, id, scenes };
}


export function makeScene(id, name, nodes = []) {
  return { type: NodeType.SCENE, id, name, nodes };
}


export function makeNode(id, label, components = [], x = 0, y = 0) {
  return { type: NodeType.NODE, id, x, y, label, components };
}


export function makeLink(id, linkType, text, linkId, components = []) {
  return { type: NodeType.LINK, id, linkType, text, linkId, components };
}


export function makeIfLink(id, expr, text, linkId, components = []) {
  return { type: NodeType.IF_LINK, id, expr, text, linkId, components };
}


export function makeNext(id, text, linkId) {
  return { type: NodeType.NEXT, id, text, linkId };
}


export function makeText(id, text) {
  return { type: NodeType.TEXT, id, text };
}


export function makeChoice(id, links) {
  return { type: NodeType.CHOICE, id, Links: links };
}


export function makeFakeChoice(id, choices, linkId) {
  return { type: NodeType.FAKE_CHOICE, id, Choices: choices, linkId };
}


export function makeCreateAction(id, name) {
  return { type: NodeType.CREATE, id, name };
}


export function makeTempAction(id, name) {
  return { type: NodeType.TEMP, id, name };
}


export function makeSet(id, name, op, expr) {
  return { type: NodeType.SET, id, name, Op: op, expr };
}


export function makeIfAction(id, expr, ifComponents, elseComponents) {
  return { type: NodeType.IF, id, expr, ifComponents, elseComponents };
}


export function makeLabel(id, label) {
  return { type: NodeType.LABEL, id, label };
}


export function makeGoto(id, linkId) {
  return { type: NodeType.GOTO, id, linkId };
}


export function makeGotoScene(id, sceneId, linkId) {
  return { type: NodeType.GOTO_SCENE, id, sceneId, linkId };
}


export function makeGosub(id, linkId) {
  return { type: NodeType.GOSUB, id, linkId };
}


export function makeGosubScene(id, sceneId, linkId) {
  return { type: NodeType.GOSUB_SCENE, id, sceneId, linkId };
}
