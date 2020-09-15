<template>
<AppTemplate>
  <span slot="content">
      <JuniorEnterpriseMenu :id_ej="this.data[0].id_ej" :nome_ej="this.data[0].nome_ej" :nome_nucleo="this.data[0].nome_nucleo" :ies="this.data[0].ies" :cluster="this.data[0].cluster"/> 
 <ProjectForm/> 
  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import ProjectForm from '@/components/projects/ProjectForm'
import JuniorEnterpriseMenu from '@/components/juniorenterprises/JuniorEnterpriseMenu'



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
    AppTemplate,
    ProjectForm,
    JuniorEnterpriseMenu
  }
}
</script>

<style scoped>

</style>

