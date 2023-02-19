<template lang="html">
  <div class="container">
    <ModalResend
      :head="otpSent.head"
      :img="otpSent.img"
      :subText="otpSent.subText"
    />
    <ModalSuccessfull
      :head="otpVerify.head"
      :img="otpVerify.img"
      :subText="otpVerify.subText"
    />
    <div class="verify-otp">
      <div class="col-lg-6 mx-auto">
        <div class="mx-auto py-2">
          <img
            :src="require('/src/assets/images/mailbox-icon.svg')"
            alt=""
            srcset=""
          />
        </div>
        <div class="text-">
          <h2>Please Verify OTP code</h2>
          <p>The OTP code has been sent to your registered email address.</p>
        </div>
        <form class="row g-3 pt-3 position-relative justify-content-center">
          <div class="d-flex justify-content-center otp-box mx-2">

            <v-otp-input
              ref="otpInput"
              input-classes="otp-input"
              separator=""
              :num-inputs="4"
              :should-auto-focus="true"
              :is-input-num="true"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
          </div>
          <div class="col-7 pt-3">
            <button
              type="button"
              @click.stop.prevent
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="btn primary-btn col-12 py-2 px-5"
            >
              Verify OTP Code
            </button>
          </div>
          <p class="pt-3">
            Didn’t receive the email?
            <span
              class="text-blue cursor"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              >Click to resend</span
            >
          </p>

          <h6 @click="home()" class="cursor">
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
import ModalResend from "/src/components/ResendModal.vue";
import ModalSuccessfull from "/src/components/OtpSuccessful.vue";
export default {
  components: { ModalResend, ModalSuccessfull },
  data() {
    return {
      otpSent: {
        head: "OTP Sent",
        img: "sent-success-icon.svg",
        subText: "Your verified emailaddress has received an OTP code.",
      },
      otpVerify: {
        head: "OTP verified",
        img: "otp-successfull.svg",
        subText: "Your OTP code has been verified.",
      },
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    handleOnComplete(value) {
      console.log("OTP completed: ", value);
    },
    handleOnChange(value) {
      console.log("OTP changed: ", value);
    },
  },
};
</script>
<style lang=""></style>
