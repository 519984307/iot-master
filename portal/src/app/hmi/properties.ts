import {HmiPropertyItem} from "./hmi";

export let positionProperties: Array<HmiPropertyItem> = [
  {
    label: 'x',
    name: 'x',
    type: 'number',
    default: 0
  },
  {
    label: 'y',
    name: 'y',
    type: 'number',
    default: 0
  },
  {
    label: '宽度',
    name: 'width',
    type: 'number',
    default: 0
  },
  {
    label: '高度',
    name: 'height',
    type: 'number',
    default: 0
  },
];

export let rotateProperties: Array<HmiPropertyItem> = [
  {
    label: '旋转角度',
    name: 'rotate',
    type: 'number',
  },
];

export let strokeProperties: Array<HmiPropertyItem> = [
  {
    label: '边框色',
    name: 'color',
    type: 'color',
    default: '#fff'
  },
  {
    label: '边框',
    name: 'stroke',
    type: 'number',
    default: 'none'
  },
];

export let fillProperties: Array<HmiPropertyItem> = [
  {
    label: '填充色',
    name: 'fill',
    type: 'color',
    default: 'none'
  },
];


export let fontProperties: Array<HmiPropertyItem> = [
  {
    label: '字体',
    name: 'font',
    type: 'font',
  },
  {
    label: '字号',
    name: 'fontsize',
    type: 'fontsize',
    default: 20
  },
  {
    label: '斜体',
    name: 'italic',
    type: 'boolean',
    default: false
  },
  {
    label: '粗体',
    name: 'bold',
    type: 'boolean',
    default: false
  },
];
