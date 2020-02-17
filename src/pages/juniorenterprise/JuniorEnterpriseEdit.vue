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
                                <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">2020</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
</div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <div class="media">
                              <div class="media-body">
                                <p>I'm thinking two circus clowns dancing. You? Finding a needle in a haystack isn't hard when every straw is computerized. Tell him time is of the essence. Somehow, I doubt that. You have a good heart, Dexter.</p>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <div class="media">
                              <div class="media-body">
                                <p> I'm really more an apartment person. This man is a knight in shining armor. Oh I beg to differ, I think we have a lot to discuss. After all, you are a client. You all right, Dexter? </p>
                                <p> I'm generally confused most of the time. Cops, another community I'm not part of. You're a killer. I catch killers. Hello, Dexter Morgan. </p>
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



export default {
    name: 'JuniorEnterpriseEdit',
    data () {
    return {
    }
  },
  components:{
    AppTemplate
  }
}
</script>

<style scoped>

</style>

