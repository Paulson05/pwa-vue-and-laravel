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
     
    
  </script>
  <style lang=""></style>
  