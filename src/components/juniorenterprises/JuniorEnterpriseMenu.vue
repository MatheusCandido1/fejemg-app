<template>
<div class="col-12 grid-margin">
                <div class="card card-statistics">
                  <div class="row">
                    
                    <div class="card-col col-xl-6 col-lg-6 col-md-3 col-6 border-right">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <div class="wrapper text-center text-sm-left">
                            <div class="fluid-container">
                              <h5 class="mb-0 font-weight-medium">{{nome_ej}}</h5>
                              <tr>
                            <td>
                              <label class="badge badge-pill text-white"  :style="{ 'background-color': cor_nucleo }">{{nome_nucleo}}</label>
                            </td>
                            <td>
                              <label class="badge badge-warning badge-pill">{{ies}}</label>
                            </td>
                            <td>
                              <label class="badge badge-info badge-pill">Cluster {{cluster}}</label>
                            </td>
                          </tr>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-col col-xl-2 col-lg-2 col-md-3 col-6 border-right">
                      <button @click="ChooseMenuOption1" class="text-center">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i :style="{ 'color': cor_nucleo }" class="mdi mdi-trophy-outline  mr-0 mr-sm-4 icon-lg"></i>
                          <div class="wrapper text-center text-sm-left">
                            <div class="fluid-container">
                              <h5 style="margin-left: -20px" class="mb-0 font-weight-medium">Batalhas</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      </button>
                    </div>
                   <div class="card-col col-xl-2 col-lg-2 col-md-3 col-6 border-right">
                      <button @click="ChooseMenuOption2" class="text-center">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i :style="{ 'color': cor_nucleo }" class="mdi mdi-chart-bar mr-0 mr-sm-4 icon-lg"></i>
                          <div class="wrapper text-center text-sm-left">
                            <div class="fluid-container">
                              <h5 style="margin-left: -20px" class="mb-0 font-weight-medium">Resultados</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                     </button>

                    </div>
                    <div class="card-col col-xl-2 col-lg-2 col-md-3 col-6 border-right">
                            <button @click="ChooseMenuOption3" class="text-center">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i :style="{ 'color': cor_nucleo }" class="mdi mdi-upload  mr-0 mr-sm-4 icon-lg"></i>
                          <div class="wrapper text-center text-sm-left">
                            <div class="fluid-container">
                              <h5 style="margin-left: -20px" class="mb-0  font-weight-medium">Atualizar projetos</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'JuniorEnterpriseMenu',
    props:['menu_option','cor_nucleo','nome_ej','nome_nucleo','ies','cluster','id_ej'],
    data () {
    return {
      
     
    }
  },
  methods: {
    ChooseMenuOption1(event) {
      this.$emit('selectMenu', 1)
    },
    ChooseMenuOption2(event) {
      this.$emit('selectMenu', 2)
    },
    ChooseMenuOption3(event) {
      this.$emit('selectMenu', 3)
    }

  },
  components:{
  },
  
}
</script>

<style scoped>

</style>