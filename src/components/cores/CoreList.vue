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
                    <div class="table-responsive">

                     <table class="table">
                        <thead class="text-center">
                          <tr>
                            <th> Nome </th>
                            <th> Faturamento </th>
                            <th> Projetos </th>
                            <th> Batalhas</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr  class="text-center" v-for="item in cores" :key="item.id">
                            
                              <td> {{item.name_nuc}}</td>
                            <td ><label class="badge badge-success">R$ {{item.fat_nuc}}</label>  </td>
                            <td ><label class="badge badge-info">{{item.fat_proj}}</label>   </td>
                            <td >
                               <router-link  :to="'nucleo/'+item.id+'/resultados/2020'">
<button type="button" class="btn btn-dark btn-icon">
                            <i class="mdi mdi-rocket"></i>
                          </button>
                            </router-link>
                          </td>
                          </tr>
                        </tbody>
                      </table> 
                    </div>
                  </div>
                </div>
</span>
</template>
<script>

export default {
    name: 'CoreList',
    data () {
    return {
      cores: [],
      dataLoaded: false,
    }
  },
  methods() {
    function getData() {
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