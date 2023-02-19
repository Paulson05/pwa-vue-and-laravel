<template lang="html">
	<div class="container">
		<h3 class="mx-5 fw-bold">Dashboard</h3>
		<hr style="background: #F79009;">

		<DashboardStat :doc-file-count="docFileCount"/>

		<hr class="mt-5">
		<div class="mx-3 p-3 student-app-heading">
			<div class="d-flex justify-content-between align-items-center">
				<h4><img class="px-2" :src="require('/src/assets/images/d-board/student-application-black.svg')" alt="" height="24">
					Student Applications</h4>
				<button class="btn btn-large bg-yellow px-3 fw-500 ripple h-100" @click="() => this.$router.push('/student-application')">View All</button>
			</div>
		</div>
		<div class="student-app mx-3">
			<div class="table-responsive" tabIndex="1">
				<table class="w-100">
					<div class="student-app-card py-2 px-3 my-4" v-for="studentApp in applicationSummary" :key="studentApp.id">
						<div class="d-flex align-items-center justify-content-between">
							<!-- <img :src="require(`/src/assets/images/d-board/${studentApp.avatar}`)" alt=""> -->
							<img :src="studentApp.avatar" alt="">
							<div class="d-flex col-lg-9 col-md-12 justify-content-around ml-n1 me-md-5 mt-3">
								<div class="text-secondary ml-0  fs-14"> <span>Full Name </span>
									<p class="text-dark mt-1  fs-14">{{studentApp.fullName}}</p>
								</div>
								<div class="text-secondary  fs-14"> <span>Email </span>
									<p class="text-dark mt-1  fs-14">{{studentApp.email}}</p>
								</div>
								<div class="text-secondary  fs-14"> <span>Country </span>
									<p class="text-dark mt-1  fs-14">{{studentApp.country}}</p>
								</div>
								<div class="text-secondary  fs-14"> <span>National ID</span>
									<p class="text-dark mt-1  fs-14">{{studentApp.nationalId}}</p>
								</div>
								<div class="text-secondary  fs-14"> <span>Status </span>
									<p class="text-dark mt-1  fs-14">{{studentApp.status}}</p>
								</div>
							</div>
							<button
								@click="()=>this.$router.push(`/student-application/${studentApp.nationalId}/profile`)"
								class="btn btn-disabled btn-small fs-14 text-dark px-3 py-2 d-flex justify-content-between align-items-center h-100">
								<img class="me-2"
									:src="require('/src/assets/images/d-board/student-application-black.svg')"
									alt="">
								View
							</button>
							<div>
							</div>
						</div>
					</div>
				</table>
			</div>
		</div>

		<div class="student-track  mx-3 p-3">
			<div class="d-flex justify-content-between align-items-center">
				<h4><img class="px-2" :src="require('/src/assets/images/d-board/student-tracking-black.svg')" alt="" height="24">
			Programmes</h4>
				<button class="btn btn-large bg-yellow px-3 fw-500 ripple h-100" @click="() => this.$router.push('/student-tracking')">View All</button>
			</div>
		</div>



		<div class="row p-3 ">
			<div class="col-lg-6 mt-3 mb-4 mr-4">
				<div class="shadow p-3 d-flex justify-content-between align-items-center bg-white">
					<h4 class="d-flex mb-0 align-items-center p-header"><img class="px-2" :src="require('/src/assets/images/d-board/inbox-black.svg')" alt="" height="24">Chat</h4>
					<button class="btn btn-large bg-yellow px-3 fw-500 ripple h-100" @click="() => this.$router.push('/inbox')">View All</button>
				</div>
				<hr class="mt-5 grey">

			</div>
			<div class="col-lg-6 mt-3 mb-4 ">
				<div class="shadow p-3 bg-white">
					<h4 class="p-header"><img class="px-2" :src="require('/src/assets/images/d-board/help-support-black.svg')"
							alt="" height="24">Help Support</h4>
					</div>
					<div class="help-videos-container border-0">
						<div class="help-videos mb-3 ">
							<div v-for="num of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="num" class="border-0 mt-0 ms-0 ps-0 pt-0">
								<div class="help-video m">
									<img :src="require(`/src/assets/images/play_icon.png`)" alt="" />
								</div>
								<h3>
									Paramount Student's Sign
									In tutorial
								</h3>
							</div>
						</div>
					</div>
			</div>
		</div>

	</div>
