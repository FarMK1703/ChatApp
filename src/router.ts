import { createRouter,createWebHistory } from "vue-router";
import UserEntrancePage from './pages/UserEntrance.vue'
import MainPage from './pages/MainPage.vue'


export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component:UserEntrancePage
        },

        {
            path:'/main',
            component:MainPage
        }
    ]
    

})