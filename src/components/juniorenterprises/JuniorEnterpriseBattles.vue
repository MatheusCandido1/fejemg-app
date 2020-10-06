<template>
<span>
    <div class="row" v-if="this.data &&  this.data.length > 0">
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
  :porc_eve="this.data[0].porc_eve"
  :is_ac="this.ac" />
   <JuniorEnterpriseImpact
  :soma_nps="this.data[0].soma_nps"
  :meta_nps="this.data[0].meta_nps"
  :porc_nps="this.data[0].porc_nps"
  :soma_impacto="this.data[0].soma_impacto"
  :meta_impacto="this.data[0].meta_impacto"
  :porc_impacto="this.data[0].porc_impacto"
  :is_connected="this.connected"
  />
  <JuniorEnterpriseBillingChart/>
  <JuniorEnterpriseProjectChart/>
    </div>
</span>
</template>
<script>
import JuniorEnterpriseStronger from '@/components/juniorenterprises/JuniorEnterpriseStronger'
import JuniorEnterpriseConnected from '@/components/juniorenterprises/JuniorEnterpriseConnected'
import JuniorEnterpriseImpact from '@/components/juniorenterprises/JuniorEnterpriseImpact'
import JuniorEnterpriseMenu from '@/components/juniorenterprises/JuniorEnterpriseMenu'
import JuniorEnterpriseBillingChart from '@/components/juniorenterprises/JuniorEnterpriseBillingChart'
import JuniorEnterpriseProjectChart from '@/components/juniorenterprises/JuniorEnterpriseProjectChart'



export default {
    name: 'JuniorEnterpriseBattles',
    data () {
    return {
      data: [],
      ac: false,
      connected: false,
    }
  },
  mounted(){
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
        
        if(this.data[0].porc_fat >= 100 && this.data[0].porc_proj >= 100 && this.data[0].porc_mem >= 100 ){
          this.ac = true;
          if(this.data[0].porc_con >= 100 && this.data[0].porc_eve >= 100){
            this.connected = true
          }
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
    JuniorEnterpriseMenu,
    JuniorEnterpriseBillingChart,
    JuniorEnterpriseProjectChart
  }
}
</script>

<style scoped>

</style>

