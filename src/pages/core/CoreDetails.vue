<template>
<AppTemplate>
  <span slot="content">
        <CoreMenu /> 

  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import CoreMenu from '@/components/cores/CoreMenu'



export default {
    name: 'CoreDetails',
    data () {
    return {
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
    CoreMenu
  }
}
</script>

<style scoped>

</style>

