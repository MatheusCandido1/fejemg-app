<template>
<div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Resultados</h4>
                    <table class="table">
                      <thead>
                        <tr>
                          <th style="width: 40%" class="text-center">Mês</th>
                          <th style="width: 40%" class="text-center">Faturamento</th>
                          <th style="width: 20%" class="text-center">Ver mais</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in data" :key="item.id"  class="text-center">
                          <td style="text-transform: capitalize;">{{item.x}}</td>
                          <td>R$ {{item.y}}</td>
                          <td><a style="cursor: pointer" class="badge badge-info text-white">+</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
</template>

<script>

export default {
    name: 'JuniorEnterpriseResults',
    data () {
    return {
      data: []
    }
  },
  created(){
    let id = this.$route.params.id
    let year = this.$route.params.year
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`ejs/`+id+`/resultados/`+year, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        console.log(response);
        if(response.status){
          this.data = response.data.success_data;
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
  }
}
</script>

<style scoped>

</style>
