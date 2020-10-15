<template>
   <div class="row" v-if="dataLoaded">
     <div class="col-12 col-sm-6 col-md-3 grid-margin stretch-card ">

                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-center">
                      <i class="mdi mdi-rocket icon-lg d-flex align-items-center" :style="{'color': this.color}"></i>
                      <div class="d-flex flex-column ml-4">
                        <div class="d-flex flex-column">
                          <p class="mb-0" style="white-space: nowrap;">Empresas Juniores</p>
                          <h4 class="font-weight-bold">{{result.ej_quantity}}</h4>
                        </div>
                        <small class="text-muted">Meta de {{goals.ej_quantity}}</small>
                      </div>
                    </div>
                  </div>
                </div>
   </div>
      <div class="col-12 col-sm-6 col-md-3 grid-margin stretch-card ">

                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-center">
                      <i class="mdi mdi-cash-multiple icon-md d-flex align-items-center" :style="{'color': this.color}"></i>
                      <div class="d-flex flex-column ml-4">
                        <div class="d-flex flex-column">
                          <p class="mb-0" style="white-space: nowrap;">Fat. por empresário junior</p>
                          <h4 class="font-weight-bold">R$ {{result.billing_by_member}}</h4>
                        </div>
                        <small class="text-muted">Meta de R$ {{goals.billing_by_member}}</small>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                   <div class="col-12 col-sm-6 col-md-3 grid-margin stretch-card ">

                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-center">
                      <i class="mdi mdi-bank icon-md  d-flex align-items-center" :style="{'color': this.color}"></i>
                      <div class="d-flex flex-column ml-4">
                        <div class="d-flex flex-column">
                          <p class="mb-0" style="white-space: nowrap;">Nº de IES</p>
                          <h4 class="font-weight-bold">{{result.current_ies}}</h4>
                        </div>
                        <small class="text-muted" style="white-space: nowrap;">Meta de {{goals.ies}}</small>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
   <div class="col-12 col-sm-6 col-md-3 grid-margin stretch-card ">

                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-center">
                      <i class="mdi mdi-school icon-md  d-flex align-items-center" :style="{'color': this.color}"></i>
                      <div class="d-flex flex-column ml-4">
                        <div class="d-flex flex-column">
                          <p class="mb-0" style="white-space: nowrap;">Nº de IES Juniores</p>
                          <h4 class="font-weight-bold">{{result.current_ies_junior}}</h4>
                        </div>
                        <small class="text-muted" style="white-space: nowrap;">Meta de {{goals.junior_ies}}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
</template>
<script>

export default {
    name: 'CoreStateWidget',
    data () {
    return {
      dataLoaded: false,
      color: '',
      goals: [],
      result: []
    }
  },
  methods: {
  getData() {
    let id = this.$route.params.id
    let year = this.$route.params.year
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`nucleos/`+id+`/estado/indicadores/`+year, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.goals = response.data.success_data.goal;
          this.result = response.data.success_data.result;
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