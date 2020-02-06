<template>
<span>
<div class="container-scroller">
  <Navbar/>
        <div class="container-fluid page-body-wrapper">
            <Sidebar/>
            <div class="main-panel">
          <div class="content-wrapper">
            <slot name="content"/>
          </div>
      <Footer/>
        </div>
      </div>
    </div>
</span>
</template>


<script>
import Navbar from '@/components/partials/Navbar'
import Sidebar from '@/components/partials/Sidebar'
import Footer from '@/components/partials/Footer'

export default {
  name: 'AppTemplate',
  data(){
    return {
      usuario: false
    }
  },
  components:{
    Navbar,
    Sidebar,
    Footer
  },
  created(){
    let usuarioAux = sessionStorage.getItem('usuario');
    if(usuarioAux){
      this.usuario = JSON.parse(usuarioAux);
    }else{
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>