</template>

<script>

import { Students, StudentApplications } from  '@/data';
import DashboardStat from '@/components/DashboardStat.vue';
export default {
	name: "UserDashboard",
	components: {DashboardStat},
	data() {
		return {

			studentApplication: StudentApplications,
			students: Students,
      docFileCount: [
        {
          id: 1,
          style: "border border-primary px-lg-3 p-3 py-4 rounded border-2",
          count: 86,
          img: "arrow-1.svg",
          title: "Total Applications",
          // excerpt: "Number of students documents for evaluation.",
          class: "col-lg-4 col-md-6 col-xl-3 mb-3 bg-white"
        },
        {
          id: 2,
          style: "border border-warning px-lg-3 p-3 py-4 rounded border-2",
          count: 12,
          img: "arrow-2.svg",
          title: "In Progress",
          // excerpt: "Number of students documents for evaluation.",
           class: "col-lg-4 col-md-6 col-xl-3 mb-3 bg-white"
        },
        {
          id: 3,
          style: "border border-success px-lg-3 p-3 py-4 rounded  border-2",
          count: 22,
          img: "arrow-3.svg",
          title: "Approved",
          // excerpt: "Number of students documents for evaluation.",
           class: "col-lg-4 col-md-6 col-xl-3 mb-3 bg-white"
        },
        {
          id: 4,
          style: "border border-danger px-lg-3 p-3 py-4 rounded border-2",
          count: "04",
          img: "arrow-4.svg",
          title: "Rejected",
          // excerpt: "Number of students documents for evaluation.",
           class: "col-lg-4 col-md-6 col-xl-3 mb-3 bg-white"
        },
      ],

		};
	},
	computed: {

		applicationSummary(){
			return this.studentApplication.slice(0, 5)
		},

	}
};
</script>

<style lang="scss" scoped>
$text-color: #1D2939;
.fs-14 {
	font-size: 14px!important;
}

@media screen and (max-width: 768px) {
	.w-md-18 {
		width: 170%;
	}
}
.p-02 {
    padding: 0.4em 0.4em !important;
}
.fs-6 {
	font-size: .8em !important;
}
.inboxImg {
	width: 39.92px;
	height: 40px;
}
.grey {
	color: #98A2B3;
}

.bg-white{
	background-color: #fff;
}

.student-app-heading{
	margin-top: 50px;
	margin-bottom: 20px;
	box-shadow: 0px 4px 16px rgba(16, 24, 40, 0.1);
	background-color: #fff;

	h4{
		font-weight: 600;
font-size: 1.5rem;
margin-bottom: 0;
line-height: 38px;
color: $text-color;
	}
}

.student-app {
	.student-app-card{
		box-shadow: 0px 4px 16px rgba(16, 24, 40, 0.1);
		background-color: #fff;
	}
}

.student-track {
	margin-top: 20px;
	margin-bottom: 20px;
	box-shadow: 0px 4px 16px rgba(16, 24, 40, 0.1);
	background-color: #fff;
	h4{
	font-weight: 600;
    font-size: 1.5rem;
    line-height: 38px;
    color: $text-color;
	margin-bottom: 0;
	}
}
.p-header {
	font-weight: 600;
    font-size: 1.5rem;
    line-height: 38px;
    color: $text-color;
	margin-bottom: 0;
}

button {
	font-size: 0.8rem;
}
</style>
