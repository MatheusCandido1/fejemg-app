<template>
  <span slot="content">
 <ProjectForm/> 
  </span>
</template>
<script>
import ProjectForm from '@/components/projects/ProjectForm'



export default {
    name: 'ProjectAdd',
    data () {
    return {
      data: []
    }
  },
  beforeCreate(){
    let id = this.$route.params.id
    let year = this.$route.params.year
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`ejs/`+id+`/resultados/`+year, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
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
    ProjectForm
  }
}
</script>

<style scoped>

</style>

