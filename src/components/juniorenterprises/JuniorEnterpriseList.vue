<template>
<div class="col-lg-12 grid-margin stretch-card">
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
                    <table  class="table table-bordered">
                      <thead class="text-center">
                        <tr>
                          <th>Empresa Júnior</th>
                          <th> Núcleo </th>
                          <th> Cluster </th>
                          <th> IES </th>
                          <th> Ações </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in ejs" :key="item.id" class="text-center">
                          <td> {{item.name}}</td>
                          <td> <div class="badge badge-outline-dark badge-pill">{{item.core.name}}</div> </td>
                          <td>
                            <div class="badge badge-outline-dark badge-pill">{{item.cluster}}</div>
                          </td>
                          <td>
                              <div class="badge badge-outline-dark badge-pill">{{item.foundation.name}}</div>
                          </td>
                          <td>
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'JuniorEnterpriseList',
    data () {
    return {
      ejs: []
    }
  },
  created(){
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`ejs  `, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.ejs = response.data.success_data;
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