<template>
                <div class="card" v-if="dataLoaded">
                  <div class="card-body">
                    <h4 class="card-title">Top 5 EJs próximas ao Alto Crescimento</h4>
                    <div class="wrapper d-flex align-items-center py-2 border-bottom">
                      <div class="wrapper ml-3">
                        <h6 class="ml-1 mb-1">Stella Davidson</h6>
                        <small class="text-muted mb-0">
                          <i class="mdi mdi-map-marker-outline mr-1"></i>New York City, USA</small>
                      </div>
                      <div class="badge badge-pill badge-success ml-auto px-1 py-1">
                        <i class="mdi mdi-check"></i>
                      </div>
                    </div>
                   
                  </div>
                </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name:  'CoreLeadersTopList',
    data: function() {
      return {
        list: [],
        dataLoaded: false,
      }
    },
  components: {
  },
  mounted(){
    let id = this.$route.params.id
    let year = this.$route.params.year
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`nucleos/`+id+`/lideres/top/`+year, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.list = response.data.ejs.list;
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
  methods: {
  }
}
</script>
<style scoped>
</style>