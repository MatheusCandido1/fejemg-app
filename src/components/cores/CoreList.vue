<template>
<span>
<div class="col-12 grid-margin">
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
                            <th>#</th>
                            <th> Nome </th>
                            <th> Faturamento </th>
                            <th> Projetos </th>
                            <th> Batalhas</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr  class="text-center" v-for="item in cores" :key="item.id">
                            <td>
                              <img src="/static/images/faces/face1.jpg" class="mr-2" alt="image">  </td>
                              <td >{{item.name}}</td>
                            <td ><label class="badge badge-success">R$ 1.032,342.00</label>  </td>
                            <td ><label class="badge badge-info">644</label>   </td>
                            <td >
<button type="button" class="btn btn-secondary btn-icon">
                            <i class="mdi mdi-plus"></i>
                          </button>
                          <button type="button" class="btn btn-info btn-icon">
                            <i class="mdi mdi-pencil"></i>
                          </button>
                          <button type="button" class="btn btn-danger btn-icon">
                            <i class="mdi mdi-delete"></i>
                          </button>
                          </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
      cores: []
    }
  },
  created(){
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`nucleos`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.cores = response.data.success_data;
        }

      })
      .catch(e => {
        console.log(e)
        alert("Erro! Tente novamente mais tarde!");
      })

    }
  },
  components:{
  },
}
</script>

<style scoped>

</style>