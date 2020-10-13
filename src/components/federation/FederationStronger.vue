<template>
    <div class="grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="row">
                        <div class="col-lg-6">
                      <FederationBillingChart />
                          </div>
                           <div class="col-lg-6">
                      <FederationProjectChart /> 
                          </div>
                          </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import FederationBillingChart from '../federation/FederationBillingChart';
import FederationProjectChart from '../federation/FederationProjectChart';

export default {
    name: 'FederationStronger',
    data () {
    return {
      data: []
    }
  },
  components:{
    FederationBillingChart,
    FederationProjectChart
  },
}
</script>

<style scoped>

</style>