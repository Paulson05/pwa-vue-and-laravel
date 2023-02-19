<template lang="html">
    <div>
        <div class="d-flex flex-column flex-grow-1 align-items-center text-white sticky-top">
            <div class="align-items-center w-100">
                <div class="dashboard-nav h-auto py-1 ps-2">
                    <div class=" rounded-circle px-4">
                        <img
              :src="require('/src/assets/images/logo.svg')"
              alt="logo"
              width="120"
            />
                        <div class="pt-1 d-flex flex-lg-row justify-content-between lg-align-items-center">
                            <div class="pt-0">
                               
                            </div>
                            <div class="pt-0 cursor" @click="setting()">
                                <small class="fw-light"> <img :src="require('/src/assets/images/d-board/settings.svg')"
                                        alt="logo" /><span class="px-0">Settings</span></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                
                <div class="px-2 pt-5">
                    <div class=" px-0 pt-2" style="border-top: 1px solid #aaa; border-bottom: 1px solid #aaa;">
                                        
                                        
                                        <div class="row d-flex flex-row   " >
                <div class="col-1  m-6">
                    <img :src="require('/src/assets/images/d-img.svg')" alt="logo" width="60" />
                </div>
                <div class="col-6" style="padding-left: 50px">
                    <p class="p-tag">432560</p>
                                        
                    <p class="p-tag pt-0">Turkschool@gmail.com</p>
                </div>
               
              </div>
                    </div>
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
        </div>
    </div>
</template>
<style scoped>
.dashboard-fixed::-webkit-scrollbar,
.sidenav::-webkit-scrollbar {
    width: 5px;
    height: 8px;
}

.sidenav::-webkit-scrollbar {
    background-color: #aaa;
}

.sidenav::-webkit-scrollbar-thumb {
    background: #000;
}

.p-tag{
    font-size: 10px !important;
    background-color: transparent !important;
    color: black;
    padding-top: 5px;
}
</style>
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
                    title: "Dashboard",
                    img: "dash-b-o.svg",
                    imgBlack: "dash-b-black.svg",
                    linkRoute: "/dashboard",
                },
                {
                    id: 2,
                    title: "Student Applications",
                    img: "student-application-o.svg",
                    imgBlack: "student-application-black.svg",
                    linkRoute: "/student-application",
                },
                {
                    id: 3,
                    title: "Programmes ",
                    img: "student-tracking-o.svg",
                    imgBlack: "student-tracking-black.svg",
                    linkRoute: "/student-tracking",
                },
                {
                    id: 4,
                    title: "Chats",
                    img: "inbox-o.svg",
                    imgBlack: "inbox-black.svg",
                    linkRoute: "/inbox",
                },
                {
                    id: 5,
                    title: "Promotions",
                    img: "help-support-o.svg",
                    imgBlack: "help-support-black.svg",
                    linkRoute: "/help-and-support",
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
