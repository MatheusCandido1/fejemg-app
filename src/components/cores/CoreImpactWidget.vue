<template>
   <div class="row" v-if="dataLoaded">
     <div class="col-12 col-sm-6 col-md-6 grid-margin stretch-card ">

                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-center">
                      <i class="mdi mdi-account-check icon-lg d-flex align-items-center" :style="{'color': this.color}"></i>
                      <div class="d-flex flex-column ml-4">
                        <div class="d-flex flex-column">
                          <p class="mb-0" style="white-space: nowrap;">NPS</p>
                          <h4 class="font-weight-bold">{{result.nps.toFixed(0)}}</h4>
                        </div>
                        <small class="text-muted">Meta de {{goals.nps}}</small>
                       
                      </div>
                    </div>
                     <div class="progress progress-xl mt-1">
                        <div class="progress-bar" role="progressbar" :style="{ 'width': porc.nps+'%', 'background-color': color}"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{{porc.nps.toFixed(2)}}%</div>
                      </div>
                  </div>
                  
                </div>
   </div>
      <div class="col-12 col-sm-6 col-md-6 grid-margin stretch-card ">

                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-center">
                      <i class="mdi mdi-earth icon-md d-flex align-items-center" :style="{'color': this.color}"></i>
                      <div class="d-flex flex-column ml-4">
                        <div class="d-flex flex-column">
                          <p class="mb-0" style="white-space: nowrap;">Projetos de Impacto</p>
                          <h4 class="font-weight-bold">{{result.impact_projects}}</h4>
                        </div>
                        <small class="text-muted">Meta de {{goals.impact_projects}}</small>
                      </div>
                    </div>
                     <div class="progress progress-xl mt-1">
                        <div class="progress-bar " role="progressbar" :style="{ 'width': porc.impact_projects+'%', 'background-color': color}"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{{porc.impact_projects.toFixed(2)}}%</div>
                      </div>
                  </div>
                </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'CoreImpactWidget',
    data () {
    return {
      dataLoaded: false,
      goals: [],
      result: [],
      porc: [],
      color: '',
    }
  },
  methods: {
  getData() {
    let usuarioAux = this.$store.getters.getUsuario;
    let id = this.$route.params.id
    let year = this.$route.params.year
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`nucleos/`+id+`/impacto/indicadores/`+year+``, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.goals = response.data.success_data.goal;
          this.result = response.data.success_data.results;
          this.porc = response.data.success_data.porc;
          this.color = response.data.core.color;
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