<template>
<div class="col-12 grid-margin">
                <div class="card card-statistics">
                  <div class="row">
                    <div class="card-col col-xl-2 col-lg-2 col-md-2 col-6 border-right">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <img v-bind:src="core_image" class="img-lg rounded" alt="profile image">
                        </div>
                      </div>
                    </div>
                    <div class="card-col col-xl-2 col-lg-2 col-md-2 col-6 border-right">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                            <a style="cursor: pointer" @click="ChooseMenuOption1">
                          <i  class="mdi mdi-sword mr-0 mr-sm-4 icon-lg" :style="{color: core_color}"></i>
                          <div class="wrapper text-center ">
                            <div class="fluid-container">
                              <h5 class="mb-0 font-weight-medium">Mais fortes</h5>
                            </div>
                          </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-col col-xl-2 col-lg-2 col-md-2 col-6 border-right">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                            <a style="cursor: pointer" @click="ChooseMenuOption2">
                          <i class="mdi mdi-lan-connect mr-0 mr-sm-4 icon-lg" :style="{color: core_color}"></i>
                          <div class="wrapper text-center text-sm-left">
                            <div class="fluid-container">
                              <h5 class="mb-0 font-weight-medium">Conectados</h5>
                            </div>
                          </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-col col-xl-2 col-lg-2 col-md-2 col-6 border-right">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                        <a style="cursor: pointer" @click="ChooseMenuOption3">
                          <i class="mdi mdi-image mr-0 mr-sm-4 icon-lg" :style="{color: core_color}"></i>
                          <div class="wrapper text-center text-sm-left">
                            <div class="fluid-container">
                              <h5 class="mb-0 font-weight-medium">Em toda MG</h5>
                            </div>
                          </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-col col-xl-2 col-lg-2 col-md-2 col-6 border-right">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                        <a style="cursor: pointer" @click="ChooseMenuOption4">
                          <i class="mdi mdi-account-multiple-plus mr-0 mr-sm-4 icon-lg" :style="{color: core_color}"></i>
                          <div class="wrapper text-center text-sm-left">
                            <div class="fluid-container">
                              <h5 class="mb-0 font-weight-medium">Líderes que fazem</h5>
                            </div>
                          </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-col col-xl-2 col-lg-2 col-md-2 col-6 border-right">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                        <a style="cursor: pointer" @click="ChooseMenuOption5">
                          <i class="mdi mdi-earth mr-0 mr-sm-4 icon-lg" :style="{color: core_color}"></i>
                          <div class="wrapper text-center text-sm-left">
                            <div class="fluid-container">
                              <h5 class="mb-0 font-weight-medium">Alto Impacto</h5>
                            </div>
                          </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>

export default {
    name: 'CoreMenu',
    props: ['menu_option','core_image','core_color'],
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
    },
    ChooseMenuOption4(event) {
      this.$emit('selectMenu', 4)
    },
    ChooseMenuOption5(event) {
      this.$emit('selectMenu', 5)
    }
  },
  components:{
  },
  
}
</script>

<style scoped>

</style>