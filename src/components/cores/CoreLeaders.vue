<template>
    <span >
        <div class="grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                     <div class="col-md-3 grid-margin stretch-card">
                <div class="card aligner-wrapper">
                  <div class="card-body">
                    <div class="absolute left top bottom h-100 v-strock-2 bg-info"></div>
                    <h5 class="mb-2">Alto Crescimento</h5>
                    <div class="d-flex align-items-center">
                      <h1 class="font-weight-medium text-info mb-2" v-if="dataLoaded" >{{this.data.ac}}</h1>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card aligner-wrapper">
                  <div class="card-body">
                    <div class="absolute left top bottom h-100 v-strock-2 bg-success"></div>
                    <h5 class="mb-2">Farol Verde</h5>
                    <div class="d-flex align-items-center">
                      <h1 class="font-weight-medium text-success mb-2" v-if="dataLoaded" >{{this.data.green}}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card aligner-wrapper">
                  <div class="card-body">
                    <div class="absolute left top bottom h-100 v-strock-2 bg-warning"></div>
                    <h5 class="mb-2">Farol Amarelo</h5>
                    <div class="d-flex align-items-center">
                      <h1 class="font-weight-medium text-warning mb-2" v-if="dataLoaded" >{{this.data.yellow}}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card aligner-wrapper">
                  <div class="card-body">
                    <div class="absolute left top bottom h-100 v-strock-2 bg-danger"></div>
                    <h5 class="mb-2">Farol Vermelho</h5>
                    <div class="d-flex align-items-center">
                      <h1 class="font-weight-medium text-danger mb-2" v-if="dataLoaded" >{{this.data.red}}</h1>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <CoreClusterLightChart/>
                </div>

                </div>
              
                </div>
              </div>
        </div>
        
    </span>
</template>
<script>

import CoreClusterLightChart from '../cores/CoreClusterLightChart';

export default {
    name: 'CoreLeaders',
    data () {
    return {
      data: [],
      dataLoaded: false
    }
  },
  mounted(){
    let id = this.$route.params.id
    let year = this.$route.params.year
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`nucleos/`+id+`/lideres/`+year, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.data = response.data.success_data;
          this.dataLoaded = true;
        } 
      })
      .catch(e => {
         this.$toast.error({
            title:'Ops...',
            message:'Erro interno. Tente novamente mais tarde',
            position:'bottom right',
            closeButton: false,
            progressBar: true,
            showDuration: 2000,
            hideDuration: 1000,
            timeOut: 3000
            })
      })
    }

  },
  components:{
    CoreClusterLightChart
  },
}
</script>

<style scoped>

</style>