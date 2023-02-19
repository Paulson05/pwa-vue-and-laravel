<template>
  <div class="container">

    
    <div class="col-12 " >
  
  <div class="applications-nav " >
    <h2 class="fw-bold ">My Profile</h2>
    <hr>
    
  </div>
<div class="container h-auto px-0 py-3 form-controll">
<div class="applications-main tab-content" id="pills-tabContent">
<div class=" show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
   <UniversityDetails/>
</div>



</div>
</div>




</div>
  </div>
    
  
   
   
  
   </template>
   <script>
  
   
  import UniversityDetails from "@/components/UniversityDetails.vue";

 
  
   
   export default {
     
      // components: { Dropdown,  },
     components: { UniversityDetails },
     data() {
       return {
       
         stuForm: false,
         selectedReview: null,
       
   
      
         
   
       };
   
     },
  
    
  
        
   
   };
   </script>>
   
   <style scoped>
   
   
  
  
  
  .label-text{margin: 10px;}
  .profile-image{
      background-color: #fceca6; 
      width:40%;
       height: 60px;
      padding-top: 2px; 
      margin-top: 10px;
      margin-bottom: 20px;
      padding-left: 10px; 
      border-radius: 6px;
  }
  .profile-image > h6{
       font-size:90%;
     
  }
  
  .label-text {
   font-size: 15px;
  }
  .textarea{
     width: 95%;
     margin-left: 10px;
  }
  .btn-container {
   padding: 2px;
  }
  
  .card-title {
  font-size: 12px;
  }
  .tab-container{
     height: 107px;
      border-bottom: 1px solid rgb(235, 233, 233);
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
   width: 95%;
   padding: 0.6rem;
   border: none;
   margin-left: 8px;
  
   background-color: gray;
  }
  
  
  .nav-link{
             color: grey;
  }
  .active{
               color: rgb(12, 11, 11)!important;
               font-weight: 600;
               background-color:rgb(247, 247, 242) !important;
               border-radius: 2px solid !important;
               border: 2px solid rgb(214, 160, 42) !important;
               
               
  }
  @media (max-width: 1024px) {
    .profile-image{
          width: 60%;
    }
          .profile-image > h6{
       
        font-size: 13px;
      }
      .profile-image > p{
       
        font-size: 1px;
      }
      }
    @media (max-width: 664px) {
    .profile-image{
          width: 70%;
    }
          .profile-image > h6{
       
        font-size: 12px;
       
      }
      
      }
  .nav-link > button{
                 color: red;
                 
           }
           .nav-link.active{
             background-color: #F9FAFB;
                  color: black;
                 
                  
           }
           .img-size {
   border-radius: 2px;
   background-color: gray;
   height: 80px;
   width: 70px;
  
  }
  
  
  </style>
  
  
  