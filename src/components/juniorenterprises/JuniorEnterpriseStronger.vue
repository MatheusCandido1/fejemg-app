<template>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
                <div class="card card-statistics social-card card-default">
                  <div class="card-header header-sm">
                    <div class="d-flex align-items-center">
                      <div class="wrapper d-flex align-items-center media-info text-twitter">
                      </div>
                      <td class="pl-0"><h5 class="mb-0 font-weight-medium">Alto Crescimento</h5></td>
                          <div class="wrapper ml-auto action-bar">                         
                          <div v-if="porc_proj <= porc_fat && porc_proj <= porc_mem" :class="getClassProj(porc_proj)">{{porc_proj}}%</div>
                          <div v-if="porc_mem < porc_fat && porc_mem < porc_proj" :class="getClassMem(porc_mem)">{{porc_mem}}%</div>                 
                          <div v-if="porc_fat <= porc_proj && porc_fat <= porc_mem" :class="getClassFat(porc_fat)">{{porc_fat}}%</div> 
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
                        <div v-if="porc_fat >= (6 * 8.333333)" class="progress-bar bg-success" role="progressbar" :style="{ 'width': porc_fat+'%'}"  aria-valuemin="0" aria-valuemax="100">{{porc_fat}}%</div>
                        <div v-if="porc_fat >= (5 * 8.333333) && porc_fat < (6 * 8.333333)" class="progress-bar bg-warning" role="progressbar" :style="{ 'width': porc_fat+'%'}"  aria-valuemin="0" aria-valuemax="100">{{porc_fat}}%</div>
                        <div v-if="porc_fat < (5 * 8.333333)" class="progress-bar bg-danger" role="progressbar" :style="{ 'width': porc_fat+'%'}"  aria-valuemin="0" aria-valuemax="100">{{porc_fat}}%</div>
                      </div>
                      
                    </div>
                    <div class="template-demo">
                          <h4>Projetos</h4>
                      <div class="d-flex justify-content-between">
                        <small> {{soma_proj}} </small>
                        <small> {{meta_proj}}</small>
                      </div>
                      <div class="progress progress-lg mt-2">
                        <div v-if="porc_proj >= (6 * 8.333333)" class="progress-bar bg-success" role="progressbar" :style="{ 'width': porc_proj+'%'}"  aria-valuemin="0" aria-valuemax="100">{{porc_proj}}%</div>
                        <div v-if="porc_proj >= (5 * 8.333333) && porc_proj < (6 * 8.333333)" class="progress-bar bg-warning" role="progressbar" :style="{ 'width': porc_proj+'%'}"  aria-valuemin="0" aria-valuemax="100">{{porc_proj}}%</div>
                        <div v-if="porc_proj < (5 * 8.333333)" class="progress-bar bg-danger" role="progressbar" :style="{ 'width': porc_proj+'%'}"  aria-valuemin="0" aria-valuemax="100">{{porc_proj}}%</div>
                      </div>
                    </div>
                    <div class="template-demo">
                          <h4> % Membros que executam</h4>
                      <div class="d-flex justify-content-between">
                        <small>{{mem_meta}}%</small>
                        <small>{{mem_fat}}%</small>
                      </div>
                      <div class="progress progress-lg mt-2">
                         <div v-if="porc_mem >= (6 * 8.333333)" class="progress-bar bg-success" role="progressbar" :style="{ 'width': porc_mem+'%'}"  aria-valuemin="0" aria-valuemax="100">{{porc_mem}}%</div>
                        <div v-if="porc_mem >= (5 * 8.333333) && porc_mem < (6 * 8.333333)" class="progress-bar bg-warning" role="progressbar" :style="{ 'width': porc_mem+'%'}"  aria-valuemin="0" aria-valuemax="100">{{porc_mem}}%</div>
                        <div v-if="porc_mem < (5 * 8.333333)" class="progress-bar bg-danger" role="progressbar" :style="{ 'width': porc_mem+'%'}"  aria-valuemin="0" aria-valuemax="100">{{porc_mem}}%</div>
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
  methods: {
    getClassFat(x){
      if(x >= (6 * 8.333333))
      {
        return "badge badge-pill badge-success"
      }
      else if (x >= (5 * 8.333333) && x < (6 * 8.333333)){ 
        return "badge badge-pill badge-warning"
      }else if(x < (5 * 8.333333)){
        return "badge badge-pill badge-danger"
      }
    },
    getClassProj(y){
      if(y >= (6 * 8.333333))
      {
        return "badge badge-pill badge-success"
      }
      else if (y >= (5 * 8.333333) && y < (6 * 8.333333)){ 
        return "badge badge-pill badge-warning"
      }else if(y < (5 * 8.333333)){
        return "badge badge-pill badge-danger"
      }
    },
    getClassMem(z){
      console.log('teste')
      if(z >= (6 * 8.333333))
      {
        return "badge badge-pill badge-success"
      }
      else if (z >= (5 * 8.333333) && z < (6 * 8.333333)){ 
        return "badge badge-pill badge-warning"
      }else if(z < (5 * 8.333333)){
        return "badge badge-pill badge-danger"
      }
    },
  }
}
</script>

<style scoped>

</style>