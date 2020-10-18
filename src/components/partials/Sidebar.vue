<template>
<nav  class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
    <li class="nav-item nav-profile">
      <a href="#" class="nav-link">
        <div class="nav-profile-image">
          <img src="/static/images/faces/face1.jpg" alt="profile">
          <span class="login-status online"></span>
          <!--change to offline or busy as needed-->
        </div>
        <div class="nav-profile-text d-flex flex-column">
          <span class="font-weight-bold mb-2">{{usuario.name}}</span>
          <span class="text-secondary text-small">{{usuario.email}}</span>
        </div>
      </a>
    </li>
    
     <li class="nav-item">
      <router-link class="nav-link" to="/">
        <span class="menu-title">Minas Gerais</span>
        <i class="mdi mdi-triangle menu-icon"></i>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/nucleos">
        <span class="menu-title">Núcleos</span>
        <i class="mdi mdi-source-fork menu-icon"></i>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/empresas-juniores">
        <span class="menu-title">Empresas Juniores</span>
        <i class="mdi mdi-rocket menu-icon"></i>
      </router-link>
    </li>
    <div class="border-bottom">
          </div>

   
  </ul>
</nav>
</template>
<script>
export default {
    name: 'Siderbar',
    props: [],
    data () {
        return {
          usuario: false
        }
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