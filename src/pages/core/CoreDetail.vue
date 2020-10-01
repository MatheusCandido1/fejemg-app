<template>
<AppTemplate>
  <span slot="content" v-if="dataLoaded">
        <CoreMenu :core_image="this.data.core_image" :core_color="this.data.core_color" /> 

  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import CoreMenu from '@/components/cores/CoreMenu'



export default {
    name: 'CoreDetail',
    data () {
    return {
        data: [],
        dataLoaded: false
    }
  },
  methods:{
    getData(){
    let id = this.$route.params.id
    let year = this.$route.params.year
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`nucleos/`+id+`/resultados/`+year, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.data = response.data.success_data.core;
          this.dataLoaded = true;
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
    }
  },
  mounted(){
    this.getData();
  },
  components:{
    AppTemplate,
    CoreMenu
  }
}
</script>

<style scoped>

</style>

