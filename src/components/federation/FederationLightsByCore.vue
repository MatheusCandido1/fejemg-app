<template>
<v-carousel
    cycle
    height="400"
    width="500"
    hide-delimiter-background
    show-arrows-on-hover
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(core, i) in cores"
      :key="i"
    >
    <div class="card-body">
                    <img class="d-block img-lg mx-auto mb-2" style="width: 35%; height: 35%" :src="cores[i].core_image">
                    <div class="text-center"> 
                        <div class="badge badge-pill text-white  mx-auto mb-2" :style="{'background-color': cores[i].core_color}">
                            {{cores[i].core_name}}
                        </div> 
                    </div>
                   <div class="text-center">
                        <div class="card-body">
                        <div class="progress progress-lg mt-2">
                          <div class="progress-bar bg-info" role="progressbar" :style="{'width': (data.ac[i]/cores[i].ej_quantity)*100+'%'}" aria-valuemin="0" aria-valuemax="100">{{((data.ac[i]/cores[i].ej_quantity)*100).toFixed(0)}}%</div>
                          <div class="progress-bar bg-success" role="progressbar" :style="{'width': (data.green[i]/cores[i].ej_quantity)*100+'%'}" aria-valuemin="0" aria-valuemax="100">{{((data.green[i]/cores[i].ej_quantity)*100).toFixed(0)}}%</div>
                          <div class="progress-bar bg-warning" role="progressbar" :style="{'width': (data.yellow[i]/cores[i].ej_quantity)*100+'%'}" aria-valuemin="0" aria-valuemax="100">{{((data.yellow[i]/cores[i].ej_quantity)*100).toFixed(0)}}%</div>
                          <div class="progress-bar bg-danger" role="progressbar" :style="{'width': (data.red[i]/cores[i].ej_quantity)*100+'%'}" aria-valuemin="0" aria-valuemax="100">{{((data.red[i]/cores[i].ej_quantity)*100).toFixed(0)}}%</div>
                        </div>
                        <div class="d-flex justify-content-between border-top mt-4 pt-4">
                          <div class="d-flex">
                            <div style="background-color: #008ffb" class="dot-indicator mt-1 mr-2"></div>
                            <div class="d-flex flex-column">
                              <p class="mb-0">AC</p>
                               <h4 class="text-gray">{{data.ac[i]}}</h4> 
                            </div>
                          </div>
                          <div class="d-flex">
                            <div style="background-color: #00e396" class="dot-indicator mt-1 mr-2"></div>
                            <div class="d-flex flex-column">
                              <p class="mb-0">Verde</p>
                              <h4 class="text-gray">{{data.green[i]}}</h4> 
                            </div>
                          </div>
                          <div class="d-flex">
                            <div style="background-color: #feb019" class="dot-indicator mt-1 mr-2"></div>
                            <div class="d-flex flex-column">
                              <p class="mb-0">Amarelo</p>
                              <h4 class="text-gray">{{data.yellow[i]}}</h4> 
                            </div>
                          </div>
                          <div class="d-flex">
                            <div style="background-color: #ff4560" class="dot-indicator mt-1 mr-2"></div>
                            <div class="d-flex flex-column">
                              <p class="mb-0">Vermelho</p>
                              <h4 class="text-gray">{{data.red[i]}}</h4> 
                            </div>
                          </div>
                        </div>
                      </div>
                        </div>
                  </div>
    </v-carousel-item>
    
  </v-carousel>
</template>

<script>

export default {
    name: 'FederationLightsByCore',
    data () {
    return {
      data: [],  
      cores: [],
      dataLoaded: false,
      }
  },
  methods: {
    getData() {
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`federacao/nucleos/`+new Date().getFullYear(), {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.data = response.data.success_data;
          this.cores = response.data.core;
          this.dataLoaded = true;
          console.log(this.data.ac[0]);
        }
      })
      .catch(e => {
        console.log(e)
        alert("Erro! Tente novamente mais tarde!");
      })
    }
    }
  },
  created(){
      this.getData();
  },
   components:{
  }
}
</script>

<style scoped>

</style>
