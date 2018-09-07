import(/* webpackChunkName: "SU-global" */'./global.css');
const Model = () => import(/* webpackChunkName: "SU-model" */'./src/components/model');
const HighLight = () => import(/* webpackChunkName: "SU-highLight" */'./src/components/highLight');
const Button = () => import(/* webpackChunkName: "SU-button" */'./src/components/button');
const Table = () => import(/* webpackChunkName: "SU-table" */'./src/components/table');
const Block = () => import(/* webpackChunkName: "SU-block" */'./src/components/block');
const CodeShow = () => import(/* webpackChunkName: "SU-codeShow" */'./src/components/codeShow');
const Menu = () => import(/* webpackChunkName: "SU-menu" */'./src/components/menu');

import MsgModel from './src/components/msgModel';

export { 
  Model,
  MsgModel,
  HighLight,
  Button,
  Table,
  Block,
  CodeShow,
  Menu
};
