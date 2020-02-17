<template>
<div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Núcleos</h4>
                    <p class="card-description"> todos os campos são obrigatórios.</p>
                      <div class="form-group">
                        <label for="exampleInputName1">Nome da Núcleo</label>
                        <input type="text" class="form-control" v-model="core.name" placeholder="Digite o nome do núcleo">
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail3">CNPJ</label>
                        <input type="email" class="form-control" v-model="core.cnpj" placeholder="Digite o CNPJ do núcleo, caso não tenha, preencha 00.000.000/0000-00">
                      </div>
                      <button  v-on:click="addNucleo()" class="btn btn-info mr-2">Salvar</button>
                      <button class="btn btn-light">Cancelar</button>
                  </div>
                </div>
              </div>
</template>
<script>


export default {
    name: 'CoreForm',
    data () {
    return {
        core:{
          name: '',
          cnpj: ''
        }
    }
  },
  methods:{
    addNucleo() {
       console.log(this.core);
        this.$http.post(this.$urlAPI+`nucleos/add`, {
        name: this.core.name,
        cnpj: this.core.cnpj,
        federation_id: 1
      },
      {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}}).then(response => {
         if(response.data.success_data){
          this.$toast.success({
            title:'Núcleos',
            message:'Núcleo salvo com sucesso!',
            position:'bottom right',
            closeButton: false,
            progressBar: true,
            showDuration: 2000,
            hideDuration: 1000,
            timeOut: 3000
            })
          this.$router.push('/nucleos');
        }else if(response.data.status == false && response.data.validacao){
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
        }
      }).catch(e => {
        console.log(e)
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


<style scoped>

</style>