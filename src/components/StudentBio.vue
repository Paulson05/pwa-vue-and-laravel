<template>
  <div class="container h-auto px-0 py-3">
    <div class="applications-main">
    

      <div>
        <StudentContact />
      </div>
      <div>
        <StudentEducation />
      </div>
      <div>
        <StudentDocument />
      </div>
      <div>
        <ChatBox />
      </div>
    </div>

  </div>
</template>


<script>
import StudentContact from '@/components/StudentContact.vue';
import StudentEducation from '@/components/StudentEducation.vue';
import ChatBox from '@./components/ChatBox.vue';
import StudentDocument from './StudentDocument.vue';


export default {

  name: "StudentBio",



  components: { StudentContact, StudentEducation, ChatBox, StudentDocument },
  data() {
    return {
      stuForm: false,
      selectedReview: null,
      AppliactionReview: ['No Apply yet', 'Applying', 'Got Admissions'],

    };



  }

}
</script>

<style scoped>
.container {
  margin-bottom: 60px;
}

</style>