<template lang="">
  <div class="container">
    <ModalSuccessfull
      :head="otpVerify.head"
      :img="otpVerify.img"
      :subText="otpVerify.subText"
      :url="otpVerify.url"
      :click="otpVerify.click"
    />
    <div class="forgot-password">
      <div class="col-lg-6 mx-auto">
        <div class="mx-auto py-3 text-center">
          <img
            :src="require('/src/assets/images/key-icon.svg')"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-lg-10 mx-auto text-center">
          <h2>Set new password</h2>
          <p>
            Your new password must be different to previously used passwords.
          </p>
        </div>
        <form class="row g-3 pt-3 position-relative justify-content-center">
          <div class="col-md-7 pt-3">
            <label for="inputEmail4" class="form-label">Password</label>
            <input
              type="text"
              class="form-control p-2"
              id="userId"
              placeholder="Please enter password"
            />
          </div>
          <div class="col-md-7 pt-3">
            <label for="inputEmail4" class="form-label">Confirm Password</label>
            <input
              type="text"
              class="form-control p-2"
              id="userId"
              placeholder="Please Confirm password"
            />
          </div>
          <div class="col-md-7 text-small">
            <small>Must be at least 8 character long</small> <br>
            <small>Include at least 1 uppercase letter</small> <br>
            <small>Include at least 1 numeric</small>
          </div>
          <div class="col-7 pt-3">
            <button
              type="button"
              @click.stop.prevent="submit()" 
              class="btn primary-btn col-12 py-2 px-5"
            >
             Reset password
            </button>
          </div>
          <h6 @click="home()" class="cursor text-center mt-5">
            <span class="px-2"
              ><img :src="require('/src/assets/images/arrow-left.svg')" alt=""
            /></span>
            Back to log in
          </h6>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import ModalSuccessfull from "/src/components/OtpSuccessful.vue";
export default {
  components: { ModalSuccessfull },
  data() {
    return {
      otpVerify: {
        head: "Reset Link Sent",
        img: "sent-success-icon.svg",
        subText: "We sent a password reset link to nisha@gmail.com",
        url: "email-verification",
        click: "Click here",
      },
    };
  },
  methods: {
    submit() {
      this.$router.push("/confirm-reset-password");
    },
  },
};
</script>
<style lang=""></style>
