<template>
  <div class="accordion" id="accordionExample">
  <!-- First Item -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div class=" pt-2">
                <p class=" fs-6">Password</p>
        </div>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!@#$%)

       <div class="row">
        <div class="col-lg-7 col-md-7 col-sm-7">
        <form class="row g-3 pt-3 position-relative">
          <div class="col-md-12 pt-3">
            <label for="inputEmail4" class="form-label">Current Password</label>
            <input
              type="text"
              class="form-control p-2"
              id="userId"
              placeholder="**************************"
            />
          </div>
          <div class="col-md-12 pt-1">
            <label for="inputEmail4" class="form-label">New Password</label>
            <input
              type="text"
              class="form-control p-2"
              id="userId"
              placeholder="**************************"
            />
          </div>
          <div class="col-md-12 pt-1">
            <label for="inputEmail4" class="form-label">Retype Your Password</label>
            <input
              type="text"
              class="form-control p-2 mb-4"
              id="userId"
              placeholder="**************************"
            />
          </div>
        </form>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-4 ms-5 mt-5 float-sm-end">
        <div  class="col-12 py-2 px-5">
          <div class="">
          <img
            :src="require('/src/assets/images/password-meter.png')"
            alt="logo"
            width="210"
          />
          </div>
          <div class="text-small mt-4">
              <img :src="require('/src/assets/images/tick.png')" alt="logo" width="10.83" />&nbsp;
              <small class="small-password-text">Must be at least 8 character long</small> <br>
              <img :src="require('/src/assets/images/tick.png')" alt="logo" width="10.83" />&nbsp;
              <small class="small-password-text">Include at least 1 uppercase letter</small> <br>
              <img :src="require('/src/assets/images/tick.png')" alt="logo" width="10.83" />&nbsp;
              <small class="small-password-text">Include at least 1 numeric</small> <br>
              
          </div>
        </div>
         <div class=" pt-3 mt-5">
            <button disabled
              type="button"
              class="btn primary-btn col-12 mx-4 py-2 px-5 float-end" style="width:214px;"
            >
             Save Changes
            </button>
          </div>
        </div>
       </div>
      </div>
    </div>
  </div>
  <!-- Second Item -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Login Activity
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="cards-container">
          <div class="cards">
              <div v-for="num of [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="num">
                  <div class="wrapper">
                    <div class="card">
                      <div class="card-body">
                        <div class="text-container">
                            <div>
                              <span class="card-left-text">Ip Address</span>
                              <span class="card-right-text pb-2">78.123.543.98</span><br>
                            </div>
                            <div>
                              <span class="card-left-text">Location</span>
                              <span class="card-right-text pb-2">78.123.543.98</span><br>
                            </div>
                            <div>
                              <span class="card-left-text">Device</span>
                              <span class="card-right-text pb-2">78.123.543.98</span><br>
                            </div>
                            <div>
                              <span class="card-left-text">Time</span>
                              <span class="card-right-text pb-2">78.123.543.98</span><br>
                            </div>
                        </div>
                        <a href="#" class="card-button">That was not me</a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.left-pane{
  width: 49.75px;
  left: 53.75px;
  top: 0px;
  padding-left: -100px;
}
.small-password-text{
  height: 18px;
  font-weight: 400;
  font-size: 11px;
  line-height: 170%;

  letter-spacing: 0.004em;
  color: #12B76A;

}
div.cards-container {
    ::-webkit-scrollbar {
        width: 1px !important;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    .cards {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        margin-top: 3rem;
        max-width: calc(100% - 3px);

  
        }
    }
    .wrapper{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      gap: 20px;
      margin-right: 20px;
      width: 420px;
      height: 204px;
      left: 381px;
    }
    .card-button{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 20px;
      gap: 8px;
      width: 380px;
      height: 40px;
      color: #000000;
      background: #FAC515;
      border: 1px solid #FAC515;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;

    }

    .text-container{
      height: 104px;
      width: 380px;
      left: 20px;
      top: 20px;

    }

    .card-left-text{
      width: 74px;
      height: 20px;
      left: 20px;
      top: 20px;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      letter-spacing: 0.25px;

      /* Paramount Student Mobile App/ref/neutral/neutral50 */

      color: #747878;
    }
    .card-right-text{
      position: absolute;
      width: 97px;
      height: 20px;
      left: 303px;
      top: 20px;
      /* Paramount Student Mobile App/body2 */

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      text-align: right;
      letter-spacing: 0.25px;

      /* Paramount Student Mobile App/ref/neutral/neutral50 */

      color: #747878;
    }
</style>