<template>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
                <div class="card card-statistics social-card card-default">
                  <div v-bind:style="getHeader(Math.min(this.porc_eve,this.porc_con)) ? 'background-color: #198ae3; color: white' : ''"   class="card-header header-sm">
                    <div class="d-flex align-items-center">
                      <div class="wrapper d-flex align-items-center media-info text-twitter">
                      </div>
                      <td class="pl-0"><h5 class="mb-0 font-weight-medium">Conectado</h5></td>
                                            <div class="wrapper ml-auto action-bar">
                          <div v-if="Math.min(this.porc_eve,this.porc_con) == 0" :class="getClass(Math.min(this.porc_eve,this.porc_con))">0%</div>
                          <div v-if="Math.min(this.porc_eve,this.porc_con)" :class="getClass(Math.min(this.porc_eve,this.porc_con))">{{Math.min(this.porc_con,this.porc_eve).toFixed(2)}}%</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                      <div class="template-demo">
                          <h4>Ações compartilhadas</h4>
                      <div class="d-flex justify-content-between">
                        <small>{{soma_con}}</small>
                        <small>{{meta_con}} </small>
                      </div>
                      <div class="progress progress-lg mt-2">
                        <div :class="getLight(porc_con)" role="progressbar" :style="{ 'width': porc_con+'%'}"  aria-valuemin="0" aria-valuemax="100">{{Math.min(porc_con).toFixed(2)}}%</div>
                      </div>
                    </div>
                    <div class="template-demo">
                          <h4>Participação em eventos</h4>
                      <div class="d-flex justify-content-between">
                        <small>{{soma_eve}}%</small>
                        <small>{{meta_eve}}% </small>
                      </div>
                      <div class="progress progress-lg mt-2">
                        <div :class="getLight(porc_eve)" role="progressbar" :style="{ 'width': porc_eve+'%'}"  aria-valuemin="0" aria-valuemax="100">{{Math.min(porc_eve).toFixed(2)}}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'JuniorEnterpriseConneceted',
    props:['meta_con','soma_con','porc_con', 'soma_eve', 'meta_eve', 'porc_eve','is_ac'],
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
        if(this.is_ac)
        return "badge badge-pill badge-info"

        return "badge badge-pill badge-success"


      }
    },
    getLight(y){
      if(y >= 100)
      {
        if(Math.min(this.porc_con,this.porc_eve) >= 100){
          if(this.is_ac){
        return "progress-bar bg-info"
          } else {
          return "progress-bar bg-success"
          }
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
        if(this.is_ac)
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