<template>
 <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
    <a class="navbar-brand brand-logo" href="index.html"><img src="/static/images/logo.svg" alt="logo" /></a>
    <a class="navbar-brand brand-logo-mini" href="index.html"><img src="/static/images/logo-mini.svg" alt="logo" /></a>
  </div>
  <div class="navbar-menu-wrapper d-flex align-items-stretch">
    <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
      <span class="mdi mdi-menu"></span>
    </button>
    <div class="search-field d-none d-md-block">
      <form class="d-flex align-items-center h-100" action="#">
        <div class="input-group">
          <div class="input-group-prepend bg-transparent">
            <i class="input-group-text border-0 mdi mdi-magnify"></i>
          </div>
          <input type="text" class="form-control bg-transparent border-0" placeholder="Procurar..">
        </div>
      </form>
    </div>
    <ul class="navbar-nav navbar-nav-right">
      <li class="nav-item dropdown">
        <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
          <i class="mdi mdi-bell-outline"></i>
          <span class="count-symbol bg-danger"></span>
        </a>
        <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
          <h6 class="p-3 mb-0">Notificações</h6>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item preview-item">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-success">
                <i class="mdi mdi-calendar"></i>
              </div>
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject font-weight-normal mb-1">Event today</h6>
              <p class="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
            </div>
          </a>
          <div class="dropdown-divider"></div>
         
          <div class="dropdown-divider"></div>
          <h6 class="p-3 mb-0 text-center">Ver todas</h6>
        </div>
      </li>
      <li class="nav-item nav-profile dropdown">
        <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
          <div class="nav-profile-img">
            <img src="/static/images/faces/face1.jpg" alt="image">
            <span class="availability-status online"></span>
          </div>
          <div class="nav-profile-text">
            <p class="mb-1 text-black">{{usuario.name}}</p>
          </div>
        </a>
        <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
          <a class="dropdown-item" href="#">
            <i class="mdi mdi-key mr-2 text-success"></i> Trocar senha </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" v-on:click="sair()">
            <i class="mdi mdi-logout mr-2 text-primary" ></i> Sair </a>
        </div>
      </li>
    </ul>
    <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span class="mdi mdi-menu"></span>
    </button>
  </div>
</nav>
</template>
<script>
export default {
    name: 'Navbar',
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
    },
    methods:{
      
      sair(){
        this.$confirm("Tem certeza que desejar sair?").then(
          () => {
      sessionStorage.clear();
        this.usuario = false;
        this.$router.push('/login');
         this.$toast.info({
            title:'Até a próxima!',
            message:'Logout realizado com sucesso.',
            position:'bottom right',
            closeButton: false,
            progressBar: true,
            showDuration: 2000,
            hideDuration: 1000,
            timeOut: 3000
            })
});
        
      }
    }
}
</script>

<style scoped>

</style>