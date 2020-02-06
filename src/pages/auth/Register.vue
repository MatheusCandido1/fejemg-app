<template>
    <loginTemplate>
        <span slot="main">
                <h4>Olá,</h4>
                <h6 class="font-weight-light">Faça sua conta!</h6>
                <div class="form-group">
                    <input type="text" class="form-control form-control-lg" v-model="nome" placeholder="Nome">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg" v-model="email" placeholder="E-mail">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-lg" v-model="password" placeholder="Senha">
                  </div>
                   <div class="form-group">
                    <input type="password" class="form-control form-control-lg" v-model="password_confirmation" placeholder="Confirmar senha">
                  </div>
                  <div class="mt-3">
                    <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" v-on:click="register()"
                    >Cadastrar</button>
                  </div>

                  <div class="text-center mt-4 font-weight-light">Já tem conta? 
                    <router-link to="/login" class="text-primary">Entre!</router-link>
                  </div>
                  </span>
    </loginTemplate>
</template>
<script>
import LoginTemplate from '@/templates/LoginTemplate'

export default {
  name: 'Register',
  data () {
    return {
      name:'',
      email:'',
      password:'',
      password_confirmation:''
    }
  },
  components:{
    LoginTemplate
  },
  methods:{
    register(){
      console.log("ok");
      this.$http.post(this.$urlAPI+`register`, {
        name: this.name,
        email: this.email,
        password:this.password,
        password_confirmation:this.password_confirmation
      })
      .then(response => {
        //console.log(response)
        if(response.data.status){
          // login com sucesso
          sessionStorage.setItem('usuario',JSON.stringify(response.data.usuario));
          this.$router.push('/');
        }else if(response.data.status == false && response.data.validacao){
          // erros de validação
          console.log('erros de validação')
          let erros = '';
          for(let erro of Object.values(response.data.erros)){
            erros += erro +" ";
          }
          alert(erros);

        }else{
          alert('Erro no cadastro! tente novamente mais tarde.');
        }
      })
      .catch(e => {
        console.log(e)
        alert("Erro! Tente novamente mais tarde!");
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
