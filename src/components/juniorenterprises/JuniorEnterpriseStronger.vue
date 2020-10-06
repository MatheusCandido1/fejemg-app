<template>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
                <div class="card card-statistics social-card card-default ">
                  <div v-bind:style="getHeader(Math.min(this.porc_fat,this.porc_proj,this.porc_mem)) ? 'background-color: #198ae3; color: white' : ''"   class="card-header header-sm">
                    <div class="d-flex align-items-center">
                      <div class="wrapper d-flex align-items-center media-info text-twitter">
                      </div>
                      <td  class="pl-0"><h5 class="mb-0 font-weight-medium">Alto Crescimento</h5></td>
                          <div class="wrapper ml-auto action-bar">                         
                          <div v-if="Math.min(this.porc_fat,this.porc_proj,this.porc_mem)" :class="getClass(Math.min(this.porc_fat,this.porc_proj,this.porc_mem))">{{Math.min(this.porc_fat,this.porc_proj,this.porc_mem).toFixed(2)}}%</div>
                          <div v-if="Math.min(this.porc_eve,this.porc_con) == 0" :class="getClass(Math.min(this.porc_eve,this.porc_con))">0%</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                      <div class="template-demo">
                          <h4>Faturamento</h4>
                      <div class="d-flex justify-content-between">
                        <small >R$ {{soma_fat}} </small>
                        <small>R$ {{meta_fat}} </small>
                      </div>
                      <div class="progress progress-lg mt-2">
                        <div :class="getLight(porc_fat)" role="progressbar" :style="{ 'width': porc_fat+'%'}"  aria-valuemin="0" aria-valuemax="100">{{Math.min(porc_fat).toFixed(2)}}%</div>

                      </div>
                      
                    </div>
                    <div class="template-demo">
                          <h4>Projetos</h4>
                      <div class="d-flex justify-content-between">
                        <small> {{soma_proj}} </small>
                        <small> {{meta_proj}}</small>
                      </div>
                      <div class="progress progress-lg mt-2">
                        <div  :class="getLight(porc_proj)" role="progressbar" :style="{ 'width': porc_proj+'%'}"  aria-valuemin="0" aria-valuemax="100">{{Math.min(porc_proj).toFixed(2)}}%</div>
                      </div>
                    </div>
                    <div class="template-demo">
                          <h4> % Membros que executam</h4>
                      <div class="d-flex justify-content-between">
                        <small>{{mem_fat }}% </small>
                        <small>{{mem_meta}}%</small>
                      </div>
                      <div class="progress progress-lg mt-2">
                              <div  :class="getLight(porc_mem)" role="progressbar" :style="{ 'width': porc_mem+'%'}"  aria-valuemin="0" aria-valuemax="100">{{Math.min(porc_mem).toFixed(2)}}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'JuniorEnterpriseStronger',
    props:['soma_fat','soma_proj','meta_fat', 'meta_proj', 'porc_fat', 'porc_proj','mem_meta','mem_fat','porc_mem'],
    data () {
    return {
    }
  },
  components:{
  },
  mounted() {
  },
  methods: {
    getClass(x){
      
     var d = new Date();
      var n = d.getMonth();
     
      if(x >= ((n+1) * 8.333333) && x < 100)
      {
        console.log((n+1) * 8.333333);
        return "badge badge-pill badge-success"
      }
      if (x >= (n * 8.333333) && x < ((n+1) * 8.333333)){ 
        return "badge badge-pill badge-warning"
      }if(x < (n * 8.333333)){
        return "badge badge-pill badge-danger"
      }
      if(x >= 100)
      {
        return "badge badge-pill badge-info"
      }
    },
    getLight(y){
      var d = new Date();
      var n = d.getMonth();
      if(y >= 100)
      {
        if(Math.min(this.porc_fat,this.porc_proj,this.porc_mem) >= 100){
        return "progress-bar bg-info"
        }
        else{
        return "progress-bar bg-success"
        }
      }
      if(y >= ((n+1) * 8.333333) && y < 100)
      {
        return "progress-bar bg-success"
      }
      if (y >= (n * 8.333333) && y < ((n+1) * 8.333333)){ 
        return "progress-bar bg-warning"
      }if(y < (n * 8.333333)){
        return "progress-bar bg-danger"
      }
    },
    getHeader(z){
      if(z >= 100)
      {
        return true
      }
        return false
    }
  }
}
</script>

<style scoped>

</style>