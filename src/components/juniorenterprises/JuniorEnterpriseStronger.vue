<template>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
                <div class="card card-statistics social-card card-default">
                  <div class="card-header header-sm">
                    <div class="d-flex align-items-center">
                      <div class="wrapper d-flex align-items-center media-info text-twitter">
                      </div>
                      <td class="pl-0"><h5 class="mb-0 font-weight-medium">Alto Crescimento</h5></td>
                                            <div class="wrapper ml-auto action-bar">
                          <div class="badge badge-pill badge-danger">32%</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                      <div class="template-demo">
                          <h4>Faturamento</h4>
                      <div class="d-flex justify-content-between">
                        <small >R$ {{soma_fat}} </small>
                        <small>R$ {{meta_fat}} </small>
                      </div>
                      <div class="progress progress-lg mt-2">
                        <div class="progress-bar bg-success" role="progressbar" :style="{ 'width': porc_fat+'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{{porc_fat}}%</div>
                      </div>
                    </div>
                    <div class="template-demo">
                          <h4>Projetos</h4>
                      <div class="d-flex justify-content-between">
                        <small> {{soma_proj}} </small>
                        <small> {{meta_proj}}</small>
                      </div>
                      <div class="progress progress-lg mt-2">
                        <div class="progress-bar bg-danger" role="progressbar" :style="{ 'width': porc_proj+'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{{porc_proj}}%</div>
                      </div>
                    </div>
                    <div class="template-demo">
                          <h4> % Membros que executam</h4>
                      <div class="d-flex justify-content-between">
                        <small>70%</small>
                        <small>100%</small>
                      </div>
                      <div class="progress progress-lg mt-2">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'JuniorEnterpriseStronger',
    props:['soma_fat','soma_proj','meta_fat', 'meta_proj', 'porc_fat', 'porc_proj'],
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