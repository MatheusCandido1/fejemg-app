<template>
   <div class="row" v-if="dataLoaded">
     <div class="col-12 col-sm-6 col-md-6 grid-margin stretch-card ">

                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-center">
                      <i class="mdi mdi-account-check icon-lg text-primary d-flex align-items-center"></i>
                      <div class="d-flex flex-column ml-4">
                        <div class="d-flex flex-column">
                          <p class="mb-0" style="white-space: nowrap;">NPS</p>
                          <h4 class="font-weight-bold">34</h4>
                        </div>
                        <small class="text-muted">Meta de 76</small>
                       
                      </div>
                    </div>
                     <div class="progress progress-xl mt-1">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">60%</div>
                      </div>
                  </div>
                  
                </div>
   </div>
      <div class="col-12 col-sm-6 col-md-6 grid-margin stretch-card ">

                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-center">
                      <i class="mdi mdi-earth icon-md text-primary d-flex align-items-center"></i>
                      <div class="d-flex flex-column ml-4">
                        <div class="d-flex flex-column">
                          <p class="mb-0" style="white-space: nowrap;">Projetos de Impacto</p>
                          <h4 class="font-weight-bold">436</h4>
                        </div>
                        <small class="text-muted">Meta de 980</small>
                      </div>
                    </div>
                     <div class="progress progress-xl mt-1">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">60%</div>
                      </div>
                  </div>
                </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'FederationImpactWidget',
    data () {
    return {
      dataLoaded: false,
      goals: [],
      result: []
    }
  },
  methods: {
  getData() {
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`federacao/estado/indicadores/`+new Date().getFullYear(), {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.goals = response.data.success_data.goal;
          this.result = response.data.success_data.result;
          this.dataLoaded = true;
        }
      })
      .catch(e => {
        console.log(e)
        alert("Erro! Tente novamente mais tarde!");
      })
    }
    }
  },
  mounted(){
    this.getData();
  },
  components:{
  },
}
</script>

<style scoped>

</style>