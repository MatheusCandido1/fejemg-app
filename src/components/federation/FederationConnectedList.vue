<template>
<span v-if="dataLoaded">
  <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Empresas Júniores Conectadas</h4>
                         <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
 <v-data-table
    :headers="headers"
    :items="ejs"
    :items-per-page="5"
    :search="search"
    class="elevation-1"
    loading
    loading-text="Carregando..."
  >
   <template v-slot:[`item.name`]="{ item }">
          {{ item.name }}  
    </template>
    <template v-slot:[`item.cluster`]="{ item }">
           <div class="badge badge-info badge-pill">
        {{ item.cluster }}
        </div>
    </template>
    <template v-slot:[`item.core`]="{ item }">
<div class="badge badge-pill text-white" :style="{ 'background-color': item.core.color }">
        {{ item.core.name }}
        </div>    </template>

    <template v-slot:[`item.ies`]="{ item }">

        <div class="badge badge-outline-dark badge-pill">
        {{ item.ies }}
        </div>
    </template>
     <template v-slot:[`item.controls`]="{ item }">
 <router-link  :to="'/empresa-junior/'+item.id+'/meta/2020/'">
<button type="button" class="btn btn-dark btn-icon">
                            <i class="mdi mdi-rocket"></i>
                          </button>
                            </router-link>

     </template>
 </v-data-table>
                  </div>
                </div>
</span>
</template>
<script>

export default {
    name: 'FederationConnectedList',
    data () {
    return {
      search: '',
      ejs: [],
      dataLoaded: false,
       headers: [
          { text: 'Empresa Júnior', value: 'name', align: 'center'},
          { text: 'Cluster', value: 'cluster', align: 'center' },
          { text: 'Núcleo', value: 'core', align: 'center' },
          { text: 'IES', value: 'ies', align: 'center' },
          { text: 'Ações', value: 'controls',sortable: false, align: 'center' },
     ],
    }
  },
  methods: {
    getData() {
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`federacao/conectados/`+new Date().getFullYear(), {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.ejs = response.data.ejs;
          this.dataLoaded = true;
          console.log(this.ejs);
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