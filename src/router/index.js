import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
 
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
 
const routes = [
  {
    path: '/user/login',
    name: 'logIn',
    component: Login
  },
  {
    path: '/user/signup',
    name: 'signUp',
    component: SignUp
  }
]
 
const router = createRouter({
  history: createWebHistory(),
  routes
})
 
export default router