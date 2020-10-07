<template>
<div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Projetos</h4>
                    <p class="card-description"> todos os campos são obrigatórios.</p>
                     <div class="row">
                        <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputName1">Data de assinatura do contrato</label>
                        <input type="date" class="form-control" v-model="project.signature_date" placeholder="Digite o nome da EJ">
                      </div>
                      </div>
                      
                        <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail3">Data prevista de entrega do projeto</label>
                        <input type="date" class="form-control" v-model="project.due_date" placeholder="Digite o e-mail da EJ">
                      </div>
                        </div>
                        </div>
                         <div class="row">
                        <div class="col-md-4">
                      <div class="form-group">
                        <label for="exampleTextarea1">Tempo estimado do projeto (Em dias úteis)</label>
                        <input  class="form-control" type="number" v-model="project.working_days"/>
                      </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputPassword4">Faturamento</label>
                        <input type="text" v-model="project.billing" class="form-control"  >
                      </div>
                      </div>
                       <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputPassword4">Número de projetos</label>
                        <input type="number" v-model="project.project_quantity" class="form-control"  >
                      </div>
                      </div>
                      </div>
         <div class="row">
                        <div class="col-md-4">
<div class="form-group row">
                            <label class="col-sm-12 col-form-label">Tipo</label>
                            <div class="col-sm-6">
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input type="radio" class="form-check-input" name="legal_person"  v-model="project.legal_person" value="0" checked=""> Pessoa Física <i class="input-helper"></i></label>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input type="radio" class="form-check-input" name="legal_person" v-model="project.legal_person"  value="1"> Pessoa Júridica <i class="input-helper"></i></label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-check form-check-info">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="1" v-model="project.shared_action" checked=""> Ação compartilhada? <i class="input-helper"></i></label>
                            </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-check form-check-info">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="1" v-model="project.guidance" checked=""> Acompanhamento de professor/coordenador <i class="input-helper"></i></label>
                            </div>
                        </div>
           </div>
           <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Serviços realizados</label>
                            <div class="col-sm-9">
                              <multiselect v-model="project.service" select-label="Clique para escolher" deselect-label="Clique para cancelar" placeholder="Escolha o(s) serviço(s)" track-by="id" :options="services" label="name" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                            </div>
                          </div>
                        </div>
                         <div class="col-md-6">
                        </div>
                      </div>
                        <button v-on:click="createProject()"  class="btn btn-info mr-2">Salvar</button>
                      <button class="btn btn-light">Cancelar</button>
                      </div>
                  </div>
                </div>
</template>
<script>
import Multiselect from 'vue-multiselect'


export default {
    name: 'ProjectForm',
    data () {
    return {
        services:[],
        project:{
          ej_id: this.$route.params.id,
          signature_date: '',
          due_date: '',
          working_days: '',
          project_quantity: '',
          billing: '',
          legal_person: '',
          shared_action: '',
          guidance: '',
          service: [],
          ods: []
        }
    }
  },
  components:{
    Multiselect
  },
  created()
  {
    this.loadServices()
  },
  methods:{
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

    },
   createProject() {
        this.$http.post(this.$urlAPI+`projeto/add`, {
        ej_id: this.project.ej_id,
        signature_date: this.project.signature_date,
        due_date: this.project.due_date,
        working_days: this.project.working_days,
        project_quantity: this.project.project_quantity,
        billing: this.project.billing,
        legal_person: this.project.legal_person,
        shared_action: this.project.shared_action,
        guidance: this.project.guidance
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
          this.$router.back();
        }else if(response.data.status == false && response.data.validacao){
          console.log(response.data.status);
            this.$toast.error({
            title:'Ops...',
            message:response.data.validacao,
            position:'bottom right',
            closeButton: false,
            progressBar: true,
            showDuration: 2000,
            hideDuration: 1000,
            timeOut: 3000
            })
        }
      }).catch(e => {
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