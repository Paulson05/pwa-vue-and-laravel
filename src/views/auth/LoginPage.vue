<template lang="html">
    <div class="main-container">

    
    
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="banner position-relative">
            <img
              :src="require('/src/assets/images/banner.png')"
              height="100%"
              width="100%"
              alt=""
            />
            <div class="inner-login"></div>
          </div>
        </div>
        <div
          class="col-xl-3 col-lg-4 mx-auto col-md-5 col-sm-5 align-self-center"
        >
          <div class="form">
            <div class="">
              <div class="">
                <h2>Welcome Back</h2>
                <p>Welcome back! Please enter your details.</p>
                <form class="row g-3 pt-4 position-relative">
                  <div class="col-md-12">
                    <label for="inputEmail4" class="form-label"
                      >Login With Your ID</label
                    >
                    <input
                      v-model.lazy="form.userId"
                      type="text"
                      class="form-control p-2"
                      id="userId"
                      @click="clearText"
                      placeholder="Please enter the paramount ID"
                    />
                    <span
                      @click="deleteText"
                      v-show="showIcon"
                      class="h4 position-absolute top-0 end-0 login-toggle"
                    >
                      <ion-icon name="close-circle"></ion-icon>
                    </span>
                  </div>
                  <div class="col-md-12 position-relative">
                    <label for="inputPassword4" class="form-label"
                      >Password</label
                    >
                    <input
                      v-model.lazy="form.userPassword"
                      type="password"
                      class="form-control p-2"
                      id="password"
                      placeholder="Please enter password"
                    />
                    <span
                      class="h4 position-absolute top-0 end-0 password-toggle"
                    >
                      <ion-icon
                        id="closeEye"
                        class="d-none"
                        name="eye"
                        @click="togglePassword()"
                      ></ion-icon>
                      <ion-icon
                        id="openEye"
                        name="eye-off"
                        @click="togglePassword()"
                      ></ion-icon>
                    </span>
                    <div class="my-3 text-center">
                      <router-link to="/forgot-password">
                        Forget Password
                      </router-link>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <button
                      :disabled="isDisabled"
                      :class="
                        isDisabled
                          ? 'btn btn-disabled col-12 py-2'
                          : 'btn primary-btn col-12 py-2'
                      "
                      @click.stop.prevent="submit()"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
     
      export default {
        components: {
        
        },
        
        data() {
  
          return {
                  form: {
                      userId: "",
                      userPassword: null,
                  },
                  isDisabled: true,
                  showIcon: false,
              };
          },
          methods: {
              togglePassword() {
                  let closeEye = document.querySelector("#closeEye");
                  let openEye = document.querySelector("#openEye");
                  let password = document.querySelector("#password");
                  const type =
                      password.getAttribute("type") === "password"
                          ? "text"
                          : "password";
                  openEye.classList.add("d-none");
                  if (closeEye.classList.contains("d-none")) {
                      closeEye.classList.remove("d-none");
                      openEye.classList.add("d-none");
                      password.setAttribute("type", type);
                  } else if (openEye.classList.contains("d-none")) {
                      openEye.classList.remove("d-none");
                      closeEye.classList.add("d-none");
                      password.setAttribute("type", type);
                  }
              },
  
              submit() {
                  // this.$router.push("/email-verification");
                  // this.$axios.post('login', {unique_id: this.form.userId, password: this.form.userPassword})
                  const authSotre = useAuthStore()
                  authSotre.login(this.form.userId, this.form.userPassword)
                  // useAuthStore().login(this.form.userId, this.form.userPassword)
                  // HTTP.post('login', {unique_id: this.form.userId, password: this.form.userPassword}).then(res => console.log(res)).error((err) => alert(err))
              },
              dashbaord() {
                  localStorage.setItem("user", "isLoggedin");
                  return this.$router.push("/dashboard");
              },
              clearText() {
                  this.showIcon = true;
              },
  
              deleteText() {
                  console.log("hello");
                  this.form.userId = "";
                  this.showIcon = false;
                  this.isDisabled = true;
              },
              terms() {
                  this.$router.push("terms-privacy");
              },
          },
  
          watch: {
              form: {
                  handler(newValue) {
                      console.log(newValue.userPassword, newValue.userId);
                      if (newValue.userId !== null || "") {
                          this.isDisabled = false;
                      } else if (newValue.userID === "" || null) {
                          this.isDisabled = true;
                      }
                  },
                  deep: true,
              },
          },
  
          mounted() {
              document
                  .getElementById("userId")
                  .addEventListener("keydown", function (e) {
                      if (e.which === 38 || e.which === 40) {
                          e.preventDefault();
                      }
                  });
          },
      };
  </script>
  <style lang=""></style>
  