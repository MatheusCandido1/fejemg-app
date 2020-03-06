<template>
<span>
  
 <JuniorEnterpriseMenu :id_ej="this.data[0].id_ej" :nome_ej="this.data[0].nome_ej" :nome_nucleo="this.data[0].nome_nucleo" :ies="this.data[0].ies" :cluster="this.data[0].cluster"/> 
    <div class="row">
 <JuniorEnterpriseStronger   
  :soma_fat="this.data[0].soma_fat"
  :soma_proj="this.data[0].soma_proj"
  :meta_fat="this.data[0].meta_fat"
  :meta_proj="this.data[0].meta_proj"  
  :porc_fat="this.data[0].porc_fat" 
  :porc_proj="this.data[0].porc_proj"
  :mem_meta="this.data[0].mem_meta"
  :mem_fat="this.data[0].mem_fat"
  :porc_mem="this.data[0].porc_mem" />
  <JuniorEnterpriseConnected
  :soma_con="this.data[0].soma_con"
  :meta_con="this.data[0].meta_con"
  :porc_con="this.data[0].porc_con"
  :soma_eve="this.data[0].soma_eve"
  :meta_eve="this.data[0].meta_eve"
  :porc_eve="this.data[0].porc_eve"/>
   <JuniorEnterpriseImpact
  :soma_nps="this.data[0].soma_nps"
  :meta_nps="this.data[0].meta_nps"
  :porc_nps="this.data[0].porc_nps"/>
    </div>
</span>
</template>
<script>
import JuniorEnterpriseStronger from '@/components/juniorenterprises/JuniorEnterpriseStronger'
import JuniorEnterpriseConnected from '@/components/juniorenterprises/JuniorEnterpriseConnected'
import JuniorEnterpriseImpact from '@/components/juniorenterprises/JuniorEnterpriseImpact'
import JuniorEnterpriseMenu from '@/components/juniorenterprises/JuniorEnterpriseMenu'



export default {
    name: 'JuniorEnterpriseBattles',
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
    JuniorEnterpriseStronger,
    JuniorEnterpriseConnected,
    JuniorEnterpriseImpact,
    JuniorEnterpriseMenu
  }
}
</script>

<style scoped>

</style>

