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
                              <label class="badge badge-danger badge-pill">{{nome_nucleo}}</label>
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
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i class="mdi mdi-trophy-outline text-primary mr-0 mr-sm-4 icon-lg"></i>
                          <div class="wrapper text-center text-sm-left">
                            <div class="fluid-container">
                              <h5 class="mb-0 font-weight-medium">Batalhas</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   <div class="card-col col-xl-2 col-lg-2 col-md-3 col-6 border-right">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i class="mdi mdi-chart-bar text-primary mr-0 mr-sm-4 icon-lg"></i>
                          <div class="wrapper text-center text-sm-left">
                            <div class="fluid-container">
                              <h5 class="mb-0 font-weight-medium">Resultados</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-col col-xl-2 col-lg-2 col-md-3 col-6 border-right">
                            <router-link :to="'/empresa-junior/'+id_ej+'/projetos/add'">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i class="mdi mdi-upload text-primary mr-0 mr-sm-4 icon-lg"></i>
                          <div class="wrapper text-center text-sm-left">
                            <div class="fluid-container">
                              <h5 class="mb-0 font-weight-medium">Atualizar projetos</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'JuniorEnterpriseMenu',
    props:['nome_ej','nome_nucleo','ies','cluster','id_ej'],
    data () {
    return {
      
     
    }
  },
  components:{
  },
}
</script>

<style scoped>

</style>