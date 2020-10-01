<template>
<AppTemplate>
  <span slot="content" v-if="dataLoaded">
        <CoreMenu v-on:selectMenu="menu_option = $event" :menu_option="this.menu_option" :core_image="this.data.core_image" :core_color="this.data.core_color" /> 

    <slot name="stronger" v-if="menu_option === 1">
        <CoreStronger/>
    </slot>

    <slot name="connected" v-if="menu_option === 2">
        <CoreConnected/>
    </slot>

  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import CoreMenu from '@/components/cores/CoreMenu'
import CoreStronger from '@/components/cores/CoreStronger'
import CoreConnected from '@/components/cores/CoreConnected'


export default {
    name: 'CoreDetail',
    data () {
    return {
        data: [],
        dataLoaded: false,
        menu_option: 1,
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
    CoreMenu,
    CoreStronger,
    CoreConnected
  }
}
</script>

<style scoped>

</style>

