<template lang="">
  <div class="container">
    <ModalSuccessfull
      :head="otpVerify.head"
      :img="otpVerify.img"
      :subText="otpVerify.subText"
      :url="otpVerify.url"
      :click ="otpVerify.click"
    />
    <div class="forgot-password">
      <div class="col-lg-6 mx-auto">
        <div class="mx-auto py-3 text-center">
          <img
            :src="require('/src/assets/images/mailbox-icon.svg')"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-lg-10 mx-auto text-center">
          <h2>Forgot Password?</h2>
          <p>
            Confirm the email address that you provided in your registration :
            n***@****.com
          </p>
        </div>
        <form class="row g-3 pt-3 position-relative justify-content-center">
          <div class="col-md-7">
            <label for="inputEmail4" class="form-label">Email ID</label>
            <input
              type="text"
              class="form-control p-2"
              id="userId"
              placeholder="Please enter Email ID"
            />
          </div>

          <div class="col-7 pt-4">
            <button
              type="button"
              @click.stop.prevent
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="btn primary-btn col-12 py-2 px-5"
            >
              Send
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
        url: 'reset-password',
        click: 'Click here'
      },
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang=""></style>
