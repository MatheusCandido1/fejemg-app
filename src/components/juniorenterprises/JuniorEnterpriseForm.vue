<template>
<div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Empresas Juniores</h4>
                    <p class="card-description"> todos os campos são obrigatórios.</p>
                      <div class="form-group">
                        <label for="exampleInputName1">Nome da Empresa Júnior</label>
                        <input type="text" class="form-control" v-model="ej.name" placeholder="Digite o nome da EJ">
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail3">Email de contato</label>
                        <input type="email" class="form-control" v-model="ej.email" placeholder="Digite o e-mail da EJ">
                      </div>
                      <div class="form-group">
                        <label for="exampleTextarea1">Sobre</label>
                        <textarea class="form-control" placeholder="Copiar da Brasil Júnior" v-model="ej.about" rows="4"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword4">Data da federação</label>
                        <input type="date" class="form-control" v-model="ej.associated_since" >
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Nº de membros</label>
                            <div class="col-sm-9">
                              <input type="number" placeholder="Somente números" v-model="ej.members" class="form-control" />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Website</label>
                            <div class="col-sm-9">
                              <input type="text" placeholder="Digite o site da EJ" v-model="ej.website" class="form-control" />
                            </div>
                          </div>
                        </div>
                          <div class="col-md-4">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">CNPJ</label>
                            <div class="col-sm-9">
                              <input type="text" placeholder="Digite somente números" v-model="ej.cnpj" class="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Núcleo</label>
                            <div class="col-sm-9">
                              <multiselect v-model="ej.core_id" :options="cores" deselect-label="Clique para cancelar" select-label="Clique para escolher" placeholder="Selecione ou pesquise o núcleo" label="name" track-by="id"></multiselect>

                            </div>
                          </div>
                        </div>
                         <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Instituição de Ensino</label>
                            <div class="col-sm-9">
                              <multiselect v-model="ej.foundation_id" :options="foundations" deselect-label="Clique para cancelar" select-label="Clique para escolher"  placeholder="Selecione ou pesquise a IES" label="name" track-by="id"></multiselect>
                            
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Cursos</label>
                            <div class="col-sm-9">
                             <multiselect v-model="ej.degree" 	select-label="Clique para escolher" deselect-label="Clique para cancelar" placeholder="Escolha o(s) curso(s)" track-by="id" :options="degrees" label="name" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                            </div>
                          </div>
                        </div>
                         <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Serviços</label>
                            <div class="col-sm-9">
                              <multiselect v-model="ej.service" select-label="Clique para escolher" deselect-label="Clique para cancelar" placeholder="Escolha o(s) serviço(s)" track-by="id" :options="services" label="name" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <button v-on:click="addEj()"  class="btn btn-info mr-2">Salvar</button>
                      <button class="btn btn-light">Cancelar</button>
                  </div>
                </div>
              </div>
</template>
<script>
import Multiselect from 'vue-multiselect'


export default {
    name: 'JuniorEnterpriseForm',
    data () {
    return {
        foundation:'',
        core:'',
        cores:[],
        foundations:[],
        services:[],
        degrees:[],
        ej:{
          name: '',
          email: '',
          about: '',
          associated_since: '',
          cnpj:'',
          website:'',
          members:'',
          foundation_id:'',
          core_id:'',
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
    this.loadCores()
    this.loadFoundations()
    this.loadDegrees()
    this.loadServices()
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
    loadDegrees(){
      this.$http.get(this.$urlAPI+`cursos`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.degrees = response.data.success_data;
        }
      })
    },
    loadServices(){
      this.$http.get(this.$urlAPI+`servicos`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.services = response.data.success_data;
        }
      })
    },
     addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.services.push(tag)
      this.degrees.push(tag)
    },
   addEj() {
        this.$http.post(this.$urlAPI+`ej/add`, {
        name: this.ej.name,
        email: this.ej.email,
        about: this.ej.about,
        associated_since: this.ej.associated_since,
        cnpj: this.ej.cnpj,
        website: this.ej.website,
        members: this.ej.members,
        foundation_id: this.ej.foundation_id.id,
        core_id: this.ej.core_id.id,
        services_id: this.ej.service.map(service => service.id),
        degrees_id: this.ej.degree.map(degree => degree.id)
      },
      {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}}).then(response => {
         if(response.data.success_data){
          this.$toast.success({
            title:'Empresas Júniores',
            message: response.data.success_message,
            position:'bottom right',
            closeButton: false,
            progressBar: true,
            showDuration: 2000,
            hideDuration: 1000,
            timeOut: 3000
            })
          this.$router.push('/empresas-juniores');
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
        console.log(e.response)
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>

</style>