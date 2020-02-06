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
                          <th> Número de Projetos </th>
                          <th> Faturamento </th>
                          <th> Farol AC </th>
                          <th> Ações </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in ejs" :key="item.id" class="text-center">
                          <td> {{item.name}}</td>
                          <td> <div class="badge badge-secondary badge-pill">{{item.core.name}}</div> </td>
                          <td>
                            <div class="badge badge-pill badge-info">3</div>
                          </td>
                          <td> 
                            <div class="d-flex justify-content-between">
                        <small>15</small>
                        <small>15</small>
                      </div>
                            <div class="progress progress-lg mt-2">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                      </div>
                             </td>
                             <td> 
                            <div class="d-flex justify-content-between">
                        <small>R$ 9.000,00</small>
                        <small>R$ 18.000,00</small>
                      </div>
                            <div class="progress progress-lg mt-2">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                      </div>
                             </td>
                          <td> 
<div class="badge badge-pill badge-outline-danger">⠀</div>
<div class="badge badge-pill badge-warning">⠀</div>
<div class="badge badge-pill badge-outline-success">⠀</div>

                          </td>
                          <td>
                            <router-link :to="'empresa-junior/'+item.id+'/meta/2020'">
<button type="button" class="btn btn-inverse-info btn-icon">
                            <i class="mdi mdi-plus"></i>
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