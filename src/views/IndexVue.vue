


  <template lang="html">
  <div>
    
  <header class="header .d-md-lg-screens " data-header  >  
    <NavBar />
    
     <div class="buttom-search" >
      <ButtomSearch />
     </div>

    
  </header>





 

  





  <main style="margin-top: 150px;">
    <router-view></router-view>
  </main>


    
            
    <ButtomNavigator/>
  </div>
</template>



<script>

import ButtomNavigator from '@/components/ButtomNavigator';
import ButtomSearch from '@/components/ButtomSearch.vue';

import NavBar from '@/components/NavBar';

import { sidebarWidth } from '@/components/sidebar/state'

export default {
  components: { ButtomNavigator, NavBar, ButtomSearch },
  setup() {
    return { sidebarWidth }
  }
};
</script>
<style scoped>

</style>
<style>
.buttom-search{
  visibility: hidden;
}

@media screen and (min-width: 768px) {
  

  .menu-toggle-btn {
    display: block;
  }
  
}
@media only screen and (max-width: 600px) {
  .buttom-search{
  visibility: visible;
}
}

</style>