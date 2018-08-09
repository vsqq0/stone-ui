const Head = () => import(/* webpackChunkName: "head" */'./head.vue')
const Foot = () => import(/* webpackChunkName: "foot" */'./foot.vue')

export { Head, Foot };
