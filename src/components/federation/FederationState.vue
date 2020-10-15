<template>
    <div class="grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <FederationStateWidget />
                </div>
                <div class="row d-flex align-items-center justify-content-center">
                    <h3 class="">Empresas Juniores por Instituição de Ensino</h3>
                    <FederationStateTreeMapChart />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FederationStateWidget from '../federation/FederationStateWidget';
import FederationStateTreeMapChart from '../federation/FederationStateTreeMapChart';
export default {
    name: 'FederationState',
    data () {
    return {
      data: []
    }
  },
  components:{
      FederationStateWidget,
      FederationStateTreeMapChart
  },
}
</script>

<style scoped>

</style>