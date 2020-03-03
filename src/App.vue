<template>
<div>
          <router-view/>
          <loading :active.sync="isLoading" 
        :can-cancel="false"
        loader="dots"
        color="blue"
        :is-full-page="fullPage"></loading>
          </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
     isLoading: false,
     fullPage: true
    }
  },
  name: 'App',
  components: {
    Loading
  },
  methods: {
    
            startProgress() {
                this.isLoading = true;
            },
            stopProgress(){
                this.isLoading = false;
            }

        }
}
</script>

<style>

</style>



