<template>
    <span data-app>
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
         <div class="card-body">
                    <div v-for="(item, i) in ejs_ac"
          :key="i"  class="wrapper d-flex align-items-center py-2 border-bottom">
                      <div class="wrapper ml-3">
                        <router-link style=" color: inherit;" :to="{ name: 'JuniorEnterpriseDetail', params: { id: item.id, year: 2020 }}"> 
                        <h6 class="ml-1 mb-1">{{item.name}}</h6>
                        </router-link>
                        
                        <small class="text-muted mb-0">
                          <i class="mdi mdi-map-marker-outline mr-1"></i>{{item.ies}}</small>
                            <div class="badge badge-info badge-pill">
 Cluster  {{item.cluster}} </div>
                      </div>
                    </div>
                  
                  </div>
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
                    <v-row justify="center" v-if="this.ejs_green.length > 0">
    <v-dialog
      v-model="dialog1"
      scrollable
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#1bcfb4"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Ver todas
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          EJs no Farol Verde
        </v-card-title>
        <v-card-text style="height: 300px;">
         <div class="card-body">
                    <div v-for="(item, i) in ejs_green"
          :key="i"  class="wrapper d-flex align-items-center py-2 border-bottom">
                      <div class="wrapper ml-3">
                        <router-link style=" color: inherit;" :to="{ name: 'JuniorEnterpriseDetail', params: { id: item.id, year: 2020 }}"> 
                        <h6 class="ml-1 mb-1">{{item.name}}</h6>
                        </router-link>
                        <small class="text-muted mb-0">
                          <i class="mdi mdi-map-marker-outline mr-1"></i>{{item.ies}}</small>
                          <div class="badge badge-info badge-pill">
 Cluster  {{item.cluster}} </div>
                      </div>
                    </div>
                  
                  </div>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog1 = false"
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
                    <div class="absolute left top bottom h-100 v-strock-2 bg-warning"></div>
                    <h5 class="mb-2">Farol Amarelo</h5>
                    <div class="d-flex align-items-center">
                      <h1 class="font-weight-medium text-warning mb-2" v-if="dataLoaded" >{{this.data.yellow}}</h1>
                    </div>
                       <v-row justify="center" v-if="this.ejs_yellow.length > 0">
    <v-dialog
      v-model="dialog2"
      scrollable
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#fed713"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Ver todas
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          EJs no Farol Amarelo
        </v-card-title>
        <v-card-text style="height: 300px;">
         <div class="card-body">
                    <div v-for="(item, i) in ejs_yellow"
          :key="i"  class="wrapper d-flex align-items-center py-2 border-bottom">
                      <div class="wrapper ml-3">
                        <router-link style=" color: inherit;" :to="{ name: 'JuniorEnterpriseDetail', params: { id: item.id, year: 2020 }}"> 
                        <h6 class="ml-1 mb-1">{{item.name}}</h6>
                        </router-link>
                        <small class="text-muted mb-0">
                          <i class="mdi mdi-map-marker-outline mr-1"></i>{{item.ies}}</small>
                          <div class="badge badge-info badge-pill">
 Cluster  {{item.cluster}} </div>
                      </div>
                    </div>
                  
                  </div>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog2 = false"
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
                    <div class="absolute left top bottom h-100 v-strock-2 bg-danger"></div>
                    <h5 class="mb-2">Farol Vermelho</h5>
                    <div class="d-flex align-items-center">
                      <h1 class="font-weight-medium text-danger mb-2" v-if="dataLoaded" >{{this.data.red}}</h1>
                    </div>
                         <v-row justify="center" v-if="this.ejs_red.length > 0">
    <v-dialog
      v-model="dialog3"
      scrollable
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#fe7c96"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Ver todas
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          EJs no Farol Vermelho
        </v-card-title>
        <v-card-text style="height: 300px;">
         <div class="card-body">
                    <div v-for="(item, i) in ejs_red"
          :key="i"  class="wrapper d-flex align-items-center py-2 border-bottom">
                      <div class="wrapper ml-3">
                        <router-link style=" color: inherit;" :to="{ name: 'JuniorEnterpriseDetail', params: { id: item.id, year: 2020 }}"> 
                        <h6 class="ml-1 mb-1">{{item.name}}</h6>
                        </router-link>
                        <small class="text-muted mb-0">
                          <i class="mdi mdi-map-marker-outline mr-1"></i>{{item.ies}}</small>
                          <div class="badge badge-info badge-pill">
 Cluster  {{item.cluster}} </div>
                      </div>
                    </div>
                  
                  </div>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog3 = false"
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
              </div>
              <div class="row">
                <div class="col-md-6">
                  <CoreClusterLightChart/>
                </div>
                 <div class="col-md-6">
                  <CoreLeadersTopList/>
                </div> 

                </div>
              
                </div>
              </div>
        </div>
        
    </span>
</template>
<script>

import CoreClusterLightChart from '../cores/CoreClusterLightChart';
import CoreLeadersTopList from '../cores/CoreLeadersTopList';

export default {
    name: 'CoreLeaders',
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
    let id = this.$route.params.id
    let year = this.$route.params.year
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`nucleos/`+id+`/lideres/`+year, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.data = response.data.success_data;
          this.ejs_ac = response.data.ejs.ac;
          this.ejs_green = response.data.ejs.green;
          this.ejs_yellow = response.data.ejs.yellow;
          this.ejs_red = response.data.ejs.red;
          this.dataLoaded = true;
          console.log(this.ejs_ac);
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
    CoreClusterLightChart,
    CoreLeadersTopList
  },
}
</script>

<style scoped>

</style>