<template lang="html">
  <div class="card my-2">
       <div class="card-body">
       <h1 class="card-title">Documents</h1>
       <div class="container px-0">
            <div class="  ">
               <div class="row d-flex flex-row   " v-for="doc in documents" :key="doc.id">
               <div class="col-1  m-6">
                 <div class="img-size  m-2">

                 </div>
               </div>
               <div class=" col-6 m-2" style="padding-left: 60px;">
                 <p class="m-1" style="font-size: 12px !important;">{{doc.text}}</p>
                 <p class="m-1 text-secondary text-xs" style="font-size: 12px !important;" >
                   {{doc.size}}
                 </p>
                 <p class="m-0 text-secondary text-xs" style="font-size: 12px !important;">
                   {{doc.date}}
                 </p>
               </div>
               <div class="col-1" style="padding-right: 8%;">
                 <button class="view-btn btn text-dark m-3 px-2 py-2 d-flex">
                   <img class="me-2" :src="require('/src/assets/images/d-board/download.svg')" alt="">
               </button>
               </div>
               <div class="col-1" style="padding-left: 4%">
                 <button class="view-btn btn text-dark m-3 px-2 py-2 d-flex">
                   <img class="me-2" :src="require('/src/assets/images/d-board/view.svg')" alt="">
               </button>
               </div>
               
             </div>
              
           
              
          
            </div>
       </div>
     </div>
   </div>
</template>

<script>



export default {
  name: "StudentDocument",
  data() {
     return {
     
       stuForm: false,
       selectedReview: null,
       AppliactionReview: ['Approved', 'Rejected', 'Got Admissions'],
 
       documents: [
         {
           id: 1,
           text: "High School Grade MarkSheet",
           size: "4.00mb",
           date: "25/05/2022",
 
         },
         {
           id: 2,
           text: "High School Certificates",
           size: "4.00mb",
           date: "25/05/2022",
 
         },
         {
           id: 3,
           text: "Formal Photo",
           size: "4.00mb",
           date: "25/05/2022",
 
         },
         {
           id: 4,
           text: "Passport font",
           size: "4.00mb",
           date: "25/05/2022",
 
         },
         {
           id: 5,
           text: "National ID Photo",
           size: "4.00mb",
           date: "25/05/2022",
 
         },
 
 
 
 
       ],
       
 
     };
 
   }, 

};
</script>>

<style scoped>
.container {
  margin-bottom: 60px;
}


.application-review div {
  margin-bottom: 10px;
}


.img-size {
  border-radius: 2px;
  background-color: gray;
  height: 80px;
  width: 70px;
}

.label-text {
  font-size: 15px;
}

.btn-container {
  padding: 2px;
}



.view-btn {
  background-color: #EAECF0;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* .view-btn:hover {
    color: rgb(245, 245, 245) !important;
    box-shadow: inset 150px 0 0 0 #fac515 !important;
} */

.view-btn img {
  width: 20px;
}

.save-next-btn {
  border-radius: 4px;
  width: 100%;
  padding: 0.6rem;
  border: none;
  background-color: #FAC515;
}
</style>