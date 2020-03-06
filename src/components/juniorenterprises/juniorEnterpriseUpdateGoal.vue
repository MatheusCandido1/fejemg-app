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
      <input type="text" class="form-control" v-model="goal.members_performing" placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-4">
      <label for="">NPS atual</label>
      <input type="text" class="form-control" v-model="goal.nps" placeholder="Digite somente números">
    </div>
  </div>
    <hr class="my-1">
<div class="form-row">
  
    <div class="form-group col-md-4">
      <label for="">Faturamento</label>
      <input type="text" class="form-control" v-model="goal.billing"  placeholder="Digite no formato 0.00">
    </div>
    <div class="form-group col-md-4">
      <label for="">Projetos</label>
      <input type="text" class="form-control" v-model="goal.projects"  placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-4">
      <label for="">% Membros que executam</label>
      <input type="text" class="form-control"  v-model="goal.members_performing_goal" placeholder="Digite somente números">
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="">Ações compartilhadas</label>
      <input type="text" class="form-control" v-model="goal.shared_actions"  placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-6">
      <label for="">% de Membros em eventos</label>
      <input type="text" class="form-control" v-model="goal.members_events"  placeholder="Digite somente números">
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="">NPS</label>
      <input type="number" class="form-control" v-model="goal.current_nps"  placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-6">
      <label for="">Projetos de Impacto</label>
      <input type="number" class="form-control"  placeholder="Digite somente números">
    </div>
  </div>


        <div class="text-right">
    <button type="button" v-on:click="updateGoals()" class="btn btn-info btn-fw">Salvar</button>
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
          id: '', 
          cluster: '',
          billing: '',
          projects: '',
          members_performing: '',
          shared_actions: '',
          members_events: '',
          nps:'',
          impact_projects:'',
          meta_nps:'',
          members_performing_goal: '',
          current_nps: '',
          current_members_events: ''
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
      this.$http.get(this.$urlAPI+`ejs/`+id+`/metas/`+year, {"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
        if(response.status){
          this.goal = response.data.success_data[0].junior_enterprise_goals[0];
          console.log(this.goal)
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
    updateGoals(){
      this.$http.put(this.$urlAPI+`atualizar/meta/`+this.goal.id, {
          cluster: this.goal.cluster,
          billing: this.goal.billing,
          projects: this.goal.projects,
          members_performing: this.goal.members_performing,
          shared_actions: this.goal.shared_actions,
          members_events: this.goal.members_events,
          nps:this.goal.nps,
          impact_projects:this.goal.impact_projects,
          meta_nps:this.goal.meta_nps,
          members_performing_goal: this.goal.members_performing_goal,
          current_nps: this.goal.current_nps,
          current_members_events: this.goal.current_members_events
      },{"headers":{"authorization":"Bearer "+this.$store.getters.getToken}})
      .then(response => {
         if(response.data.success_data){
          this.$toast.success({
            title:'Empresas Júniores',
            message: 'Metas atualizadas com sucesso',
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
      })
      .catch(e => {
        console.log(e)
        alert("Erro! Tente novamente mais tarde!");
      })
    }
  }
}
  </script>