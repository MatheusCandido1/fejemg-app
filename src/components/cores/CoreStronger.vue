<template>
      <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                      <CoreBillingChart />
                  </div>
                </div>
              </div>
</template>
<script>
import CoreBillingChart from '../cores/CoreBillingChart';
export default {
    name: 'CoreStronger',
    data () {
    return {
      data: []
    }
  },
  components:{
    CoreBillingChart
  },
}
</script>

<style scoped>

</style>