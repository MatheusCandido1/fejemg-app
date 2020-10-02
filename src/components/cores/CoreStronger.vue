<template>
      <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                      <div class="row">
                        <div class="col-lg-6">
                      <CoreBillingChart />
                          </div>
                           <div class="col-lg-6">
                      <CoreProjectChart />
                          </div>
                          </div>
                  </div>
                </div>
              </div>
</template>
<script>
import CoreBillingChart from '../cores/CoreBillingChart';
import CoreProjectChart from '../cores/CoreProjectChart';
export default {
    name: 'CoreStronger',
    data () {
    return {
      data: []
    }
  },
  components:{
    CoreBillingChart,
    CoreProjectChart
  },
}
</script>

<style scoped>

</style>