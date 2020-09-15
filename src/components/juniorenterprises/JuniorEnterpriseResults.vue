<template>
<div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Resultados</h4>
                    <table class="table">
                      <thead>
                        <tr>
                          <th style="width: 50%" class="text-center">Mês</th>
                          <th style="width: 50%" class="text-center">Faturamento</th>
                        </tr>
                      </thead>
                      <tbody>
                       <!-- <tr v-for="item in data" :key="item.id" style="width: 50%" class="text-center">
                          <td>{{item.x}}</td>
                          <td>{{item.y}}</td>
                        </tr> -->
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
</template>

<script>

export default {
    name: 'JuniorEnterpriseResults',
    data () {
    return {
      data: []
    }
  },
   components:{
  }
}
</script>

<style scoped>

</style>
