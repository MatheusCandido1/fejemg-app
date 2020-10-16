<template>
<span>
<h3>Top 5 EJs próximas ao Alto Crescimento</h3>
                <div class="card" v-if="dataLoaded">
                  <div class="card-body">
                    <div v-for="item in list" :key="item.id" class="wrapper d-flex align-items-center py-2 border-bottom">
                      <div class="wrapper ml-3">
                                                <router-link style=" color: inherit;" :to="{ name: 'JuniorEnterpriseDetail', params: { id: item.id, year: 2020 }}"> 
                        <h6 class="ml-1 mb-1">{{item.name}}</h6>
                                                </router-link>
                        <small class="text-muted mb-0">
                          <i class="mdi mdi-map-marker-outline mr-1"></i>{{item.ies}}</small>
                      </div>
                      <div class="badge badge-pill badge-success ml-auto px-1 py-1">
                        {{item.porc.toFixed(2)}}%
                      </div>
                    </div>
                   
                  </div>
                </div>
</span>
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