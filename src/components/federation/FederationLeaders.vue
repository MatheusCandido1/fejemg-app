<template>
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
                    <v-row justify="center" v-if="this.ejs_ac.length > 0">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#198ae3"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Ver todas
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          EJs de Alto Crescimento
        </v-card-title>
        <v-card-text style="height: 300px;">
          <v-list dense>
      <v-list-item-group
        v-model="item"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in ejs_ac"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
                    
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
                  <FederationClusterLightChart/>
                </div>
                <div class="col-md-6">
                  <FederationLightsByCore/>
                </div>

                </div>
                </div>
              </div>
        </div>
</template>
<script>
import FederationClusterLightChart from '@/components/federation/FederationClusterLightChart'
import FederationLightsByCore from '@/components/federation/FederationLightsByCore'

export default {
    name: 'FederationLeaders',
    data () {
    return {
      data: [],
      dataLoaded: false,
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      item: 1,
      item1: 1,
      item2: 1,
      item3: 1,
      ejs_ac: [],
      ejs_green: [],
      ejs_yellow: [],
      ejs_red: [],
    }
  },
  mounted(){
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`federacao/lideres/`+new Date().getFullYear(), {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.data = response.data.success_data;
          this.dataLoaded = true;
          this.ejs_ac = response.data.ejs.ac;
          this.ejs_green = response.data.ejs.green;
          this.ejs_yellow = response.data.ejs.yellow;
          this.ejs_red = response.data.ejs.red;
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
    FederationClusterLightChart,
    FederationLightsByCore
  },
}
</script>

<style scoped>

</style>