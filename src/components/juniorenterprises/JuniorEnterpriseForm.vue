<template>
<div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Empresas Juniores</h4>
                    <p class="card-description"> todos os campos são obrigatórios.</p>
                      <div class="form-group">
                        <label for="exampleInputName1">Nome da Empresa Júnior</label>
                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Digite o nome da EJ">
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail3">Email de contato</label>
                        <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Digite o e-mail da EJ">
                      </div>
                      <div class="form-group">
                        <label for="exampleTextarea1">Sobre</label>
                        <textarea class="form-control" placeholder="Copiar da Brasil Júnior" id="exampleTextarea1" rows="4"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword4">Data da federação</label>
                        <input type="date" class="form-control" id="exampleInputPassword4" >
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group row">
                            <label class="col-sm-6 col-form-label">Nº de membros</label>
                            <div class="col-sm-6">
                              <input type="number" placeholder="Somente números" class="form-control" />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Website</label>
                            <div class="col-sm-9">
                              <input type="text" placeholder="Digite o site da EJ" class="form-control" />
                            </div>
                          </div>
                        </div>
                          <div class="col-md-4">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">CNPJ</label>
                            <div class="col-sm-9">
                              <input type="text" placeholder="Digite somente números" class="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Núcleo</label>
                            <div class="col-sm-9">
                              <multiselect v-model="core" :options="cores" deselect-label="Clique para cancelar" select-label="Clique para escolher" placeholder="Selecione ou pesquise o núcleo" label="name" track-by="id"></multiselect>

                            </div>
                          </div>
                        </div>
                         <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Instituição de Ensino</label>
                            <div class="col-sm-9">
                              <multiselect v-model="foundation" :options="foundations" deselect-label="Clique para cancelar" select-label="Clique para escolher"  placeholder="Selecione ou pesquise a IES" label="name" track-by="id"></multiselect>
                            
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Cursos</label>
                            <div class="col-sm-9">
                             <multiselect v-model="degree" 	select-label="Clique para escolher" deselect-label="Clique para cancelar" placeholder="Escolha o(s) curso(s)" track-by="id" :options="degrees" label="name" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                            </div>
                          </div>
                        </div>
                         <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Serviços</label>
                            <div class="col-sm-9">
                              <multiselect v-model="service" select-label="Clique para escolher" deselect-label="Clique para cancelar" placeholder="Escolha o(s) serviço(s)" track-by="id" :options="services" label="name" :multiple="true" :taggable="true" @tag="addTag"></multiselect>

                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <button type="submit" class="btn btn-info mr-2">Salvar</button>
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
        degree:'',
        service:'',
        foundation:'',
        core:'',
        cores:[],
        foundations:[],
        services:[],
        degrees:[]
    }
  },
  components:{
    Multiselect
  },
  created()
  {
      this.$http.get(this.$urlAPI+`nucleos`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.cores = response.data.success_data;
        }
      })

      this.$http.get(this.$urlAPI+`instituicoes`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.foundations = response.data.success_data;
        }
      })

      this.$http.get(this.$urlAPI+`cursos`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.degrees = response.data.success_data;
        }
      })

      this.$http.get(this.$urlAPI+`servicos`, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.services = response.data.success_data;
        }
      })
  },
  methods:{
     addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.degrees.push(tag)
    }
  }

}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>

</style>