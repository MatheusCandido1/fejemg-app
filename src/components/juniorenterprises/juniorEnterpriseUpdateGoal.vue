<template>
<span>
                                <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">2020</a>
        <a class="nav-item nav-link   disabled disabledTab" id="nav-home-tab"  data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">2021</a>
                <a class="nav-item nav-link  disabled disabledTab" id="nav-home-tab"  data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">2022</a>

  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    
<div class="form-row">
  
    <div class="form-group col-md-4">
      <label for="">Cluster</label>
      <input type="number" min="1" max="5" v-model="goal.cluster" class="form-control" >
    </div>
    <div class="form-group col-md-4">
      <label for="">% de Membros atual</label>
      <input type="text" class="form-control" v-model="goal.mem_fat" placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-4">
      <label for="">NPS atual</label>
      <input type="text" class="form-control" v-model="goal.soma_nps" placeholder="Digite somente números">
    </div>
  </div>
    <hr class="my-1">
<div class="form-row">
  
    <div class="form-group col-md-4">
      <label for="">Faturamento</label>
      <input type="text" class="form-control" v-model="goal.meta_fat"  placeholder="Digite no formato 0.00">
    </div>
    <div class="form-group col-md-4">
      <label for="">Projetos</label>
      <input type="text" class="form-control" v-model="goal.meta_proj"  placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-4">
      <label for="">% Membros que executam</label>
      <input type="text" class="form-control"  v-model="goal.mem_meta" placeholder="Digite somente números">
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="">Ações compartilhadas</label>
      <input type="text" class="form-control" v-model="goal.meta_con"  placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-6">
      <label for="">% de Membros em eventos</label>
      <input type="text" class="form-control" v-model="goal.meta_eve"  placeholder="Digite somente números">
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="">NPS</label>
      <input type="number" class="form-control" v-model="goal.meta_nps"  placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-6">
      <label for="">Projetos de Impacto</label>
      <input type="number" class="form-control"  placeholder="Digite somente números">
    </div>
  </div>


        <div class="text-right">
    <button type="button" class="btn btn-info btn-fw">Salvar</button>
</div>
  </div>
</div>
</span>
</template>
<script>
export default {
    name: 'JuniorEnterpriseUpdateGoal',
    data () {
    return {
      goal:{
          cluster: '',
          mem_fat: '',
          soma_nps: '',
          meta_proj: '',
          meta_fat: '',
          mem_meta: '',
          meta_con:'',
          meta_eve:'',
          meta_nps:''
        }
    }
  },
  created()
  {
      this.fillGoals()
  },
  components:{
  },
  methods:{
    fillGoals(){
    this.$parent.$parent.$parent.startProgress()
    let id = this.$route.params.id
    let year = new Date().getFullYear()
    let usuarioAux = this.$store.getters.getUsuario;
    if(usuarioAux){
      this.usuario = this.$store.getters.getUsuario;
      this.$http.get(this.$urlAPI+`ejs/`+id+`/meta/`+year, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.goal = response.data.success_data[0];
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
    }
  }
}
  </script>