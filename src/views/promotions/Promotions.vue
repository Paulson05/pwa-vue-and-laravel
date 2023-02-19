<template>
<div>
  <div class="d-flex justify-content-between">
    <div >
      <h3 class="mx-5 fw-bold mb-0 mt-1">Promotions</h3>
    </div>
    <div class="mx-5">
      <button class="backgroundImage"><img :src="require(`/src/assets/images/add-outline.svg`)" style="height:20px;width:20px;margin-bottom: 2px" > Create Promotion</button>
    </div>
  </div>
  <hr style=" border:1px solid #F79009">
  <DashboardCard :doc-file-count="docFileCount" />
  <hr style=" border:1px solid #F79009">
  <div class="d-flex justify-content-between">
    <div >
     </div>
    <div class="mx-5">
      <button class="backgroundImage"><img :src="require(`/src/assets/images/fiter-icon.svg`)" style="height:20px;width:20px;margin-bottom: 2px" > Filter</button>
    </div>
  </div>
  <hr style=" border:1px solid #F79009">
  <div>
    <PromotionCourses v-for="course in courses" :course="course" :key="course.id" />
  </div>
</div>
</template>

<script>
import DashboardCard from '@/components/DashboardStat.vue';
import PromotionCourses from "@/components/PromotionCourses";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Promotions",
  components: {
    DashboardCard,
    PromotionCourses
  },
  setup() {
    return {
      docFileCount: [
        {
          id: 1,
          style: "px-lg-3 p-3 py-4 rounded bg-white",
          count: 46,
          img: "arrow-1.svg",
          title: "Total",
          excerpt: "All",
          class: "col-4 mb-3    px-lg-5 ",
          borderColor: {'border': '2px solid #7375FD !important','border-radius': '10px !important','width': '245px !important','height': '152px !important' },
        },
        {
          id: 2,
          style: "px-lg-3 p-3 py-4 rounded bg-white",
          count: 15,
          img: "arrow-2.svg",
          title: "In Progress",
          excerpt: "Ongoing ",
          class: "col-4 mb-3    ",
          borderColor: {'border': '2px solid #32D583 !important','border-radius': '10px !important','width': '245px !important','height': '152px !important' },
        },
        {
          id: 3,
          style: "px-lg-3 p-3 py-4 rounded  bg-white",
          count: 5,
          img: "arrow-3.svg",
          title: "Approved",
          excerpt: "Expired",
          class: "col-4 mb-3   px-lg-5",
          borderColor: {'border': '2px solid #F97066 !important','border-radius': '10px !important','width': '245px !important','height': '152px !important' },
        },
      ],
      courses: [
        {
          id: 1,
          courseCode: 80164,
          programeName: 'Introduction to Computer Sceince',
          dateCreated:  '22/11/2022',
          duration: '20 Days',
          status: 'Ongoing'
        },
        {
          id: 2,
          courseCode: 80164,
          programeName: 'Introduction to Computer Sceince',
          dateCreated:  '22/11/2022',
          duration: '20 Days',
          status: 'Ongoing'
        },
        {
          id: 3,
          courseCode: 80164,
          programeName: 'Introduction to Computer Sceince',
          dateCreated:  '22/11/2022',
          duration: '20 Days',
          status: 'Ongoing'
        },
        {
          id: 4,
          courseCode: 80164,
          programeName: 'Introduction to Computer Sceince',
          dateCreated:  '22/11/2022',
          duration: '20 Days',
          status: 'Ongoing'
        },
        {
          id: 5,
          courseCode: 80164,
          programeName: 'Introduction to Computer Sceince',
          dateCreated:  '22/11/2022',
          duration: '20 Days',
          status: 'Ongoing'
        },
      ],
    };
  },
}
</script>

<style scoped>
.backgroundImage {
  display:inline-block;
  background-color: #FAC515;
  border-radius: 8px;
  padding: 8px 27px;
  border: none;
  font-size: 16px;
 }
</style>
