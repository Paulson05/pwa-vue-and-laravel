<template lang="html">
    <div style=" background-color: rgba(224, 178, 79, 0.918); border-radius: 5px; margin-top: 0 !important ;">
        <div class="d-flex justify-content-between">
       <div >
        <img
                          :src="require('/src/assets/images/d-img.svg')"
                          alt="logo"
                          width="60"
                          height="20"
                          />
       </div>
             <div class="col-8 pt-4" >
              
                <div class="input-group" style="background-color: none !important; border-radius: 5px;">
              <div class="input-group-prepend">
                <span
                  type="button"
                  class="input-icon input-group-text bg-transparent border-0"
                  id="basic-addon1"
                >
                  <img
                    :src="require(`/src/assets/images/search_icon.png`)"
                    alt=""
                /></span>
              </div>
              <div class="col-8" >
                <input
                type="text"
                name="search"
                class="form-control border-left-0 "
                placeholder="Search...."
              
               
              />
              </div>
                </div>
              </div>
              <div class="col-2 pt-4">
            <ul class="">
            <li class="cursor" >
              <img
                class=""
                :src="require('/src/assets/images/unread_icon.png')"
                alt=""
               
              />
             
            
            </li>
           
          </ul>
          </div>
      </div>
    </div>
  </template>

  <style>

    .btn {
      background-color: rgba(33, 33, 36, 0.918);
    }


  
   

  
  </style>
  