<template>
  <v-card
    elevation="24"
    max-width="444"
    class="mx-auto"
  >
<v-carousel
    cycle
    height="500"
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
                    <img class="d-block img-lg mx-auto mb-2" style="width: 40%; height: 40%" :src="cores[i].core_image">
                    <div class="text-center"> 
                        <div class="badge badge-pill text-white  mx-auto mb-2" :style="{'background-color': cores[i].core_color}">
                            {{cores[i].core_name}}   
                        </div> 
                    </div>
                    <div class="text-center">
                        <div class="card-body">
                        <div class="progress grouped">
                          <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                          <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="d-flex justify-content-between border-top mt-4 pt-4">
                          <div class="d-flex">
                            <div style="background-color: #008ffb" class="dot-indicator mt-1 mr-2"></div>
                            <div class="d-flex flex-column">
                              <p class="mb-0">AC</p>
                              <small class="text-gray">18</small>
                            </div>
                          </div>
                          <div class="d-flex">
                            <div style="background-color: #00e396" class="dot-indicator mt-1 mr-2"></div>
                            <div class="d-flex flex-column">
                              <p class="mb-0">Verde</p>
                              <small class="text-gray">10</small>
                            </div>
                          </div>
                          <div class="d-flex">
                            <div style="background-color: #feb019" class="dot-indicator mt-1 mr-2"></div>
                            <div class="d-flex flex-column">
                              <p class="mb-0">Amarelo</p>
                              <small class="text-gray">2</small>
                            </div>
                          </div>
                          <div class="d-flex">
                            <div style="background-color: #ff4560" class="dot-indicator mt-1 mr-2"></div>
                            <div class="d-flex flex-column">
                              <p class="mb-0">Vermelho</p>
                              <small class="text-gray">21</small>
                            </div>
                          </div>
                        </div>
                      </div>
                        </div>
                  </div>
    </v-carousel-item>
    
  </v-carousel>
  </v-card>
<!-- <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-row flex-wrap">
                      <img src="https://hmp.me/dd73" class="img-lg rounded" alt="profile image">
                      <div class="ml-3">
                        <h6>Maria</h6>
                        <p class="text-muted">maria@gmail.com</p>
                        <p class="mt-2 text-success font-weight-bold">Designer</p>
                      </div>
                    </div>
                  </div>
                </div> -->
</template>

<script>

export default {
    name: 'FederationLightsByCore',
    data () {
    return {
      /*  colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],*/
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
          console.log(response.data);
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
  }
}
</script>

<style scoped>

</style>
