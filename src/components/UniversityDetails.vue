<template>
    <div class="container h-auto py-3 m-4 p-4">
        <!-- Read-Only Form -->
        <div class="col-1  ml-3" style="padding-left: 1px;">
                            <img
                          :src="require('/src/assets/images/d-img.svg')"
                          alt="logo"
                          width="60"
                          />
                          <span>onyebuchi</span>
         </div>
         <div class="form-group" style=" width: 90%;">
                   <label class="label-text">About me</label>
                   <Textarea class="form-control textarea" placeholder="The uiversity of Albatan also know as U A is a public research university located in edmonton alberta canada it was founded in 1908 by alexender cameroun rutherford" :autoResize="true" rows="4" cols="5"></Textarea>
                 </div>
                 <div class="form-group" style=" width: 90%;">
                   <label class="label-text">Intrest</label>
                   <Textarea class="form-control textarea" placeholder="football, cheers" :autoResize="true" rows="4" cols="5"></Textarea>
                 </div>
                 <div class="form-group" style=" width: 90%;">
                   <label class="label-text">Emai;</label>
                   <input type="text" placeholder="hello" class="form-control input px-2 mx-2" style="height: 40px;">
                  
                 </div>
               
        <div class="row" style=" width: 97%;">

            
            
            <div class="col-sm-6 " style="">
                <div class="form-group">
                    
            <label class="label-text" for="usr">User Name</label>
            <input type="text" placeholder="hello" class="form-control input px-2 mx-2" style="height: 40px;">

            
        </div>
            </div>
            <div class="col-sm-6 ">
                <div class="form-group">
            <label class="label-text" for="usr">Phone Number</label>
            <input type="text" placeholder="hello" class="form-control input px-2 mx-2" style="height: 40px;">

            
        </div>
            </div>

        </div>
         <div>
            
         </div>
         
         
        


        
           
        
            


           <div class="d-flex justify-content-between row pt-4">
         
                    <div class="col-4 ">
                    <button class="backgroundImage">Save</button>
                    </div>
           </div>


       

       

        
       
    </div>
</template>

<script>
    // export default {
    //     data() {
    //         return {
    //             vueTel: {
    //                 phone: "",
    //     props: {
    //       clearable: true,
    //       fetchCountry: true,
    //       preferredCountries: ["US", "GB"],
    //       noExample: false,
    //       translations: {
    //         countrySelectorLabel: "Country code",
    //         countrySelectorError: "Error",
    //         phoneNumberLabel: "Enter your phone",
    //         example: "Example:"
    //       }
    //     }
    //   },
    //         }
    //     },
    // };
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