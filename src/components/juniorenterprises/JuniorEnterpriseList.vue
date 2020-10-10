<template>
<div class="col-lg-12 grid-margin stretch-card" v-if="dataLoaded">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Empresas Juniores</h4>
                    
                    <div class="text-right">
                       <router-link  to="/empresas-juniores/add">
                    <button type="button" class="btn btn-info btn-icon">
                            <i class="mdi mdi-playlist-plus"></i>
                          </button>
                          </router-link>
                    </div>
                      <p></p>
                      <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
                      <v-data-table
    :headers="headers"
    :items="ejs"
    :items-per-page="10"
      :search="search"
    class="elevation-1"
    loading
    loading-text="Carregando..."
  >
  <template v-slot:[`item.core.name`]="{ item }">
     <div class="badge badge-pill text-white" :style="{ 'background-color': item.core.color }">
        {{ item.core.name }}
        </div>
    </template>
     <template v-slot:[`item.cluster`]="{ item }">
    <div class="badge badge-info badge-pill">
        {{ item.cluster }}
        </div>
    </template>
    <template v-slot:[`item.foundation.name`]="{ item }">
    <div class="badge badge-outline-dark badge-pill">
        {{ item.foundation.name }}
        </div>
    </template>
  
    <template v-slot:[`item.controls`]="{ item }">
   <router-link :to="'empresa-junior/'+item.id+'/meta/'+new Date().getFullYear()+''">
<button type="button" class="btn btn-dark btn-icon">
                            <i class="mdi mdi-chart-line"></i>
                          </button>
                            </router-link>
                            <router-link  :to="'empresa-junior/edit/'+item.id">
<button type="button" class="btn btn-info btn-icon">
                            <i class="mdi mdi-circle-edit-outline"></i>
                          </button>
                            </router-link>
    </template>
  
  </v-data-table>
                  </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'JuniorEnterpriseList',
    data () {
    return {
    search: '',
    ejs: [], 
    headers: [
          { text: 'Empresa Júnior', value: 'name'},
          { text: 'Núcleo', value: 'core.name' },
          { text: 'Cluster', value: 'cluster' },
          { text: 'IES', value: 'foundation.name' },
          { text: 'Ações', value: 'controls' },
     ],
      dataLoaded: false,
    }
  },
  methods: {
     getData(){
        let usuarioAux = this.$store.getters.getUsuario;
      if(usuarioAux){
        this.usuario = this.$store.getters.getUsuario;
        this.$http.get(this.$urlAPI+`ejs`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
        .then(response => {
          if(response.status){
            this.ejs = response.data.success_data;
            this.dataLoaded = true;
          }
          console.log(this.ejs);
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