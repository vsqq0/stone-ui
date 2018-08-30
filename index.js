import(/* webpackChunkName: "SU-global" */'./global.css')
const Head = () => import(/* webpackChunkName: "SU-head" */'./src/components/head.vue')
const Model = () => import(/* webpackChunkName: "SU-model" */'./src/components/model')
import MsgModel from './src/components/msgModel'

export { 
  Head, 
  Model,
  MsgModel
};
