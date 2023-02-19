<template lang="html">
  <div>
     <div class="container navbar" >

      <h1>
        <img
              :src="require('/src/assets/images/logo-dark.svg')"
              alt="logo"
              width="120"
            /> 
            
      </h1>

      <nav class="navbar" data-navbar>

        <div class="navbar-top">
          <a href="#" class="logo">EduHome</a>

          <button class="nav-close-btn" aria-label="Close menu" data-nav-toggler>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <div class="menu">
        <ul class = "admin-wrapper  row-column  justify-content-between align-items-center " style="width:690px !important;">
          <li  style="width:90px !important;"
        class="menu-item  btn nav nav-pills my-1 d-flex d ms-3 me-1 hovered "
        v-for="link in links.slice(0, 5)" :key="link.id" 
                        @click="displayView(link.id, link.termsText, link.linkRoute)"
      >
    
                        <span class="" style="margin-left: 20px;" >
                            <img :src="require(`/src/assets/images/d-board/${link.imgBlack}`)" alt=""
                                class="icon-size" style="color:#FDB022" />
                        </span>
                        <span class="p-0">{{ link.title }}</span>
                        
          </li>
          <li  style="width:90px !important;"
        class="menu-item  btn nav nav-pills my-3 d-flex d ms-3 me-1 hovered "
        v-for="link in links.slice(6)"
                            :key="link.id" @click="displayView(link.id, link.termsText, link.linkRoute)"
      >
    
                        <!-- <span class="" >
                            <img :src="require(`/src/assets/images/d-board/${link.imgBlack}`)" alt=""
                                class="icon-size" style="color:#FDB022" />
                        </span> -->
                        
         </li>
        </ul>
       </div>

      </nav>

      <div class="header-actions">

        <button class="header-action-btn" aria-label="Open search" data-search-toggler>
          <ion-icon name="search-outline"></ion-icon>
        </button>

       
        <div class="col-1  ml-3" style="padding-left: 1px;">
                            <img
                          :src="require('/src/assets/images/d-img.svg')"
                          alt="logo"
                          width="60"
                          />
                          <span>onyebuchi</span>
         </div>
       

      </div>

      <div class="overlay" data-nav-toggler data-overlay></div>

    </div>
  </div>
</template>
<script>
export default {

    data() {
        return {
            animate: true,
            currentId: 1,
            links: [
                {
                    id: 1,
                    title: "Home",
                    img: "dash-b-o.svg",
                    imgBlack: "dash-b-black.svg",
                   
                    linkRoute: "/dashboard",
                },
                {
                    id: 2,
                    title: "Buddies",
                    img: "student-application-o.svg",
                    imgBlack: "student-application-black.svg",
                  
                    linkRoute: "/buddies",
                },
                {
                    id: 3,
                    title: "Discover ",
                    img: "student-tracking-o.svg",
                    imgBlack: "student-tracking-black.svg",
                    linkRoute: "/discover",
                    
                },
                {
                    id: 4,
                    title: "Profile",
                    img: "logout.svg",
                    imgBlack: "logout.svg",
                    linkRoute: "/profile",
                },
                {
                    id: 5,
                    title: "Settings",
                    img: "logout.svg",
                    imgBlack: "settings.svg",
                    linkRoute:"/promotions",
                },
                {
                    id: 6,
                    title: "Help and Support",
                    img: "help-support-o.svg",
                    imgBlack: "help-support-black.svg",
                    linkRoute: "/help-and-support",
                },
                {
                    id: 7,
                    title: "LogOut",
                    img: "logout.svg",
                    imgBlack: "logout.svg",
                    linkRoute: "/login",
                },

            ],
            newRoute: "",
            termsDisplay: "",
        };
    },
    methods: {
        displayView(linkId, linkTerms, link) {
            let value = {linkId, linkTerms, link};
            this.handleDisplayText(value);
        },
        handleDisplayText(value) {
            console.log(value, "I worked");
            let linkId, linkTerms, link;
            [linkId, linkTerms, link] = Object.values(value);
            this.currentId = linkId;
            this.termsDisplay = linkTerms;
            this.linkRoute = link;
            //remove user token from localstorage before loggin out
            // if(link == '/login') {
            //     const AuthStore = useAuthStore()
            //     AuthStore.logout()

            // }
            this.$router.push(`${this.linkRoute}`);
            console.log(this.linkRoute, linkId, linkTerms, link);
        },
        setting() {
            this.$router.push("/settings");
        },
        getLocation(){
            let location = window.location.pathname.split("/")[1];
            let linkId = this.links.find(el => el.linkRoute === `/${location}`);
            this.currentId = linkId != undefined ? linkId.id : null;
            return linkId;
        }
    },
    computed: {
        animateClass() {
            return !this.animate;
        },
    },
    created() { },
    mounted() {
        this.getLocation()
    },
};
  </script>
<style>
.navbar{
  visibility: hidden;
}

</style>
