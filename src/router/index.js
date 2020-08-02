import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //  {
  //    path:'/',
  //    redirect:'/index'
  //  },
  {
    path:'/',
    name:'Index',
    component:()=>import('../views/index/Index.vue'),
    children:[
      {
        path:'user',
        name:'User',
        component:()=>import('../views/user/User.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
