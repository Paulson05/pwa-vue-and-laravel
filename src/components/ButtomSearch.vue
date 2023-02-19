<template lang="html">
    <div style="background-color: red; border-radius: 5px; margin-top: ;">
        <div class="col-12 d-flex justify-content-between">
       <div >
        <img
                          :src="require('/src/assets/images/d-img.svg')"
                          alt="logo"
                          width="60"
                          height="20"
                          />
       </div>
             <div class="col-8 pt-4" >
              
                <div class="input-group" style="background-color: red; border-radius: 5px;">
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
              <div class="col-8" style="background-color:  transparent !important; border: transparent; outline: none;">
                <input
                type="text"
                name="search"
                class="form-control border-left-0 "
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
               
              />
              </div>
                </div>
              </div>
       <div class="pt-4 row" >
        
        <div class="col">
          <img :src="require('/src/assets/images/d-board/settings.svg')"
                                        alt="logo" />
        </div>
          <div class="col">
            <ul class="d-flex fs-6">
            <li class="cursor" >
              <img
                class="px-2"
                :src="require('/src/assets/images/d-board/notificaition.svg')"
                alt=""
               
              />
             
            
            </li>
           
          </ul>
          </div>
       
       </div>
      </div>
    </div>
  </template>

  <style>

    


  
   

  
  </style>
  