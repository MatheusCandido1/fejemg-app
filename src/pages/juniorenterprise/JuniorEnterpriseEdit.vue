<template>
<AppTemplate>
  <span slot="content">
    <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Informações da Empresa Júnior</h4>
                    <p class="card-description">Por aqui, você consegue editar e atualizar tudo sobre a EJ!<p>
                    </p>
                    <div class="row">
                      <div class="col-2">
                        <ul class="nav nav-pills nav-pills-vertical nav-pills-info" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                          <li class="nav-item">
                            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                              <i class="mdi mdi-chart-line"></i> Metas </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                              <i class="mdi mdi-circle-edit-outline"></i> Dados </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-10">
                        <div class="tab-content tab-content-vertical" id="v-pills-tabContent">
                          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div class="media">
                              <div class="media-body">
                              <JuniorEnterpriseUpdateGoal/>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <div class="media">
                              <div class="media-body">
                              <JuniorEnterpriseUpdateInfo/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  </span>
</AppTemplate>
</template>
<script>
import AppTemplate from '@/templates/AppTemplate'
import JuniorEnterpriseUpdateGoal from '@/components/juniorenterprises/JuniorEnterpriseUpdateGoal'
import JuniorEnterpriseUpdateInfo from '@/components/juniorenterprises/JuniorEnterpriseUpdateInfo'



export default {
    name: 'JuniorEnterpriseEdit',
    data () {
    return {
    }
  },
  components:{
    AppTemplate,
    JuniorEnterpriseUpdateGoal,
    JuniorEnterpriseUpdateInfo
  }
}
</script>

<style scoped>

</style>

