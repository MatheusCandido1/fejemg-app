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
                          <div class="row">
                        <div class="col-lg-12">
                      <CoreMandalaChart />
                          </div>
                          </div>
                  </div>
                </div>
              </div>
</template>
<script>
import CoreBillingChart from '../cores/CoreBillingChart';
import CoreProjectChart from '../cores/CoreProjectChart';
import CoreMandalaChart from '../cores/CoreMandalaChart';

export default {
    name: 'CoreStronger',
    data () {
    return {
      data: []
    }
  },
  components:{
    CoreBillingChart,
    CoreProjectChart,
    CoreMandalaChart
  },
}
</script>

<style scoped>

</style>