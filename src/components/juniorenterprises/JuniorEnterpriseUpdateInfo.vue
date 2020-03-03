<template>
<span>
<div class="form-row">
    <div class="form-group col-md-4">
    <label for="">Nome da Empresa Júnior</label>
      <input type="text" class="form-control" v-model="ej.name" placeholder="Digite o nome da EJ">
    </div>
    <div class="form-group col-md-4">
      <label for="">E-mail de contato</label>
      <input type="text" class="form-control" v-model="ej.email" placeholder="Digite o e-mail de Contato da EJ">
    </div>
    <div class="form-group col-md-4">
      <label for="">Sobre</label>
      <textarea class="form-control" v-model="ej.about" placeholder="Copiar da Brasil Júnior" id="exampleTextarea1" rows="4"></textarea>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
    <label for="">Data de federação</label>
      <input type="date"  class="form-control" v-model="ej.associated_since">
    </div>
    <div class="form-group col-md-4">
      <label for="">CNPJ</label>
      <input type="text" v-model="ej.cnpj" class="form-control"  placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-4">
      <label for="">Website</label>
      <input type="text" v-model="ej.website"  class="form-control"  placeholder="Digite o website da EJ">
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-4">
    <label for="">Núcleo</label>                             
     <multiselect v-model="ej.core" :options="cores" deselect-label="Clique para cancelar" select-label="Clique para escolher" placeholder="Selecione ou pesquise o núcleo" label="name" track-by="name"></multiselect>
    </div>
    <div class="form-group col-md-4">
      <label for="">Instituição de Ensino</label>
      <multiselect v-model="ej.foundation" :options="foundations" deselect-label="Clique para cancelar" select-label="Clique para escolher"  placeholder="Selecione ou pesquise a IES" label="name" track-by="id"></multiselect>
    </div>
    <div class="form-group col-md-4">
      <label for="">Número de membros</label>
      <input type="number" v-model="ej.members" class="form-control" id="" placeholder="Digite o números de Membros da EJ">
    </div>
  </div>
<div class="text-right">
    <button type="button" v-on:click="editEj()" class="btn btn-info btn-fw">Salvar</button>
</div>
  </span>

  
</template>
<script>
import Multiselect from 'vue-multiselect'


export default {
    name: 'JuniorEnterpriseUpdateInfo',
    data () {
    return {
        foundation:'',
        core:'',
      cores:[],
      foundations:[],
      ej:{
        id: '',
          name: '',
          email: '',
          about: '',
          associated_since: '',
          cnpj:'',
          website:'',
          members:'',
          foundation:[],
          core:[],
          service: [],
          degree: []
        }
    }
  },
  components:{
    Multiselect
  },
  created()
  {
      this.fillEj()
      this.loadCores()
      this.loadFoundations()
  },
  methods:{
    loadCores(){
      this.$http.get(this.$urlAPI+`nucleos`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.cores = response.data.success_data;
        }
      })
    },
    loadFoundations(){
      this.$http.get(this.$urlAPI+`instituicoes`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.foundations = response.data.success_data;
        }
      })
    },
     addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.degrees.push(tag)
    },
    fillEj(){
    this.$parent.$parent.$parent.startProgress()
    let id = this.$route.params.id
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`ejs/`+id, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.ej = response.data.success_data[0];
              this.$parent.$parent.$parent.stopProgress()
        }
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
    },
    editEj(){
      
    }
  }
}
  </script>

  
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>