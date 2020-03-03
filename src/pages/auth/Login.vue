<template>
<LoginTemplate>
<span slot="main">
                <h4>Olá,</h4>
                <h6 class="font-weight-light">Use e-mail e senha para continuar</h6>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg" v-model="email" placeholder="E-mail">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-lg" v-model="password" placeholder="Senha">
                  </div>
                  <div class="mt-3">
                    <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" v-on:click="login()"
                    >Entrar</button>
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input"> Manter-me logado </label>
                    </div>
                    <a href="#" class="auth-link text-black">Esqueceu sua senha?</a>
                  </div>
                  <div class="text-center mt-4 font-weight-light"> Não tem conta? 
                    <router-link to="/register" class="text-primary">Crie!</router-link>
                  </div>
                  </span>
</LoginTemplate>
</template>

<script>
import LoginTemplate from '@/templates/LoginTemplate'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

export default {
  name: 'Login',
  data () {
    return {
      email:'',
      password:''
    }
  },
  components:{
    LoginTemplate
  },
  methods:{
    login(){
      
    this.$parent.startProgress()
      this.$http.post(this.$urlAPI+`login`, {
        email: this.email,
        password:this.password
      })
      .then(response => {
        //console.log(response)
        if(response.data.status){
          // login com sucesso
          this.$toast.success({
            title:'Bem vindo',
            message:'Login realizado com sucesso!',
            position:'bottom right',
            closeButton: false,
            progressBar: true,
            showDuration: 2000,
            hideDuration: 1000,
            timeOut: 3000
            })
          sessionStorage.setItem('usuario',JSON.stringify(response.data.usuario));
          this.$router.push('/');
        }else if(response.data.status == false && response.data.validacao){
          console.log('erros de validação')
          let erros = '';
          for(let erro of Object.values(response.data.erros)){
            erros += erro +" ";
          }
           this.$toast.error({
            title:'Ops...',
            message:'Verifique os dados',
            position:'bottom right',
            closeButton: false,
            progressBar: true,
            showDuration: 2000,
            hideDuration: 1000,
            timeOut: 3000
            })

        }else{
          this.$toast.error({
            title:'Ops...',
            message:'Email ou senha incorretos',
            position:'bottom right',
            closeButton: false,
            progressBar: true,
            showDuration: 2000,
            hideDuration: 1000,
            timeOut: 3000
            })

        }
        this.$parent.stopProgress()
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

