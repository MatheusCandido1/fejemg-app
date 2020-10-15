<template>
    <div class="grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <FederationStateWidget />
                </div>
                <div class="row">
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