<template>
<span>
  
 <JuniorEnterpriseMenu :nome_ej="this.stronger[0].nome_ej" :nome_nucleo="this.stronger[0].nome_nucleo" :ies="this.stronger[0].ies"/> 
    <div class="row">
 <JuniorEnterpriseStronger   
  :soma_fat="this.stronger[0].soma_fat"
  :soma_proj="this.stronger[0].soma_proj"
  :meta_fat="this.stronger[0].meta_fat"
  :meta_proj="this.stronger[0].meta_proj"  
  :porc_fat="this.stronger[0].porc_fat" 
  :porc_proj="this.stronger[0].porc_proj" />
  <JuniorEnterpriseConnected/>
   <JuniorEnterpriseImpact/>
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
      stronger: []
    }
  },
  beforeCreate(){
    let id = this.$route.params.id
    let year = this.$route.params.year
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`ejs/`+id+`/meta/`+year, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.stronger = response.data.success_data;
        }

      })
      .catch(e => {
        console.log(e)
        alert("Erro! Tente novamente mais tarde!");
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

