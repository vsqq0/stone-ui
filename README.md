#更新命令
ncu -a stone-ui
#发布npm
npm publish 
#安装npm
yarn install
#运行
yarn run serve
#打包
yarn run build
#检查
yarn run lint

ui 组件必须使用jsx 向下兼容

#其他 路由改变任然保持原有的状态
<keep-alive>
  <component :is="'Head'"></component>
</keep-alive>

()=>{}相当于function(){}.bind(this) 因为不同作用域this会改变的问题用()=>{}更好