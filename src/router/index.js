import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexVue";
import DashBoard from "../views/dashboard/DashBoard";
import LoginPage from "@/views/auth/LoginPage.vue";
import RegisterPage from  "@/views/auth/RegistrationPage.vue";
import ProfilePage from "@/views/profile/ProfilePage.vue";
import BuddiesPage from "@/views/pages/BuddiesPage.vue";
import DiscoverPage from "@/views/pages/DiscoverPage.vue";
const routes = [
    {
      path: "/",
      name: "IndexView",
      component: IndexView,
      
      children: [
        {
          path: "",
          name: "Home",
          redirect: "/dashboard",
        },
        {
          path: "/dashboard",
          name: "DashBoard",
          component: DashBoard,
        },
        {
          path: "/profile",
          name: "ProfilePage",
          component: ProfilePage,
        },
        {
          path: "/buddies",
          name: "BuddiesPage",
          component: BuddiesPage,
        },
        {
          path: "/discover",
          name: "DiscoverPage",
          component: DiscoverPage,
        },

        
        
       
      ],

      
    },
  
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
    },
  
  ];
  // const isAthenticated = localStorage.getItem("user");
  const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
      // always scroll to top btw routes
      return { top: 0 };
    },
  });




  export default router;