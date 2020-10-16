<template>
<span>
<h3>Farol de EJs Conectadas</h3>
<div class="card" v-if="dataLoaded">
                  <div class="card-body">
<div class="row ">
    <div class="card-col col-xl-6 col-lg-6 col-md-6 col-6 text-center ">
        <div class="card-body" style="align-items: center; justify-content: center; width: 290px; height: 150px; background-color: #198ae3; border-radius: 15px;">
            <h5 class="text-white"> EJs Conectadas </h5>
            <h3 class="text-white text-center">{{data.connected}}/{{data.goal.connected}}</h3>
             <div class="progress progress-lg mt-2">
                        <div class="progress-bar" role="progressbar" :style="{ 'width': data.porc+'%'}" style="background-color: #BCC2C8; color: #000"  aria-valuemin="0" aria-valuemax="100">{{data.porc.toFixed(2)}}%</div>
                      </div>
        </div>
    </div>
    </div>
    
    <div class="row text-center">
<div class="card-col col-xl-4 col-lg-4 col-md-4 col-4" >
                <div class="card-body align-items-center d-flex justify-content-center" style="width: 90px; height: 90px; background-color: #1bcfb4; border-radius: 15px; text-align: center;">
            <h3 style="white-space: nowrap;" class="text-white">{{data.green}}</h3>
        </div>
    </div>
    <div class="card-col col-xl-4 col-lg-4 col-md-4 col-4" >
                <div class="card-body align-items-center d-flex justify-content-center" style="width: 90px; height: 90px; background-color: #fed713; border-radius: 15px;">
                      <h3 style="white-space: nowrap;" class="text-white">{{data.yellow}}</h3>

        </div>
    </div>
    <div class="card-col col-xl-4 col-lg-4 col-md-4 col-4" >
                <div class="card-body align-items-center d-flex justify-content-center" style="width: 90px; height: 90px; background-color: #fe7c96; border-radius: 15px;">
                                <h3 style="white-space: nowrap;" class="text-white">{{data.red}}</h3>
        </div>
    </div>
    </div>
                  </div>
</div>

</span>
</template>
<script>

export default {
    name: 'FederationConnectedStatus',
    data () {
    return {
      data: [],
      dataLoaded: false,
    }
  },
  methods: {
  getData() {
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`federacao/conectados/resultados/`+new Date().getFullYear(), {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.data = response.data.success_data;
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