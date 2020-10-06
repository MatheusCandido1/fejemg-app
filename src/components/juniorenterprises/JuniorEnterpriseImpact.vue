<template>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
                <div class="card card-statistics social-card card-default">
                  <div v-bind:style="getHeader(Math.min(this.porc_nps, this.porc_impacto)) ? 'background-color: #198ae3; color: white' : ''"   class="card-header header-sm">
                    <div class="d-flex align-items-center">
                      <div class="wrapper d-flex align-items-center media-info text-twitter">
                      </div>
                      <td class="pl-0"><h5 class="mb-0 font-weight-medium">Impacto</h5></td>
                                            <div class="wrapper ml-auto action-bar">
                                                   <div v-if="Math.min(this.porc_nps, this.porc_impacto) == 0" :class="getClass(Math.min(this.porc_nps, this.porc_impacto))">0%</div>
                          <div v-if="Math.min(this.porc_nps, this.porc_impacto)" :class="getClass(Math.min(this.porc_nps, this.porc_impacto))">{{Math.min(this.porc_nps, this.porc_impacto).toFixed(2)}}%</div>
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
                        <small>{{soma_impacto}}</small>
                        <small>{{meta_impacto}}</small>
                      </div>
                      <div class="progress progress-lg mt-2">
                        <div  :class="getLight(porc_impacto)" role="progressbar" :style="{ 'width': porc_impacto+'%'}"  aria-valuemin="0" aria-valuemax="100">{{Math.min(porc_impacto).toFixed(2)}}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'JuniorEnterpriseImpact',
    props:['meta_nps','soma_nps','porc_nps','soma_impacto','meta_impacto','porc_impacto', 'is_connected'],
    data () {
    return {
     
    }
  },
  components:{
  },
  methods: {
    getClass(x){
     var d = new Date();
      var n = d.getMonth();
      if(x >= ((n+1) * 8.333333) && x < 100)
      {
        return "badge badge-pill badge-success"
      }
      if (x >= (n * 8.333333) && x < ((n+1) * 8.333333)){ 
        return "badge badge-pill badge-warning"
      }if(x < (n * 8.333333)){
        return "badge badge-pill badge-danger"
      }
      if(x >= 100)
      {
        if(this.is_connected)
        return "badge badge-pill badge-info"

        return "badge badge-pill badge-success"
      }
    },
    getLight(y){
      
     var d = new Date();
      var n = d.getMonth();
      if(y >= 100)
      {
        if(Math.min(this.porc_nps, this.porc_impacto) >= 100){
          if(this.is_connected)
        return "progress-bar bg-info"

        
        return "progress-bar bg-success"
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
        if(this.is_connected)
        return true

        return false
      }
        return false
    }
  }
}
</script>

<style scoped>

</style>