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

#其他
<keep-alive>
  <component :is="'Head'"></component>
</keep-alive>