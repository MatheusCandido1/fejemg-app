<template>
<AppTemplate>
<span v-if="this.data &&  this.data.length > 0" slot="content">
    <JuniorEnterpriseMenu  v-on:selectMenu="menu_option = $event" :menu_option="this.menu_option" :id_ej="this.data[0].id_ej" :nome_ej="this.data[0].nome_ej" :nome_nucleo="this.data[0].nome_nucleo" :ies="this.data[0].ies" :cluster="this.data[0].cluster"/> 
 
 <slot name="battles" v-if="menu_option === 1">
    <JuniorEnterpriseBattles/>
 </slot>

  <slot name="results" v-else-if="menu_option === 2">
    <JuniorEnterpriseResults/>
  </slot>

  <slot name="projects" v-else-if="menu_option === 3">
    <ProjectAdd/>
  </slot>

  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import JuniorEnterpriseBattles from '@/components/juniorenterprises/JuniorEnterpriseBattles'
import JuniorEnterpriseMenu from '@/components/juniorenterprises/JuniorEnterpriseMenu'
import JuniorEnterpriseResults from '@/components/juniorenterprises/JuniorEnterpriseResults'
import ProjectAdd from '@/pages/project/ProjectAdd'

export default {
    name: 'JuniorEnterpriseDetail',
    data () {
    return {
      data: [],
      menu_option: 1,
    }
  },
  mounted(){
        this.$parent.startProgress();
    let id = this.$route.params.id
    let year = this.$route.params.year
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`ejs/`+id+`/resultado/`+year, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.data = response.data.success_data;
        }
      })
      .catch(e => {
        console.log(e);
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
    this.$parent.stopProgress();
  },
  components:{
    AppTemplate,
    JuniorEnterpriseBattles,
    JuniorEnterpriseMenu,
    JuniorEnterpriseResults,
    ProjectAdd
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

