<template>
    <div class="row">
    
   <div class="col-sm-6 ">
     <h2 style="font-size: 100%;">Student Applications</h2>
     <div class="card ">
              <div class="application-review py "  >
                 
                 <div style="width:90%; margin: auto;">
                    <h6 class="text-dark pt-2 ">programme to promote</h6>
                 <h6 class="text-dark pt-2 ">choose a  programme code</h6>
                    <Dropdown style="border-radius: 10px; " v-model="selectedReview" :options="AppliactionReview"
                       optionLabel="" placeholder="Waiting  Review" class="w-100" :default="AppliactionReview[0]" />
                 </div>
                
               </div>
       
     </div>

     <div class="card  pt-3 mt-2">
        <div style="width:90%; margin: auto;">
                    <h6 class="text-dark pt-2 ">Audience</h6>
                 <p class="text-dark pt-2 " style="font-size: 10px !important;">Who shouldd see your ads</p>
                    
                 </div>
                
       
     </div>
     <div class="card pt-3 mt-2">
        <div class="py-4 px-4 ">
            <h6 class="text-dark pt-2 ">Duration</h6>

            <div class="row d-flex justify-content-between p-2">

                <div class= "col-5" style="background-color: grey; padding-left: 10px !important;">
                    <div class=" d-flex justify-content-between row col-12">
                            <div class= "col-5">
                                <p>Days</p>
                                <p>7</P>
                            </div>
                            <div class= "col-1">
                                <span class="p-input-icon-left  p-input-icon-right  p-float-label">
                    <i class="pi">
                        <img
                            :src="require('/src/assets/images/country-img.svg')"
                            alt="input-lock"
                        />
                    </i>
                  
                    <i class="pi">
                        <img
                            :src="require('/src/assets/images/lock-icon.svg')"
                            alt="input-lock"
                        />
                    </i>
                </span>
                           </div>
                    </div>
                </div>
                <div class= "col-5" style="background-color: grey; padding-left: 10px !important;">
                    <div class=" d-flex justify-content-between row col-12">
                            <div class= "col-6">
                                <p style="font-size: 10px !important;">End Dates</p>
                                <p  style="font-size: 11px !important;" >Nov-2, 2022</P>
                            </div>
                            <div class= "col-1">
                                <span class="p-input-icon-left  p-input-icon-right  p-float-label">
                    <i class="pi">
                        <img
                            :src="require('/src/assets/images/country-img.svg')"
                            alt="input-lock"
                        />
                    </i>
                  
                    
                </span>
                           </div>
                    </div>
                </div>

            </div>
                 <h6 class="text-dark pt-1 ">Total Budget</h6>
                 <p class="text-dark pt-1 " style="font-size: 10px !important;">your payment will be processed n uss($)</p>
                 <h6 class="text-dark pt-1 ">Daily Budget</h6>
                 <p class="text-dark text-center pt-2 " style="font-size: 10px !important;">Estimate 7k-9k reached per day</p>

                </div>
       
     </div>
            
              
            
     
   </div>
   <div class="col-sm-6 mt-4 " >
  
          

    <div class="card shadow ">
        <div class="application-review py "  >
                 
                 <div style="width:90%; margin: auto;">
                    <h6 class="text-dark pt-2 ">Estimate daily Result</h6>
                    
                    <h6 class="card-title text-truncate px-3 py-2 row mb-0">
                        <span class="text-secondary col-3 text-dark text-truncate p-0"
                        >People Recievced:</span
                        >
                        <span class="col text-truncate  ">7k-10k</span>
                   </h6>
                   <hr style=" border:1px solid #F79009">
                    <h6 class="text-dark pt-2 ">Payment summary</h6>
                    <h6 class="card-title text-truncate px-3 py-3 row mb-0">
                        <span class="text-secondary col-6 text-dark text-truncate p-0"
                        >Your Promotion will run for 7 days:</span
                        >
                        <span class="col text-truncate  ">7k-10k</span>
                   </h6>
                   <h6 class="card-title text-truncate px-3 py-2 row mb-0">
                        <span class="text-secondary col-3 text-dark text-truncate p-0"
                        >Total Budget:</span
                        >
                        <span class="col text-truncate  ">$10000</span>
                   </h6>
                   <h6 class="card-title text-truncate px-3 py-2 row mb-0">
                        <span class="text-secondary col-3 text-dark text-truncate p-0"
                        >Total amount:</span
                        >
                        <span class="col text-truncate  ">$10000</span>
                   </h6>
                 </div>
                
               </div>
       
     
   </div>
   
     
  
     
   </div>
   
  </div>
   </template>
   <script>
   import Dropdown from 'primevue/dropdown';
 
  
   
   export default {
     
      // components: { Dropdown,  },
     components: {Dropdown,  },
     data() {
       return {
       
         stuForm: false,
         selectedReview: null,
         AppliactionReview: ['Approved' , 'Rejected', 'Got Admissions'],
   
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
               background-color: transparent !important;
               border-radius: 0px !important;
               border-bottom: 2px solid rgb(134, 132, 132) !important;
               
               
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
  
  
  