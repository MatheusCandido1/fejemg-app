<template>
<span v-if="dataLoaded">
  <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Núcleos</h4>
                    <div class="text-right">
                       <router-link  to="/nucleos/add">
                    <button type="button" class="btn btn-info btn-icon">
                            <i class="mdi mdi-playlist-plus"></i>
                          </button>
                          </router-link>
                    </div>
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
    :items="cores"
    :items-per-page="10"
    :search="search"
    class="elevation-1"
    loading
    loading-text="Carregando..."
  >
   <template v-slot:[`item.name_nuc`]="{ item }">
      <div class="badge badge-pill text-white" :style="{ 'background-color': item.core_color }">
          {{ item.name_nuc }}        
       </div>
       
    </template>
    <template v-slot:[`item.fat_nuc`]="{ item }">
         <label class="badge badge-success">R$ {{item.fat_nuc}}</label>  
    </template>
    <template v-slot:[`item.proj_nuc`]="{ item }">
         <label class="badge badge-info">{{item.proj_nuc}}</label>  
    </template>
     <template v-slot:[`item.controls`]="{ item }">
 <router-link  :to="'nucleo/'+item.id+'/resultados/2020'">
<button style="border-radius: 50%" type="button" class="btn btn-dark btn-icon">
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
    name: 'CoreList',
    data () {
    return {
      search: '',
      cores: [],
      dataLoaded: false,
       headers: [
          { text: 'Nome', value: 'name_nuc', align: 'center'},
          { text: 'Faturamento', value: 'fat_nuc', align: 'center' },
          { text: 'Projetos', value: 'proj_nuc', align: 'center' },
          { text: 'Ações', value: 'controls',sortable: false, align: 'center' },
     ],
    }
  },
  methods: {
    getData() {
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`nucleos/`+new Date().getFullYear(), {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.cores = response.data.success_data;
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