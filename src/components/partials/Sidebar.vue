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
      <a class="nav-link" data-toggle="collapse" href="#battles" aria-expanded="false" aria-controls="battles">
        <span class="menu-title">Batalhas</span>
        <i class="menu-arrow"></i>
        <i class="mdi mdi-checkerboard menu-icon"></i>
      </a>
      <div class="collapse" id="battles">
        <ul class="nav flex-column sub-menu">
          <li class="nav-item"> <a class="nav-link" href="pages/samples/blank-page.html"> Mais fortes </a></li>
          <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Conectados </a></li>
          <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Em toda Minas Gerais </a></li>
          <li class="nav-item"> <a class="nav-link" href="pages/samples/error-404.html"> Lideres que fazem </a></li>
          <li class="nav-item"> <a class="nav-link" href="pages/samples/error-500.html"> Projetos de Alto Impacto </a></li>
        </ul>
      </div>
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