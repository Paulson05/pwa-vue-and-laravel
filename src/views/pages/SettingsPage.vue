<template>
    <div class="container h-auto py-3 m-4 p-4">
        <!-- Read-Only Form -->
        <div class="row  ml-3" style="padding-left: 1px;">
                           <div class="col-2">
                            <img
                          :src="require('/src/assets/images/d-img.svg')"
                          alt="logo"
                          width="60"
                          />
                           </div>
                           <div class="col-8 pl-5 mt-3">
                            <h2 class = "text-dark" style="font-size: 20px;">Settings & privacy</h2>
                           
                           </div>
                          
         </div>
         <hr>
         <div class="w-100 overflow-auto dashboard-fixed">
                <div
                    class="admin-wrapper bg-light flex-column flex-nowrap flex-shrink-1 flex-grow-1 mb-0 justify-content-center align-items-center">
                    <div class="btn nav nav-pills my-1 d-flex d ms-3 me-1 hovered justify-content-start"
                        v-for="link in links.slice(0, 6)" :key="link.id" :class="{ adminBtn: link.id === currentId }"
                        @click="displayView(link.id, link.termsText, link.linkRoute)">
                        <span class="pe-3" v-if="link.id === currentId">
                            <img :src="require(`/src/assets/images/d-board/${link.img}`)" alt="" class="icon-size" />
                        </span>
                        <span class="pe-3" v-else>
                            <img :src="require(`/src/assets/images/d-board/${link.imgBlack}`)" alt=""
                                class="icon-size" />
                        </span>
                        <span>{{ link.title }}</span>
                    </div>
                </div>
                
                <div class="">
                    
                    <div class="py-sm-1 admin-wrapper ms-auto flex-shrink-1">
                        <div class="btn nav nav-pills d-flex my-2 ms-3 hovered" v-for="link in links.slice(6)"
                            :key="link.id" @click="displayView(link.id, link.termsText, link.linkRoute)">
                            <span class="pe-3">
                                <img :src="require(`/src/assets/images/d-board/${link.imgBlack}`)" alt=""
                                    class="icon-size" />
                            </span>
                            <span>{{ link.title }}</span>
                        </div>
                    </div>

                    
                </div>
               
                
            </div>
                 
                
               
      
         <div>
            
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
                    title: "Change Password",
                    img: "dash-b-o.svg",
                    imgBlack: "dash-b-black.svg",
                    linkRoute: "forgetpassword",
                },
                {
                    id: 2,
                    title: "Update Email",
                    img: "student-application-o.svg",
                    imgBlack: "student-application-black.svg",
                    linkRoute: "/update-email",
                },
                {
                    id: 3,
                    title: "Update Username",
                    img: "student-tracking-o.svg",
                    imgBlack: "student-tracking-black.svg",
                    linkRoute: "/update-username",
                },
                {
                    id: 4,
                    title: "logout",
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
<style scoped>
    .container {
        margin-top: -30px;
        margin-bottom: 60px;
    }
    .form-group {
        margin-top: 40px;
    }
    .input-groups{
        position: relative;

    }
    .backgroundImage {
  display:inline-block;
  background-color: #FAC515;
  border-radius: 8px;
  padding: 8px 27px;
  border: none;
  font-size: 16px;
 }
 .save-btn{
    display:inline-block;
  background-color: #c3c9c4;
  border-radius: 8px;
  padding: 8px 27px;
  border: none;
  font-size: 16px;
 }
    .sub-input {
        margin-top: 72px;
    }
    .sub-input-last {
        margin-top: 112px;
    }
    .form-input {
        width: 400px;
        height: 44px;
        background: #eaecf0;
    }
    .form-input2 {
        width: 960px;
        height: 44px;
        background: #eaecf0;
    }
    .form-input-large {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 14px;
        gap: 8px;
        position: absolute;
        width: 591px;
        height: 84px;
        margin-top: 4px;
        background: #eaecf0;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
    }
    .input-left-icon {
        position: absolute !important;
        width: 24px;
        height: 24px;
        top: 10px;
        left: 10px;
        /* margin-left: 329px;
        margin-top: 40px; */
    }
    .input-icon {
        position: absolute;
        width: 16px;
        height: 21px;
        top: 10px;
        right: 10px;
        /* margin-
        right: 410px;
        margin-top: 40px; */
    }
    .label-text {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #1d2939;
    }
    .form-input-large::-webkit-input-placeholder {
        width: 518px;
        height: 64px;
        position: absolute;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1d2939;
    }
    .country-form-input::-webkit-input-placeholder {
        padding-left: 50px;
        color: #1d2939;
    }

    .p-input-icon-left>i, .p-input-icon-right>i {
        margin-top: -.75rem;
    }
</style>