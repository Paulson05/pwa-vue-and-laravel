import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexVue";
import DashBoard from "../views/dashboard/DashBoard";

import LoginPage from "@/views/auth/LoginPage.vue";
import RegistrationPage from  "@/views/auth/RegistrationPage.vue";
import UpdateUsername from  "@/views/auth/UpdateUsername.vue";
import UpdateEmail from "@/views/auth/UpdateEmail.vue";
import ForgetPassword from "@/views/auth/ForgetPassword.vue";
import ProfilePage from "@/views/profile/ProfilePage.vue";
import BuddiesPage from "@/views/pages/BuddiesPage.vue";
import DiscoverPage from "@/views/pages/DiscoverPage.vue";
 import SettingsPage from  "@/views/pages/SettingsPage.vue";
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
        {
          path: "/setting",
          name: "SettingsPage",
          component: SettingsPage,
        },
        {
          path: "/update-username",
          name: "UpdateUsername",
          component: UpdateUsername,
        },
        {
          path: "/update-email",
          name: "UpdateEmail",
          component: UpdateEmail,
        },

        {
          path: "/update-email",
          name: "UpdateEmail",
          component: UpdateEmail,
        },
        {
          path: "/forgetpassword",
          name: " ForgetPassword",
          component:  ForgetPassword,
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
      name: "RegistrationPage",
      component: RegistrationPage,
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