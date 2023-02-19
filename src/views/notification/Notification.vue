<template lang="html">
    <div>
        <div class="d-flex justify-content-between">
            <h1 class="heading mb-4">Notification</h1>
            <div class="mr-7">
                <button class="clearAll btn btn-large px-4 fw-500" @click="clearNotifications()" :disabled="notifications.length == 0">Clear All Notifications</button>
            </div>
        </div>
        <div class="card rounded-09" id="notifications">
            <div v-if="notifications.length > 0">
                <div :class="{'active': !notification.receipt}" class="card-body border-bottom d-flex align-items-center justify-content-between" v-for="notification in notifications" :key="notification.id">
                    <span class="p-1 bg-primary border-primary rounded-circle" v-if="!notification.receipt">
                        <span class="visually-hidden">New alerts</span>
                    </span>
                    <div v-else class="m-1"></div>
                    <img :src="`${notification.userImage}`" alt="" class="rounded profile-image m-3"/>
                    <div class="subject-n-message d-flex justify-content-between">
                        <div class="mr-3 mb-2 mt-3">
                            <p class="fw-bold">{{notification.subject}}</p>
                            <p>
                                {{notification.message}}
                            </p>
                        </div>
                        <span class="m-3">{{notification.created_at}}</span>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="emptyNotification d-flex justify-content-between flex-column">
                    <img class="w-10" :src="require('/src/assets/images/notification/notificationEmpty.png')" alt="empty Notification" />
                    <p class="text-center text-gray emptyText">No New Notifications</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "NotificationScreen",
        data() {
            return {
                notifications: [],
            };
        },
        created() {
            
        },
        methods: {
            clearNotifications() {
                this.notifications = [];
                localStorage.setItem("notifications", JSON.stringify([]));
                window.dispatchEvent(
                    new CustomEvent("notifications-changed", {
                        detail: {
                            storage: localStorage.getItem("notifications"),
                        },
                    })
                );
            },
        },
        mounted() {
            window.addEventListener("notifications-changed", (event) => {
                this.notifications = JSON.parse(event.detail.storage);
            });
            this.notifications = JSON.parse(localStorage.getItem('notifications'));
        },
    };
</script>
<style scoped>
    .active {
        background-color: #f5f5ff;
    }
    .border-primary {
        color: #0408e7 !important;
    }
    .card-body:nth-child(1).active {
        border-top-left-radius: 0.9em;
        border-top-right-radius: 0.9em;
    }
    .clearAll {
        background: #fac515;
    }
    .emptyNotification {
        height: 100%;
        line-height: 100vh;
        position: relative;
    }
    .emptyNotification img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .fw-500 {
        font-weight: 500;
    }
    .heading {
        margin-left: 7vw;
    }
    .mr-7 {
        margin-right: 7vw;
    }
    #notifications .card-body:last-of-type {
        margin-bottom: 7em;
    }
    .profile-image {
        width: 88px;
        height: 88px;
    }
    p.emptyText {
        margin-top: 30vh;
        font-size: 36px !important;
    }
    .rounded-09 {
        border-radius: 0.9em !important;
        z-index: -1;
    }
    .text-gray {
        color: #98a2b3;
    }
    .w-10 {
        width: 90px;
        height: 95px;
    }
</style>