<template lang="html">
    <div>
      <div class="buttom-nav   " style="position: fixed;">
        <div class="menu">
        <ul class = "admin-wrapper  row-column  justify-content-between align-items-center " style="width:410px !important;">
          <li  style="width:10px !important;"
        class="menu-item  btn nav nav-pills my-1 d-flex d ms-3 me-1 hovered "
        v-for="link in links.slice(0, 4)" :key="link.id" 
                        @click="displayView(link.id, link.termsText, link.linkRoute)"
      >
    
                        <span class="" >
                            <img :src="require(`/src/assets/images/d-board/${link.imgBlack}`)" alt=""
                                class="icon-size" style="color:#FDB022" />
                        </span>
                        <!-- <span style="font-size:10px !important">{{ link.title }}</span> -->
          </li>
          <li  style="width:90px !important;"
        class="menu-item  btn nav nav-pills my-3 d-flex d ms-3 me-1 hovered "
        v-for="link in links.slice(6)"
                            :key="link.id" @click="displayView(link.id, link.termsText, link.linkRoute)"
      >
    
                        <span class="" >
                            <img :src="require(`/src/assets/images/d-board/${link.imgBlack}`)" alt=""
                                class="icon-size" style="color:#FDB022" />
                        </span>
                        
                        <!-- <span style="font-size:10px !important">{{ link.title }}</span> -->
                        
         </li>
        </ul>
       </div>
       
         
      </div>
    </div>
  </template>
<script>
export default {
    name: "SideBar",
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
                    title: "settings",
                    img: "logout.svg",
                    imgBlack: "settings.svg",
                    linkRoute: "/setting",
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

   body {
            
        }
        .menu ul {
            display: flex;
            list-style: none;
          
            background-color: rgba(224, 178, 79, 0.918);
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .menu ul li a {
            color: #fff;
            display: flex;
            flex-direction: column;
            font-size: 15px;
            font-family: poppins;
            text-decoration: none;
            height: 70px;
            width: 85px;
            position: relative;
        }

        .menu ul li a .title {
            position: absolute;
            font-size: 10px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: .5s;
        }

        .menu ul li a .icon {
            position: absolute;
            font-size: 5px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: .5s;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .menu ul li a:hover .title {
            transform: translate(-50%, calc(-50% + 10px));
            opacity: 1;
        }

        .menu ul li a:hover .icon {
            top: 0;
            background-color: #b39236;
            color: #fff;
            outline: 4px #fff solid;
        }



  .buttom-nav{
    visibility: hidden;
    width: 100%;
  }
  .buttom-nav{
    flex: 1;
  }
  .buttom-nav ul li{
    display: inline-block;
    margin: 0 3px;
  }
   
  @media only screen and (max-width: 600px) {
    .buttom-nav{
    visibility: visible;
    display: block;
    bottom: 0;
    left: 0;
    position: fixed;
    display: flex;
    margin: 0;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0px;
  }
}
  
  </style>
  