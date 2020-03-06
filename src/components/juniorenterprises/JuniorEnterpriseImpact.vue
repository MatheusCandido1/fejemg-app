<template>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
                <div class="card card-statistics social-card card-default">
                  <div v-bind:style="getHeader(Math.min(this.porc_nps)) ? 'background-color: #198ae3; color: white' : ''"   class="card-header header-sm">
                    <div class="d-flex align-items-center">
                      <div class="wrapper d-flex align-items-center media-info text-twitter">
                      </div>
                      <td class="pl-0"><h5 class="mb-0 font-weight-medium">Impacto</h5></td>
                                            <div class="wrapper ml-auto action-bar">
                          <div v-if="Math.min(this.porc_nps)" :class="getClass(Math.min(this.porc_nps))">{{Math.min(this.porc_nps).toFixed(2)}}%</div>
                           <div v-if="Math.min(this.porc_nps) == 0" :class="getClass(Math.min(this.porc_nps))">0%</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                      <div class="template-demo">
                          <h4>NPS: {{meta_nps}}</h4>
                      <div class="d-flex justify-content-between">
                        <small>{{soma_nps}}</small>
                        <small>{{meta_nps}} </small>
                      </div>
                      <div class="progress progress-lg mt-2">
                        <div :class="getLight(porc_nps)" role="progressbar" :style="{ 'width': porc_nps+'%'}"  aria-valuemin="0" aria-valuemax="100">{{Math.min(porc_nps).toFixed(2)}}%</div>
                      </div>
                    </div>
                    <div class="template-demo">
                          <h4>Projetos de Impacto</h4>
                      <div class="d-flex justify-content-between">
                        <small>10</small>
                        <small>20 </small>
                      </div>
                      <div class="progress progress-lg mt-2">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 0%"  aria-valuemin="0" aria-valuemax="100">0.00%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'JuniorEnterpriseImpact',
    props:['meta_nps','soma_nps','porc_nps'],
    data () {
    return {
     
    }
  },
  components:{
  },
  methods: {
    getClass(x){
      if(x >= (6 * 8.333333) && x < 100)
      {
        return "badge badge-pill badge-success"
      }
      if (x >= (5 * 8.333333) && x < (6 * 8.333333)){ 
        return "badge badge-pill badge-warning"
      }if(x < (5 * 8.333333)){
        return "badge badge-pill badge-danger"
      }
      if(x >= 100)
      {
        return "badge badge-pill badge-info"
      }
    },
    getLight(y){
      if(y >= 100)
      {
        if(Math.min(this.porc_nps) >= 100){
        return "progress-bar bg-info"
        }
        else{
        return "progress-bar bg-success"
        }
      }
      if(y >= (6 * 8.333333) && y < 100)
      {
        return "progress-bar bg-success"
      }
      if (y >= (5 * 8.333333) && y < (6 * 8.333333)){ 
        return "progress-bar bg-warning"
      }if(y < (5 * 8.333333)){
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