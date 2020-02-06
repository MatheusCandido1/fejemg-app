<template>
<div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <img src="/static/images/logo.svg">
                </div>
                <slot name="main" /> 
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'LoginTemplate',
  data(){
    return {
        usuario: false
    }
  },
  components:{
  },
  created(){
    let usuarioAux = sessionStorage.getItem('usuario');
    if(usuarioAux){
      this.usuario = JSON.parse(usuarioAux);
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>
