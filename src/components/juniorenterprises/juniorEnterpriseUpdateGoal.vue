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
      <label for="inputPassword4">Cluster</label>
    <select class="form-control" id="">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    </div>
    <div class="form-group col-md-4">
      <label for="">% de Membros atual</label>
      <input type="text" class="form-control" id="" placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-4">
      <label for="">NPS atual</label>
      <input type="text" class="form-control" id="" placeholder="Digite somente números">
    </div>
  </div>
    <hr class="my-1">
<div class="form-row">
  
    <div class="form-group col-md-4">
      <label for="">Faturamento</label>
      <input type="text" class="form-control" id="" placeholder="Digite no formato 0.00">
    </div>
    <div class="form-group col-md-4">
      <label for="">Projetos</label>
      <input type="text" class="form-control" id="" placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-4">
      <label for="">% Membros que executam</label>
      <input type="text" class="form-control" id="" placeholder="Digite somente números">
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="">Ações compartilhadas</label>
      <input type="text" class="form-control" id="" placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-6">
      <label for="">% de Membros em eventos</label>
      <input type="text" class="form-control" id="" placeholder="Digite somente números">
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="">NPS</label>
      <input type="number" class="form-control" id="" placeholder="Digite somente números">
    </div>
    <div class="form-group col-md-6">
      <label for="">Projetos de Impacto</label>
      <input type="number" class="form-control" id="" placeholder="Digite somente números">
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
    }
  },
  components:{
  }
}
  </script>