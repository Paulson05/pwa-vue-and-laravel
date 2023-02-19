<template>
  <div class="row w-90 mx-auto">
    <!-- <div class="container-fluid h-100 p-0" style="background-color: aqua"> -->
    <div class="px-4 py-3">
      <h3 class="fw-bold">Student Applications</h3>
      <hr style="background: #F79009;">
              <DashboardCard  :doc-file-count="docFileCount"/>
              <hr class="mt-5">
      <div class="col-12 d-flex justify-content-between">
        <h3 class="fw-bold display" >Student Applications</h3>

        <button
          @click="showForm()"
          :class="{ active: stuForm }"
          class="filter-btn btn text-dark px-5 py-2 d-flex"
        >
          <img :src="require('/src/assets/images/filter.svg')" />
          Filter
        </button>
      </div>
    </div>
    <div v-if="stuForm " class="px-4">
      <form @submit.prevent="SearchTrack">
        <div class="row mb-3 mb-3">
          <div class="col-md-3">
            <label for="firstName">First Name</label>
            <div class="input-group d-flex align-items-center trackform-input">
              <input
                v-model="firstName"
                type="text"
                class="form-control"
                id="firstName"
                name="firstName"
                required
              />
              <i
                v-if="firstName.length > 0"
                class="pi pi-times form-btna"
                type="button"
                @click="() => (firstName = '')"
              ></i>
            </div>
          </div>
          <div class="col-md-3">
            <label for="lastName">Last Name</label>
            <div class="input-group d-flex align-items-center trackform-input">
              <input
                v-model="lastName"
                type="text"
                id="lastName"
                name="lastName"
                required
                class="form-control"
              />
              <i
                v-if="lastName.length > 0"
                class="pi pi-times form-btna"
                type="button"
                @click="() => (lastName = '')"
              ></i>
            </div>
          </div>
          <div class="col-md-3">
            <label for="emailAddr">Email Address</label>
            <div class="input-group d-flex align-items-center trackform-input">
              <input
                v-model="emailAddr"
                type="email"
                class="form-control"
                id="emailAddr"
                required
                name="emailAddr"
              />
              <i
                v-if="emailAddr.length > 0"
                class="pi pi-times form-btna"
                type="button"
                @click="() => (emailAddr = '')"
              ></i>
            </div>
          </div>
          <div class="col-md-3 d-flex align-self-end flex-row-reverse">
            <div>
              <div>
                <button @click="ClearForm()" class="btn btn-disabled py-2 px-4">
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3 d-flex justify-content-between">
          <div class="col-md-3">
            <label for="inputStatus">Status</label>
            <Dropdown
              v-model="selectedStatus"
              id="inputStatus"
              :options="studentStatus"
              optionLabel=""
              placeholder=""
              class="w-100"
              :default="studentStatus[0]"
            />
          </div>
          <div class="col-md-3 d-flex align-self-end flex-row-reverse p-0">
            <div>
              <button type="submit" class="btn search-btn">Search</button>
            </div>
          </div>
          <div class="col-md-auto d-flex align-self-end flex-row-reverse">
            <div></div>
          </div>
        </div>
      </form>
    </div>
    <hr />

    <div class="student-app px-4 mb-5 mx-auto position-relative">
      <div v-for="(student, index) in Student" :key="index">
        <StudentApplication :student="student" />
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import StudentApplication from '../../components/StudentApplication.vue';
import DashboardCard from '@/components/DashboardStat.vue';
import { Students } from '@/data'
export default {
  components: { Dropdown, StudentApplication, DashboardCard },
  data() {
    return {
      stuForm : false,
      selectedStatus: null,
      studentStatus: ['Rejected', 'Appproved', 'Wating Review'],
      firstName: '',
      lastName: '',
      emailAddr: '',
      Student: Students,
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
  methods: {
    showForm() {
      this.stuForm  = !this.stuForm ;
    },

    ClearForm() {
      this.firstName = '';
      this.lastName = '';
      this.emailAddr = '';
      this.selectedStatus = null;
    },

  },
};
</script>

<style lang="scss" scoped>
$primary: #fac515;
$warning: #fdb022;
$scrollbar-thumb-bg: #dc6803;
$scrollbar-color: #f79009;
$gray: #d0d5dd;
::v-deep(#inputStatus.p-dropdown) {
  .p-dropdown-items {
    background-color: red !important;
    border-bottom: 1px solid #fac515;
  }
  .p-dropdown-panel .p-dropdown-items .p-highlight {
    color: #495057;
    background: #f70909;
  }
  // .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
  //   color: #5de40f;
  //   background: #e70c30;
  // }
}
/** input field hack to ensure the clear btn within the input fields are always circular **/
.input-group
  > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: 0px;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
}
.trackform-input {
  input {
    padding-right: 40px;
  }
  .form-btna {
    position: absolute;
    right: 10px;
    z-index: 5;
    padding: 4px;
    border: 1px solid #98a2b3;
    border-radius: 100%;
    font-size: 10px;
    background-color: #98a2b3;
    color: white;
  }
}
::v-deep(#inputStatus.p-dropdown-panel) {
  .p-dropdown-items {
    background-color: red !important;
    border-bottom: 1px solid #fac515;
  }
  .p-dropdown-items .p-highlight {
    color: #495057;
    background: #f70909 !important;
  }
}
.active {
  background-color: $primary !important;
}
.filter-btn {
  background-color: $gray;
}
.text-xs {
  font-size: 0.85rem !important;
}
</style>
